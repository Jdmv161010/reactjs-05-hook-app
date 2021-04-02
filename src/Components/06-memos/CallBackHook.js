import React, { useCallback, useEffect, useState } from "react";
import "../02-useEffect/useEffect.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
  //   const incrementar = () => {
  //     setCounter(counter + 1);
  //   };

  const incrementar = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {}, [incrementar]);

  return ( 
    <div>
      <h1>CallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementar} />
    </div>
  );
};
