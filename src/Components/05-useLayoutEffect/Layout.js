import React, { useState, useRef, useLayoutEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import "./Layout.css";

export const Layout = () => {
  const { counter, incrementar } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>
      <pre>
          {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={() => incrementar(1)}>
        Siguiente quote
      </button>
    </div>
  );
};
