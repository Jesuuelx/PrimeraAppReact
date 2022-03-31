import React, { useContext, useState } from "react";
import "../index.css";
import { UserContext } from "./UserContext";

export const ItemCount = ({ initialState = 0, precio, onAdd}) => {
  const [counter, setCounter] = useState(initialState);
  const [compra, setCompra] = useState("No hay Arts en el carrito");

  const handleSumar = () => {
    setCounter((c) => c + 1);
  };

  const handleRestar = () => {
    if (counter === 0) {
      return;
    }

    setCounter((c) => c - 1);
  };

  const handleFinal = ({ target }) => {
    if (counter === 0) {
      return;
    }

    onAdd(counter);

    setCompra(`Tienes ${counter} articulos en el carrito`);
    target.disabled = true;
  };

  const { user, setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser({
      name: "Jesuuelx",
      email: "jesusalejandrosalas@hotmail.com",
    });
  };

  return (
    <div>
      <pre>
        {" "}
        {counter} x {precio}
      </pre>
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
      <pre>{compra}</pre>
      <button className="btn btn-outline-info" onClick={handleLogin}>
        Login
      </button>
      <p>Usuario : {JSON.stringify(user)}</p>
    </div>
  );
};
