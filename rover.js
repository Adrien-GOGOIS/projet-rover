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
};

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "W":
      rover.direction = "S";
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "S":
      rover.direction = "E";
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "E":
      rover.direction = "N";
      grid[rover.x][rover.y] = rover.direction;
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "E":
      rover.direction = "S";
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "S":
      rover.direction = "W";
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "W":
      rover.direction = "N";
      grid[rover.x][rover.y] = rover.direction;
      break;
  }
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.y++;
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "E":
      rover.x++;
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "S":
      rover.y--;
      grid[rover.x][rover.y] = rover.direction;
      break;

    case "W":
      rover.x--;
      grid[rover.x][rover.y] = rover.direction;
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

turnRight(rover);
moveForward(rover);

console.table(grid);
