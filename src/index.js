// Dependencies

// Imports React
import React from "react"
import ReactDOM from "react-dom"

// Imports our styling
import "./index.css"


// Remember "smart components"? "Smart components" are React components with state. But this Square component has none...
// So now it's a "dumb component". Yes actually. 
// "Dumb components" can be written more simply without needing to extend a class.
// Writing it this way requires you to pass in props as a parameter in the function
// Note: You no longer need to reference "this" when referring to props.

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = "X"
    this.setState({ squares: squares })
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
