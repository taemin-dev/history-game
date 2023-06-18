import express from "express";
import { credit, game, gameover } from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/", game);
gameRouter.get("/over", gameover);
gameRouter.get("/credit", credit);
export default gameRouter;