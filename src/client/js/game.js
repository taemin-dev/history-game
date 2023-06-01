const gameScreen = document.getElementById("game-screen");

const createBubble = (word) => {
  const duration = 10 + Math.floor(Math.random() * 6);
  const delay = Math.floor(Math.random() * 11);
  const direction = Math.floor(Math.random() * 2) ? 'left' : 'right';

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.position = "absolute";
  bubble.style.bottom = `${Math.random() * (window.screen.height * (4 / 5))}px`;
  if (direction === "left") {
    bubble.style.right = "-200px";
  } else {
    bubble.style.left = "-200px";
  }
  bubble.style.animation = `move-${direction} ${duration}s linear`;
  bubble.style.animationDelay = `${delay}s`;
  setTimeout(() => bubble.remove(), (duration + delay) * 1000);

  const wordName = document.createElement("span");
  wordName.innerText = word;

  const img = document.createElement("img");
  img.src = "img/bubble.png";

  bubble.appendChild(wordName);
  bubble.appendChild(img);
  gameScreen.appendChild(bubble);
};

createBubble("1");
createBubble("2");
createBubble("3");
createBubble("4");
createBubble("5");
