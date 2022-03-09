import React, { useState } from "react";
import "../index.css";

export const ItemCount = ({setCompra, initialState, stock }) => {
  const [counter, setCounter] = useState(initialState);
  
  

  const handleSumar = () => {
    if (counter === 10) {
      return;
    }

    setCounter((c) => c + 1);
    stock = stock - 1;
  };

  const handleRestar = () => {
    if (counter === 0) {
      return;
    }

    setCounter((c) => c - 1);
    stock = stock + 1;
  };

  const handleFinal = () => {
    if (counter === 0) {
      return;
    }
    setCompra(`Tienes ${counter} articulos en el carrito`);
  };

  return (
    <div className="card-grid">
      <div className="card">
        <img src="/imgs/iphone13.png" alt="iphone13" width={200} height={200} />
        <pre> {counter} </pre>
        <button onClick={handleSumar} className="btn btn-primary btn-block">
          Sumar
        </button>
        <button onClick={handleRestar} className="btn btn-danger btn-block">
          Restar
        </button>
        <button
          onClick={handleFinal}
          className="btn btn-outline-primary btn-block"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};
