import React, { useEffect, useState } from "react";
import { GridItem } from "./GridItem";
import { ItemDetail } from "./ItemDetail";

export const GridItemList = ({ itemList }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const [show, setShow] = useState(false);

  const { data, loading } = state;

  const getData = () => {
    return new Promise((resolve, reject) => {
      if (itemList.length > 1) {
        setTimeout(() => {
          resolve(itemList);
        }, 3000);
      } else {
        reject("Acceso denegado");
      }
    });
  };

  useEffect(() => {
    getData()
      .then((resp) => {
        setState({
          data: resp,
          loading: false,
        });
      })
      .catch(console.error);
  });

  return (
    <>
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <ul className="card-grid">
        {data.map((item) => (
          <GridItem {...item} key={item.id} />
        ))}
      </ul>
      <hr />
          <ul className="card-grid">
          {   data.map(item => (
      show && <ItemDetail itemList={ itemList } {...item} key={item.id}   />
      ))}
      </ul>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        
        Mostrar Detalle/No mostrar
      </button>
    </>
  );
};
