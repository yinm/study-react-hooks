import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greet: "hello" };
    this.toggleGreet = this.toggleGreet.bind(this);
  }

  toggleGreet() {
    this.setState(state => ({
      greet: state.greet === "hello" ? "goodbye" : "hello"
    }));
  }

  render() {
    return <h1 onClick={this.toggleGreet}>{this.state.greet}</h1>;
  }
}

export default Sample;
