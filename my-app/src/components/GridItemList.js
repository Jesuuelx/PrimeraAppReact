import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridItem } from "./GridItem";
import { getDocs, collection , query , where } from "firebase/firestore"
import { db } from "./firebase"

export const GridItemList = ({}) => {
  const [state, setState] = useState({
    data: [],
    loading:true,
  });

  const { id } = useParams();

  const { data, loading } = state;

  

  useEffect(() => {
    if(!id){

      const productosCollection = collection(db, "productos")
      const documentos = getDocs(productosCollection)

      documentos
      .then(resp => setState({
        data:(resp.docs.map(doc=>doc.data())),
        loading:false,
      }))
      .catch(console.warn);

  } else {

      const productosCollection = collection(db, "productos")
      const miFiltro = query(productosCollection,where("tipo","==",id))
      const documentos = getDocs(miFiltro)

      documentos
      .then(respuesta => setState({
        data:(respuesta.docs.map(doc=>doc.data())),
        loading:false,
      }))
      .catch(console.warn);
      
  }





  });

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
