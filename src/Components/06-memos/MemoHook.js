import React, { useState,useMemo } from "react";
import "../02-useEffect/useEffect.css";
import { procesoPesado } from "../helpers/procesoPesado";
import { useCounter } from "../hooks/useCounter";

export const MemoHook = () => {
  const { counter, incrementar } = useCounter(10);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={() => incrementar(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
