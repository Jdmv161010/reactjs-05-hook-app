import { useState } from "react";

export const useCounter = (initState = 10) => {
  const [counter, setCounter] = useState(initState);

  const incrementar = (factor = 1) => setCounter(counter + factor);
  const reset = () => setCounter(initState);
  const decrementar = (factor = 1) => setCounter(counter - factor);

  return {
    counter,
    incrementar,
    reset,
    decrementar,
  };
};
