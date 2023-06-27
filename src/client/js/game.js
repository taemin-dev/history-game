const gameScreen = document.getElementById("game-screen");
const wordDiv = document.getElementById("word");
const wordSpan = wordDiv.querySelector("span");
const scoreDiv = document.getElementById("score");
const scoreSpan = scoreDiv.querySelector("span");
const timeDiv = document.getElementById("time");
const timeProgress = timeDiv.querySelector("progress");
const bubbleDiv = document.getElementById("bubble");

const words = JSON.parse(gameScreen.dataset.words).words;

const popBubble = (bubble) => {
  bubble.style.animationPlayState = "paused";
  bubble.removeEventListener("click", handleBubbleClick);
  clearTimeout(bubble.id);

  const span = bubble.querySelector("span");
  span.innerText = "POP!";

  const img = bubble.querySelector("img");
  img.className = "hide";
}

const handleBubbleClick = (event) => {
  let bubble;
  if (event.target.className === "bubble") {
    bubble = event.target;
  } else {
    bubble = event.target.parentElement;
  }

  finishWord();

  const score = parseInt(scoreSpan.dataset.score);
  if (bubble.dataset.answer === "correct") {
    scoreSpan.innerText = `${score + 200}점`;
    scoreSpan.dataset.score = score + 200;
  } else {
    scoreSpan.innerText = `${score - 50}점`;
    scoreSpan.dataset.score = score - 50;
  }
};

const finishWord = () => {
  bubbleDiv.childNodes.forEach((bubble) => popBubble(bubble));
  setTimeout(() => {
    bubbleDiv.textContent = "";
    handleWord();
  }, 3 * 1000);
};

const createBubble = (word, answer) => {
  const duration = 10 + Math.floor(Math.random() * 6);
  const delay = Math.floor(Math.random() * 6);
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
  bubble.id = setTimeout(() => {
    bubble.remove();
    finishWord();
  }, (duration + delay) * 1000);
  bubble.dataset.answer = answer;

  const span = document.createElement("span");
  span.innerText = word;

  const img = document.createElement("img");
  img.src = "img/bubble.png";

  bubble.appendChild(span);
  bubble.appendChild(img);
  bubbleDiv.appendChild(bubble);
};

const handleTimeProgress = () => {
  if (timeProgress.value < 60) {
    timeProgress.value = timeProgress.value + 1;
  } else {
    const a = document.createElement("a");
    if (scoreSpan.dataset.score >= 1000) {
      a.href = `/game/credit?score=${scoreSpan.dataset.score}`;
    } else {
      a.href = `/game/over?score=${scoreSpan.dataset.score}`;
    }
    document.body.append(a);
    a.click();
  }
};

setInterval(handleTimeProgress, 1 * 1000);

const handleWord = () => {
  let index;
  let word;
  if (words.length !== 0) {
    index = Math.floor(Math.random() * words.length);
    word = words[index];
    words.splice(index, 1);

    wordSpan.innerText = `제시어 : ${word.word}`;
    createBubble(word.correct, "correct");
    word.fakes.forEach((fakeWord) => {
      createBubble(fakeWord, "wrong");
    });
  };
}

handleWord();