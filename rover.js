// MarsRover: Is The Main Class That Contains All Functionalities
export default class MarsRover {
  
    /*
        x : Horizontal Position
        y: Vertical Position
        direction: Mars Direction (NORTH - SOUTH - EAST - WEST)
        aborted : Flag For Mark If Process Stopped
        abortedPositions: List Of Obstacles Position
    */
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
      
    // Part II
    this.aborted = false;
    this.abortedPositions = [[1, 4], [3, 5], [7, 4]]; 
  }
    
  // Function: For Change Direction Value
  changeDirection(direction) {
      this.direction = direction;
  }

  // Part II
  // Function: For Check And Compare Current x , y Against The Listed Obstacles Positions
  abort(x, y) {
    this.aborted = !!this.abortedPositions.find(pos => pos[0] === x && pos[1] === y);
  }
    
    // Function : For Produce The Final Result (Part I + Part II)
    finalResult() {
        return this.aborted ? `(${this.x}, ${this.y}) ${this.direction} STOPPED due to collision
        ` : `(${this.x}, ${this.y}) ${this.direction}`;
    }
  /*
    Function : For Process The Command String And Produce The Final Result
  */
    executeCommands(commandString) {

        const actions = {
            'NORTH': {
                'F': () => this.y++,
                'B': () => this.y--,
                'R': () => this.changeDirection('EAST'),
                'L': () => this.changeDirection('EAST'),
            },
            'SOUTH': {
                'F': () => this.y--,
                'B': () => this.y++,
                'R': () => this.changeDirection('WEST'),
                'L': () => this.changeDirection('EAST'),
            },
            'EAST': {
                'F': () => this.x++,
                'B': () => this.x--,
                'R': () => this.changeDirection('SOUTH'),
                'L': () => this.changeDirection('NORTH'),
            },
            'WEST': {
                'F': () => this.x--,
                'B': () => this.x++,
                'R': () => this.changeDirection('NORTH'),
                'L': () => this.changeDirection('SOUTH'), },
        };

        // Add Validation If User Enter Invalid Direction Throw Error
        // Else Execute The Command
        const validDirections = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
        if (!validDirections.includes(this.direction)) {
            console.error(`Please Enter Valid Direction ${validDirections.flat()}`)
            //throw new Error('Invalid direction specified!');
        } else {
            for (const command of commandString) {
                let action = actions[this.direction]?.[command];
                action?.();
                this.abort(this.x, this.y);
            }
        }
  }
}





