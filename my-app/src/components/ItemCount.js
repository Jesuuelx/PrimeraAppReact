import React, { useState } from "react";
import "../index.css";

export const ItemCount = ({ initialState = 0, precio, onAdd }) => {
  const [counter, setCounter] = useState(initialState);
  const [compra,  setCompra] = useState('No hay Arts en el carrito')
  

  const handleSumar = () => {
    
    setCounter((c) => c + 1);
    
  };

  const handleRestar = () => {
    if ( counter === 0 ){
      return
    }
    
    setCounter((c) => c - 1);
    };

  const handleFinal = () => {
    if ( counter === 0 ){
      return
    }

    onAdd(counter)
    
    setCompra(`Tienes ${counter} articulos en el carrito`);
  };

  return (
      <div>
        <pre> {counter} x { precio } $ </pre>
        <button onClick={handleSumar} className="btn btn-success btn-block">
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
        <pre>{ compra }</pre>
      </div>
  );
};
