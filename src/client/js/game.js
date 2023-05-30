const gameScreen = document.getElementById("game-screen");

const createBubble = (word) => {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  const wordName = document.createElement("span");
  wordName.innerText = word;
  const img = document.createElement("img");
  img.src = "img/bubble.png";
  bubble.appendChild(wordName);
  bubble.appendChild(img);
  gameScreen.appendChild(bubble);
  return;
};

setInterval(() => createBubble("test"), 3000);