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

console.table(grid);

let rover = {
  direction: "N",
  x: 0,
  y: 0,
};

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.y++;
      break;

    case "E":
      rover.x++;
      break;

    case "S":
      rover.y--;
      break;

    case "W":
      rover.x--;
      break;
  }
}
