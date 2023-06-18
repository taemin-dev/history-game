import words from "../words.json";

export const game = (req, res) => {
  return res.render("game", { pageTitle: "게임", words });
};

export const gameover = (req, res) => {
  const score = req.query.score;
  return res.render("gameover", { pageTitle: "게임오버", score });
};

export const credit = (req, res) => {
  const score = req.query.score;
  return res.render("credit", { pageTitle: "엔딩 크레딧", score });
};