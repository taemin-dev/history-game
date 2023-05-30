import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import gameRouter from "./routers/gameRouter";

const app = express();

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use("/", rootRouter);
app.use("/game", gameRouter);
app.use("/img", express.static("img"))

export default app;
