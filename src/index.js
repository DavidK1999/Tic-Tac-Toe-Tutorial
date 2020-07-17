// Dependencies

// Imports React
import React from "react"
import ReactDOM from "react-dom"

// Imports our styling
import "./index.css"

// React class Components are a bit overkill for when you're only rendering markup
// That's why class Components are also known as "smart components" as they contain state
// "state" lets components remember things, and keep track of data [1].

class Square extends React.Component {
  // JavaScript classes use a "constructor" to define information within the class
  // ! DON"T GET CAUGHT UP WITH THIS BIT: The "super" is required because our Square class is a subclass of React component.
  // What's important is that we can define our state within the constructor.
  // Inside of our state, we have created a 'value' property that is set to null by default.
  // We will modify the Square component to be able to modify this state in just a bit.
  constructor(props) {
    super(props)
    // Note: State is an object, you can define key value pairs to model data
    this.state = {
      value: null,
    }
  }
  render() {
    // If you've ever played around with vanilla javascript or jQuery, you probably have used event handlers (onClick, onKeyDown, etc.)
    // React also has eventHandlers that can be used to trigger events.
    // In this example, we're using the onClick method to change the state of value from null to "X"

    // Note: the () => is a callback.
    // This prevents the event from firing instantly WITHOUT user input.
    // The callback waits for the event to occur (the click) before running the code after it (setting state)
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {/* Notice anything different?*/}
        {/*  "this.state.value" used to be "this.props.value" */}
        {/* This has been changed so that the content inside the button can now be dynamic instead of inherited */}
        {/* Run npm start and click on the buttons, see what happens. */}
        {/* Notice how the components update the content seamlessly */}
        {this.state.value}
      </button>
    )
  }
}

// ! PAUSE. With whatever browser you're using, go to the extensions store and get the "React Developer Tools" extension.
// Then go to inspect element and cick on "Components"
// You should see a list of all your components. Click on one of them and look at the information on the right hand side.

// NOTHING NEW BELOW IN THIS COMMIT

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
