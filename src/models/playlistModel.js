import { v4 as UUID } from "uuid";

const playlists = [];

export default {
    //GET /
    allTags: () => {
        if (playlists.length === 0) {
            return { message: "Nenhuma tag encontrada." };
        }
        return playlists;
    },

    //POST /add_tag
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
    //POST /:idTAG/add_music
    addMusic: (idTAG, title, artist, year, album) => {

        const tagID = playlists.findIndex(music => music.type === idTAG);
        const verifyMusicID = playlists[tagID].musics.find(music => music.title === title);

        if (tagID === -1 ) {
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
    }
};