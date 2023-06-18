const scoreDiv = document.getElementById("score");
const score = scoreDiv.dataset.score;

const moveToGameover = () => {
  const a = document.createElement("a");
  a.href = `/game/over?score=${score}`;
  a.click();
};

setTimeout(moveToGameover, 5 * 1000);