import { useState } from "react";

export function useGreet() {
  const [greet, setGreet] = useState("hello");

  const toggleGreet = () =>
    setGreet(greet => (greet === "hello" ? "goodbye" : "hello"));

  return [greet, toggleGreet];
}
