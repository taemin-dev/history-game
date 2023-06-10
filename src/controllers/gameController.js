import words from "../words.json";

export const game = (req, res) => {
  return res.render("game", { pageTitle: "게임", words });
};

export const gameover = (req, res) => {
  return res.render("gameover", { pageTitle: "게임오버" });
};