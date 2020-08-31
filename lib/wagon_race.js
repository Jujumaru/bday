const moveForward = (player) => {
  const wagon = document.querySelector(`#player${player}-race .active`);
  if (wagon.nextElementSibling) {
    wagon.nextElementSibling.classList.add('active');
    wagon.classList.remove('active');
  } else {
    alert(`Congratulations ! The chick Invasion can begin...`);
    alert(' <3 Happy Birthday Poule Magistrale <3');
  }
};

const moveWagons = (event) => {
  if (event.key === " ") {
    moveForward(1);
  } else if (event.key === "p") {
    moveForward(2);
  }
};

window.setInterval(function() {
moveForward(2);
}, 1000);

document.addEventListener("keyup", moveWagons);
