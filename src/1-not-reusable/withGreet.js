import React from "react";

export function withGreet(WrappedComponent) {
  class WithGreet extends React.Component {
    constructor(props) {
      super(props);
      this.state = { greet: "hello" };
      this.toggleGreet = this.toggleGreet.bind(this);
    }

    toggleGreet() {
      this.setState(state => {
        return { greet: state.greet === "hello" ? "goodbye" : "hello" };
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          greet={this.state.greet}
          toggleGreet={this.toggleGreet}
        />
      );
    }
  }

  WithGreet.displayName = "WithGreet";
  return WithGreet;
}
