import React from "react";
import { useGreet, useLog, useTimer } from "../hooks/index";

const Sample = () => {
  const [greet, toggleGreet] = useGreet();
  useLog();
  const leftTime = useTimer(60);

  return (
    <div>
      <h1 onClick={toggleGreet}>{greet}</h1>
      <p>time: {leftTime}</p>
    </div>
  );
};

export default Sample;
