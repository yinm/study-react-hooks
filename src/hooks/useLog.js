import { useEffect } from "react";

export function useLog() {
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);
}
