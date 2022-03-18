import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos as itemList } from "../data-productos/data";
import { GridItem } from "./GridItem";

export const GridItemList = ({  }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const { id } = useParams();



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
