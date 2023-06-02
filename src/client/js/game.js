const gameScreen = document.getElementById("game-screen");

const handleBubbleClick = (event) => {
  const bubble = event.target.parentElement;
  bubble.style.animationPlayState = "paused";
  removeEventListener("click", handleBubbleClick);
  clearTimeout(bubble.id);

  const span = bubble.querySelector("span");
  span.innerText = "POP!";

  const img = bubble.querySelector("img");
  img.className = "hide";
}

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
  bubble.addEventListener("click", handleBubbleClick);
  bubble.id = setTimeout(() => bubble.remove(), (duration + delay) * 1000);

  const span = document.createElement("span");
  span.innerText = word;

  const img = document.createElement("img");
  img.src = "img/bubble.png";

  bubble.appendChild(span);
  bubble.appendChild(img);
  gameScreen.appendChild(bubble);
};

createBubble("1");
createBubble("2");
createBubble("3");
createBubble("4");
createBubble("5");
