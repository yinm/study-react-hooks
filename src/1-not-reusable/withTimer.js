import React from "react";

export function withTimer(WrappedComponent, limit) {
  class WithTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { leftTime: limit };
      this.tick = this.tick.bind(this);
    }

    componentDidMount() {
      this.timerId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }

    tick() {
      this.setState(state => ({ leftTime: state.leftTime - 1 }));
    }

    render() {
      return (
        <WrappedComponent {...this.props} leftTime={this.state.leftTime} />
      );
    }
  }

  WithTimer.displayName = "WithTimer";
  return WithTimer;
}
