import React from "react";
import { withGreet } from "./withGreet";
import { withLog } from "./withLog";
import { withTimer } from "./withTimer";

const Sample = ({ greet, toggleGreet, leftTime }) => (
  <div>
    <h1 onClick={toggleGreet}>{greet}</h1>
    <p>time: {leftTime}</p>
  </div>
);

export default withGreet(withLog(withTimer(Sample, 60)));
