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


// More Test Cases
const roverAbort2 = new MarsRover(2, 3, 'NORTH');
const commandsAbort2 = "RFFFFFRFF";
roverAbort2.executeCommands(commandsAbort2);
const abortedResult2 = roverAbort2.finalResult();
console.log(abortedResult2);


const roverAbort3 = new MarsRover(5, 5, 'SOUTH');
const commandsAbort3 = "LFFFLB";
roverAbort3.executeCommands(commandsAbort3);
const abortedResult3 = roverAbort3.finalResult();
console.log(abortedResult3);


const roverAbort4 = new MarsRover(7, 7, 'WEST');
const commandsAbort4 = "FBFRFL";
roverAbort4.executeCommands(commandsAbort4);
const abortedResult4 = roverAbort4.finalResult();
console.log(abortedResult4);