// Dependencies

// Imports React
import React from "react"
import ReactDOM from "react-dom"

// Imports our styling
import "./index.css"

// ! Jump to the end of the file

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),

      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    // This returns the function after a value has been set in the table
    // Otherwise You can repeatedly click part of the board and change its value
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
      squares: squares,

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
    // Here we call the function calculateWinner, pass in the array of squares to determine the winner
    const winner = calculateWinner(this.state.squares)
    let status

    // If the calculateWinnder has returned a value, we change the status to display the winnner
    if (winner) {
      status = "Winner: " + winner
    } else {
      // Continue the game
      status = "Next player: " + (this.state.xIsNext ? "X" : "O")
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
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

// This is how the winner is calculated

function calculateWinner(squares) {
  // Two Dimensional Array  of all the winning combinations
  // Each nested array represents a winning combo
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  // Looping through each winning combo
  console.log(squares)
  for (let i = 0; i < lines.length; i++) {
    // This assigns each column to a variable
    // A is assigned to 0, 3, 6, 0, 1, 2, 0, 2
    // B is assigned to 1, 4, 7, 3, 4, 5, 4, 4
    // C is assigned to 2, 5, 8, 6, 7, 8, 8, 6
    const [a, b, c] = lines[i]

    // Here, we check if the same value is in each row of the column
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // If so we return the value (either an X or an O)
      return squares[a]
    }
  }
  return null
}

ReactDOM.render(<Game />, document.getElementById("root"))
