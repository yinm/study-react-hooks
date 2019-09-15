import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const container = document.getElementById("root");

ReactDOM.render(<App />, container);

const unmount = document.getElementById("unmount");
unmount.addEventListener("click", () => {
  ReactDOM.unmountComponentAtNode(container);
});
