import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";

const app = express();

const logger = morgan("dev");

app.use(logger);
app.use("/", rootRouter);

export default app;
