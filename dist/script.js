let state = 300;

onkeydown = (event) => {
  const pressedKey = event.key;

  if (pressedKey == "a") {
    state = state - 50;
  } else if (event.key == "l") {
    state = state + 50;
  };

  if (state <= -50) {
    alert("😺 won!");
    state = 300;
  } else if (state >= 750) {
    alert("🐻 won!");
    state = 300;
  };

  p1.style.top = state + "px";
  p2.style.bottom = state + "px";

  console.log(p1.style.top);
  console.log(p2.style.bottom);
};