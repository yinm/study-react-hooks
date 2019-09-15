import React from "react";

export function withLog(WrappedComponent) {
  class WithLog extends React.Component {
    componentDidMount() {
      console.log("component mounted");
    }

    componentWillUnmount() {
      console.log("component unmounted");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLog.displayName = "WithLog";
  return WithLog;
}
