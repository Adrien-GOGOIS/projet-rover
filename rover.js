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

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

function displayPosition() {
  grid[rover.y][rover.x] = rover.direction;
}

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      displayPosition();
      break;

    case "W":
      rover.direction = "S";
      displayPosition();
      break;

    case "S":
      rover.direction = "E";
      displayPosition();
      break;

    case "E":
      rover.direction = "N";
      displayPosition();
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      displayPosition();
      break;

    case "E":
      rover.direction = "S";
      displayPosition();
      break;

    case "S":
      rover.direction = "W";
      displayPosition();
      break;

    case "W":
      rover.direction = "N";
      displayPosition();
      break;
  }
}

function moveForward(rover) {
  rover.travelLog.push({ x: rover.x, y: rover.y });

  switch (rover.direction) {
    case "N":
      rover.y++;
      displayPosition();
      grid[rover.y - 1][rover.x] = " ";
      break;

    case "E":
      rover.x++;
      displayPosition();
      grid[rover.y][rover.x - 1] = " ";
      break;

    case "S":
      rover.y--;
      displayPosition();
      grid[rover.y + 1][rover.x] = " ";
      break;

    case "W":
      rover.x--;
      displayPosition();
      grid[rover.y][rover.x + 1] = " ";
      break;
  }
}

function pilotRover(commands) {
  if (commands === undefined) {
    return console.log("Enter a valid command !");
  } else {
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];

      if (command === "l") {
        turnLeft(rover);
      } else if (command === "r") {
        turnRight(rover);
      } else if (command === "f") {
        moveForward(rover);
      }
    }
  }
}

pilotRover("rff");

console.table(grid);

console.log(rover.travelLog);
