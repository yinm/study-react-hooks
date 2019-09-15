import React from "react";
import { useLog, useTimer } from "../hooks/index";

const Sample = () => {
  useLog();
  const leftTime = useTimer(60);

  return <p>time: {leftTime}</p>;
};

export default Sample;
