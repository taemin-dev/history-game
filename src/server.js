import express from "express";
import rootRouter from "./routers/rootRouters";

const app = express();

app.use("/", rootRouter);

export default app;