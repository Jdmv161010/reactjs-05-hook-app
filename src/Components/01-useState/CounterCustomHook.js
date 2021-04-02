import React from "react";
import { useCounter } from "../hooks/useCounter";

import "./CounterApp.css";

export const CounterCustomHook = () => {
  const { state, incrementar, reset, decrementar } = useCounter(100);
  return (
    <>
      <h1>Counter with custom Hook: {state}</h1>
      <hr />
      <button onClick={() => incrementar(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrementar(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
