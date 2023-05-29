export const home = (req, res) => {
  return res.render("home");
};

export const tutorial = (req, res) => {
  return res.render("tutorial", { pageTitle: "튜토리얼" });
};