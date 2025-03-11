import { v4 as UUID } from "uuid";

const playlists = [{
    "id": "1",
        "tag": "exemplo-01",
        "type": "EXEMPLO-01",
        "musics": []
}];

export default {
    //GET All playlists
    allTags: () => {
        if (playlists.length === 0) {
            return { message: "Nenhuma tag encontrada." };
        }
        return playlists;
    },

    //POST Tag
    addTag: (type) => {
        const existsTAG = playlists.find(tagname => tagname.type === type);

        if (existsTAG) {
            return { message: "Tag já existe no sistema!" }
        }

        const createTagMusic = {
            id: UUID(),
            tag: `${type}`.toLowerCase(),
            type: type,
            musics: []
        };

        playlists.push(createTagMusic);

        return { message: `${createTagMusic.type} foi salvo com sucesso!` };
    },
    //POST Music
    addMusic: (idTAG, title, artist, year, album) => {

        const tagID = playlists.findIndex(music => music.type === idTAG);
        const verifyMusicID = playlists[tagID].musics.find(music => music.title === title);

        if (tagID === -1) {
            return { message: "Tag não encontrada!" };
        }

        if (verifyMusicID) {
            return { message: "Música já existe nesta PlayList!" };
        }

        if (!title || !artist || !year || !album) {
            return { message: "Preencha todos os campos!" };
        }

        const newMusic = {
            id: UUID(),
            title: title,
            artist: artist,
            year: year,
            album: album
        };

        playlists[tagID].musics.push(newMusic);
        return { message: `${newMusic.title} foi salvo com sucesso!` };
    },
    //PUT Tag
    editTag: (tagParams, updateType) => {
        const existsTAG = playlists.findIndex(tagname => tagname.id === tagParams);
        if (existsTAG === -1) {
            return { message: "Tag não encontrada!" };
        }
        if (!updateType) {
            return { message: "Preencha todos os campus corretamente!" };
        }

        playlists[existsTAG].tag = updateType.toLowerCase();
        playlists[existsTAG].type = updateType;

        return { message: "Tag atualizada com sucesso!" };
    },
    //PUT Music
    editMusic: (musicParams, updateTitle, updateArtist, updateYear, updateAlbum) => {
        const existsMusic = playlists.musics.findIndex(music => music.id === musicParams);
        if (!existsMusic) {
            return { message: "Música não encontrada!" };
        }

        if (!updateTitle || !updateArtist || !updateYear || !updateAlbum) {
            return { message: "Preencha todos os campus corretamente!" };
        }

        playlists.musics[existsMusic].title = updateTitle;
        playlists.musics[existsMusic].artist = updateArtist;
        playlists.musics[existsMusic].year = updateYear;
        playlists.musics[existsMusic].album = updateAlbum;

        return { message: "Música atualizada com sucesso!" };
    },
    //DELETE Tag
    deleteTag: (tagParams) => {
        const existsTAG = playlists.findIndex(tagname => tagname.type === tagParams);
        if (existsTAG === -1) {
            return { message: "Tag não encontrada!" };
        }
        playlists.splice(existsTAG, 1);
        return { message: "Tag excluída com sucesso!" };
    },
    //DELETE Music
    deleteMusic: (musicParams) => {
        const existsMusic = playlists.musics.findIndex(music => music.id === musicParams);
        if (!existsMusic) {
            return { message: "Música não encontrada!" };
        }

        playlists.musics.splice(existsMusic, 1);
        return { message: "Música excluída com sucesso!" };
    }
};