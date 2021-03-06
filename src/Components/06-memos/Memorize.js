import React, { useState } from "react";
import "../02-useEffect/useEffect.css";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, incrementar } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => incrementar(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={()=>setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
