import React from "react";
import { useGreet } from "../hooks/index";

const Sample = () => {
  const [greet, toggleGreet] = useGreet();

  return <h1 onClick={toggleGreet}>{greet}</h1>;
};

export default Sample;
