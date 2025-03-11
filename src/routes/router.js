import express from "express";
import playlistController from "../controllers/playlistController.js";
const route = express.Router();

//GET /
route.get("/", playlistController.index);

//POST /add_tag
route.post("/add_tag", playlistController.createTag);
//PUT /:idTag/update_tag
route.put("/:idTag/update_tag", playlistController.runUpdateTag);

//POST /add_music
route.post("/:idTAG/add_music", playlistController.createMusic);

export default route;