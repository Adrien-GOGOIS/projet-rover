//Mars Rover
const prompt = require("prompt");

prompt.start();

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

function displayGrid() {
  console.table(grid);
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
  displayGrid();
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
  displayGrid();
}

function moveForward(rover) {
  rover.travelLog.push({ x: rover.x, y: rover.y });

  if (
    (rover.x === 0 && rover.direction === "W") ||
    (rover.x === 9 && rover.direction === "E") ||
    (rover.y === 0 && rover.direction === "N") ||
    (rover.y === 9 && rover.direction === "S")
  ) {
    return console.log("ERREUR : Le rover est sorti de la grille !");
  } else {
    switch (rover.direction) {
      case "N":
        rover.y--;
        displayPosition();
        grid[rover.y + 1][rover.x] = " ";
        break;

      case "E":
        rover.x++;
        displayPosition();
        grid[rover.y][rover.x - 1] = " ";
        break;

      case "S":
        rover.y++;
        displayPosition();
        grid[rover.y - 1][rover.x] = " ";
        break;

      case "W":
        rover.x--;
        displayPosition();
        grid[rover.y][rover.x + 1] = " ";
        break;
    }
    displayGrid();
  }
}

function pilotRover() {
  prompt.get(
    { name: "letters", description: "Enter letters" },
    function (err, res) {
      let commands = Object.values(res);

      if (err) {
        console.log("ERREUR");
      }

      if (commands === undefined) {
        return console.log("Enter a valid command !");
      }

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

      pilotRover();
    }
  );
}

pilotRover();
