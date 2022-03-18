import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data-productos/data";
import { GridItem } from "./GridItem";

export const GridItemList = ({}) => {
  const [state, setState] = useState({
    data: [],
    loading:true,
  });

  const { id } = useParams();

  const { data, loading } = state;

  if (typeof id !== "undefined") {
  }

  const getData = () => {
    return new Promise((resolve, reject) => {
      if (typeof id !== "undefined") {
        let itemList = productos.filter(item => item.tipo == id);
        setTimeout(() => {
          resolve(itemList);
        }, 3000);
      } else if (typeof id === "undefined") {
        setTimeout(() => {
          resolve(productos);
        }, 3000);
      } else {
        reject("Acceso negado");
      }
    });
  };

  useEffect(() => {
    setState({
      data: [],
      loading:true,
    });

    getData()
      .then((resp) => {
        setState({
          data: resp,
          loading: false,
        });
      })
      .catch(console.error);
  }, [id]);

  return (
    <>
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <ul className="card-grid">
        {data.map((item) => (
          <GridItem {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
