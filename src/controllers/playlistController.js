import playlistModel from "../models/playlistModel.js";

export default {
    //GET /
    index: (req, res) => {
        res.status(200).json(playlistModel.allTags());
    },
    //POST /add_tag
    createTag: (req, res) => {
        try {
            const { type } = req.body;
            const newTag = playlistModel.addTag(type);
            res.status(201).json(newTag);
        } catch (error) {
            return res.json({ message: error });
        };
    },
    //POST /:idTAG/add_music
    createMusic: (req, res) => {
        try {
            const { idTAG } = req.params;
            const { title, artist, year, album } = req.body;
            const newMusic = playlistModel.addMusic(idTAG, title, artist, year, album);
            res.status(201).json(newMusic);
        } catch (error) {
            return res.json({ message: error });
        };
    },
    //PUT /:idTAG/update_tag
    runUpdateTag: (req, res) => {
        try {
            const { idTAG } = req.params;
            const { updateType } = req.body;
            if (!idTAG) {
                return res.status(404).json({ message: "Tag not found!" });
            }
            const editTag = playlistModel.editTag(idTAG, updateType)
            res.status(200).json(editTag);
        } catch (error) {
            return res.json({ message: error });
        }
    }
};