import express from "express";
import playlistController from "../controllers/playlistController.js";
const route = express.Router();

//GET /
route.get("/", playlistController.index);

//POST /add_tag
route.post("/add_tag", playlistController.createTag);
//PUT /:idTAG/update_tag
route.put("/:idTAG/update_tag", playlistController.runUpdateTag);

//POST /add_music
route.post("/:idTAG/add_music", playlistController.createMusic);

export default route;