import express from "express";
import { game, gameover } from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/", game);
gameRouter.get("/over", gameover);

export default gameRouter;