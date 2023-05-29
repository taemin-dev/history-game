import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  return res.send("it works :)");
});

export default rootRouter;