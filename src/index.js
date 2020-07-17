// Dependencies

// Imports React
import React from "react"
import ReactDOM from "react-dom"

// Imports our styling
import "./index.css"

// This is a React Class Component.
// Components take in parameters which in React are referred to as as 'props' or 'properties [1]'
// React Class Components also have the render method.
// The Render method is simply a description of what to render to the virtual DOM
// Behind the scenes, the render method is converting the "XML like" tags into an object that describes that will be rendered to the dom.
// The "XML Like" tags are called "JSX" and make it easier and more intuitive for developers to represent these objects.

class Square extends React.Component {
  render() {
    //[1]
    // The '{this.props.value}' is where the Square component is taking in information that it can use to display information within itself.
    // Props are always inherited from a parent component.
    // To better understand this, take a look at the Board Component [2].
    return <button className="square">{this.props.value}</button>
  }
}

// Since Class Components are JavaScript classes, they can also have methods (functions).
// Class Component Methods come before the render method and the return statement

class Board extends React.Component {
  renderSquare(i) {
    // [2] In this method, we are instantiating or "rendering" the Square Class Component.
    // Classes are kind of like factories. They produce something.
    // For example. the Square component is like a factory that produces buttons with the class name of square and optional extra information (via props).

    // We can create as many Squares as we want by simply calling the Component as seen below <ComponentName propName={propValue} />
    // It's customary to use self closing tag with a space before the "/>" to indicate that you're dealing with a React Component that takes in props

    // Note: Here we are passing in the 'i' parameter from the renderSquare method into the Square Class Component.
    return <Square value={i} />
  }

  render() {
    // Note: You can define variables in the render method.
    // These variables can be pulled within the return statement
    const status = "Next player: X"

    return (
      // Note: JSX tags cannot be adjacent to eachother.
      // You can only have one root element that has nested content.
      // In this example we wrap each of the nested divs within ONE outer div.
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {/* Note: When dealing with JSX comments have to be wrapped inside of curly braces */}
          {/* Methods can be called from inside the return statement */}
          {/* Here, we are calling the render square method, passing in a numerical value for each one */}
          {/* This is creating the board, and assigning each square a value */}
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

// Run npm start in your terminal to see the board
// It's not pretty, but we'll get to that.
// I encourage you to change the arguments in the renderSquare method and play around with the components themselves
// This stage of the code will be saved in a commit so you can always revert to it.

// This is our "root component"
// Basically, this component contains all of our smaller components.
// This componnet is then rendered to the page
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
