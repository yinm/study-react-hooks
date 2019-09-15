import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { leftTime: 60 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    console.log("component mounted"); // ログに関する処理
    this.timerId = setInterval(this.tick, 1000); // タイマーに関する処理
  }

  componentWillUnmount() {
    console.log("component unmounted"); // ログに関する処理
    clearInterval(this.timerId); // タイマーに関する処理
  }

  tick() {
    this.setState(state => ({ leftTime: state.leftTime - 1 }));
  }

  render() {
    return <p>time: {this.state.leftTime}</p>;
  }
}

export default Sample;
