//Mars Rover
const grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

const rover = {
  direction: "N",
};

function turnLeft() {
  switch (rover.direction) {
    case "N":
      return rover.direction === "W";
      break;

    case "W":
      return rover.direction === "S";
      break;

    case "S":
      return rover.direction === "E";
      break;

    case "E":
      return rover.direction === "N";
      break;
  }
}

turnLeft();

console.log(rover);
