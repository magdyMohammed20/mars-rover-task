import MarsRover  from './rover.js'

//////////////////// Part I Testing ///////////////////////////// 
// Create Instance From MarsRover Class And Pass x , y And Direction
const rover = new MarsRover(4, 2, 'EAST');

// The Command String To Execute
const commands = "FLFFFRFLB"; 

// Calling The executeCommands and pass the commands To Process It
rover.executeCommands(commands);

// Generate The Final Result Directions
const result = rover.finalResult();
console.log(result);


//////////////////// Part II Testing ///////////////////////////// 
// Create Instance From MarsRover Class And Pass x , y And Direction 
const roverAbort = new MarsRover(0, 0, 'EAST');

// The Command String To Execute
const commandsAbort = "FFFFFFFLFFFF";

// Calling The executeCommands and pass the commands To Process It
roverAbort.executeCommands(commandsAbort);

// Generate The Final Result Directions
const abortedResult = roverAbort.finalResult();
console.log(abortedResult);

