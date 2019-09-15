import { useState, useEffect } from "react";

export function useTimer(limit) {
  const [leftTime, setLeftTime] = useState(limit);

  useEffect(() => {
    const timerId = setInterval(() => {
      setLeftTime(leftTime => leftTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  });

  return leftTime;
}
