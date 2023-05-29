export const game = (req, res) => {
  return res.render("game", { pageTitle: "게임" });
};

export const gameover = (req, res) => {
  return res.render("gameover", { pageTitle: "게임오버" });
};