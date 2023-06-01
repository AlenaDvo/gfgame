let state = 50;

onkeydown = (event) => {
  const pressedKey = event.key;
  
  if (pressedKey == "a") {
    state = state - 10;
  } else if (event.key == "l") {
    state = state + 10;
  };

  if (state <= 0) {
    alert("🔥 won!");
    state = 50;
  } else if (state >= 100) {
    alert("🍄 won!");
    state = 50;
  };
  
  p1.style.top = state + "%";
  p2.style.top = (100 - state) + "%";
};

