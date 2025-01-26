import React, { Component } from "react";
import "./../styles/App.css"; // Add this file to style the ball and the button

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false, // State to determine whether the ball should be rendered
      ballPosition: 0, // The ball's current left position
    };

    // Bind method for keydown event
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // Add event listener for keydown events
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove event listener to avoid memory leaks
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  buttonClickHandler() {
    // Set the ball to be visible when start button is clicked
    this.setState({ showBall: true });
  }

  handleKeyDown(event) {
    // Check if the right arrow key was pressed
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      // Move the ball 5px to the right by updating the left position
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  }

  renderBallOrButton() {
    if (this.state.showBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
