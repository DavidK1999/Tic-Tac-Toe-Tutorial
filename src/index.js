// Dependencies

// Imports React
import React from "react"
import ReactDOM from "react-dom"

// Imports our styling
import "./index.css"

// Ok, now it's time to create the game!
// This commit will cover an important concept known as "lifting state"

// Currently, our Square component keeps track of it's own state.
// While we could pass the information up from each square into the board, this approach is generally not recommended.
// There is an easier way to do this.
// React is really good at flowing data (from parent to child), but it's much more difficult to lift that data (from child to parent)
// Jump to [1] (Board Component)

//[3]
// Now we're back at the square component.
// We're going to make some changes here in response to changes made in the board component

class Square extends React.Component {
  // We no longer need the constructor since the Square Component is no longer keeping track of it's own state.

  render() {
    return (
      // This can get confusing but here we add an event listener "onClick" that will run a function called "onClick" that was passed down via props
      // Remember we created a prop named onClick in the board component and stored inside of it a function
      // It is now abstracted away into this.props.onClick() where this.props.onClick() is the value of the function passed in from the board component.
      // run npm start (if you haven't already) and click on each of the squares, see what happens
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
      
      // Note: now that the square's values are determined by the Board the Square component is now referred to as a "controlled component"

    )
  }
}

// [1]
// We are going to start with the Board first this time
// Just like we added state to the Square component, we can add state to the Board component.
// The benefit of this is that we instantiate squares inside of the board which means we can share state between the board and any squares inside of it.
// All we have to do is pass down the board state into each square via props!
class Board extends React.Component {
  // Brining in our constructor to incorporate state
  constructor(props) {
    super(props)
    this.state = {
      // Setting a property "squares" to an array with 9 "null" values inside of it -> [null, null, null, null, null, null, null, null, null]
      squares: Array(9).fill(null),
    }
  }

  // [2]
  // Ok! Here in our handleClick method we are doing a few important things...
  // First, we are creating a copy of our squares array in our Board component's state. (Achieved through the slice method)
  // Next, we are modifying the value of one of the squares in the array using the "i" parameter which refers to an index of the array.
  // Finally, we are modifying the state of the board component by setting the squares array (in the constructor) to the modified squares array (the copy inside the handleClick function)

  // Note: Creating a copy of the array is preferrable to changing the array contents. Here are a few reasons why...
    // 1. Version history: Creating a copy of data lets you return to a different snapshot of an applications history and reuse it.
    // 2. Detecting changes: If objects are mutated it's hard to see if it has changed. creating a copy lets you compare that copy to the original source to quickly calculate changes.
    // 3. less rerenders: By knowing what has changed React can re render more efficiently. This saves performance.



  // Jump back to the renderSquare method 

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = "X"
    this.setState({ squares: squares })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        // You can also pass functions down as props!
        // Here we are passing a function "this.handleClick" and passing it the parameter "i".
        // Let's take a look at the handleClick method! Jump to [2] (handleClick)
        // note: The prop name is onClick, same as the event handler onClick. It's common to see this
        // Jump to [2] (Square Component)
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
