import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setcoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        Coordenadas: X: {x} , Y: {y}
      </p>
    </div>
  );
};
