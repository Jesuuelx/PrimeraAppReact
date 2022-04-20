import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "./hooks/useForm";
import { UserContext } from "./UserContext";

export const CarShop = () => {
  const { carshop, total, user, setUser, deleteAll, deleteElement } =
    useContext(UserContext);
  
    const [ formValues, handleInputChange, reset ] = useForm({
      name: '',
      email: '',
      password: ''
  });

  const [estado, setEstado] = useState(false);

  const handleSubmit =  (e) => {
    e.preventDefault();

    setEstado(!estado)

  }


  const navigate = useNavigate();
  const { name, email, password } = formValues;

  const handleFinnish = () => {

    setTimeout(() => {
      navigate('/')
    }, 3000);


  }


  return (
    <div>
      <ul>
        {carshop.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt={data.nombre} width={150} height={150} />
            <h4> {data.nombre} </h4>
            <h4>
              Precio Unitario {data.price} $ x {data.cantidad}
            </h4>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                deleteElement(data.id, data.price, data.cantidad);
              }}
            >
              Borrar
            </button>
          </div>
        ))}
        <div>
          {" "}
          <h3>Total: {total}</h3>{" "}
        </div>
      </ul>
      <button className="btn btn-outline-danger" onClick={deleteAll}>
        {" "}
        Vaciar Carrito{" "}
      </button>
      <button className="btn btn-outline-primary">
        <Link to="/"> Seguir Comprando </Link>{" "}
      </button>
      <button
        onClick={() => {
          setUser({
            user: "Jesuuelx",
            email: "jesusaleandrosalas@hotmail.com",
          });
        }}
        className="btn btn-outline-success"
      >
        Login
      </button>
      <button className="btn btn-outline-info">{JSON.stringify(user)}</button>

      
      
      {

        ( carshop.length > 0 ) && (
      
      <form onSubmit={handleSubmit}>
        <hr />

        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            required
            onChange={handleInputChange}
            
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={email}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*****"
            value={password}
            required
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary"
        onClick={handleFinnish}>
          TERMINAR COMPRA
        </button>

{
  ( estado && <p> <h2> <b>  COMPRA COMPLETADA .... </b></h2> TE LLEVAREMOS A LA PAGINA PRINCIPAL</p>)
}


      </form>)

}
    </div>
  );
};
