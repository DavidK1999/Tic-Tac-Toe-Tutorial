// Dependencies

// Imports React
import React from "react"
import ReactDOM from "react-dom"

// Imports our styling
import "./index.css"

// Jump to [1] (Board Component)

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

// [1] 
// In order to get the game of tic tac toe rolling, we need to be able to mark Os on the board. Right now we can only mark Xs

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      // We can set a boolean to indicate that "X" is the first move.
      // This is the default value until it is changed later.
      xIsNext: true,
      // Jump to [2] (inside the handleClick method)
    }
  }

  handleClick(i) {
      const squares = this.state.squares.slice()
      // [2]
    // Down below we are using the ternary operator (quick way to write a conditional statement)
    // The "this.state.isNext" is the condition to be evaluated. To the right of the "?" is what occurs if the condition is true and to the right of the  ":" is what occurs if the condition is false.
    // If this.state.isNext is true, we place an "X" in the square, otherwise we place an "O"
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
        squares: squares,
        // Now we have another thing to change inside of our Boards state.
        // We need to replace the array with an updated copy of the array as before, but also we need to change the value of "xIsNext"
        // The "!" is called a "bang" and it makes the value of whatever it is appended to opposite
        // For example: !false is the same as true
                        // !true is the same as false.
        // We are changing the value of "xIsNext" to be the opposite of what is was after a square has been clicked.
        // run npm start and click on the board. See what happens.
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = "Next player: X"

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById("root"))
