import express from "express";
import { home, tutorial } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/tutorial", tutorial);

export default rootRouter;