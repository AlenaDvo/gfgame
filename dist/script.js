let state = 334;
let scoreCat = 0;
let scoreMonkey = 0;

function delay5() {
  countdown.innerText = "5 s";

  setTimeout(() => {
    countdown.innerText = "4 s";
  }, 1000);

  setTimeout(() => {
    countdown.innerText = "3 s";
  }, 2000);

  setTimeout(() => {
    countdown.innerText = "2 s";
  }, 3000);

  setTimeout(() => {
    countdown.innerText = "1 s";
  }, 4000);
 
  setTimeout(() => {
    countdown.innerText = "Jedeme!";
  }, 5000);
};

delay5();

setTimeout(() => {
  onkeydown = (event) => {
    const pressedKey = event.key;

    if (pressedKey == "a") {
      state = state - 50;
    } else if (event.key == "l") {
      state = state + 50;
    };

    if (state <= -100) {
      alert("😺 vyhrála!");
      state = 334;
      scoreCat++;
      scoreCatText.innerText = "😺 " + scoreCat;
      delay5();
    } else if (state >= 750) {
      alert("🐵 vyhrál!");
      state = 334;
      scoreMonkey++;
      scoreMonkeyText.innerText = "🐵 " + scoreMonkey;
      delay5();
    };

    p1.style.top = state + "px";
    p2.style.bottom = state + "px";
  };
}, 5000);