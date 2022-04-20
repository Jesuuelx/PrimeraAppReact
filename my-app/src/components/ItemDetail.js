import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from "./firebase"
import { ItemCount } from './ItemCount';
import { Loading } from './Loading';
import { UserContext } from './UserContext';
import { getDoc , collection , doc , where , query , getDocs } from "firebase/firestore"

export const ItemDetail = ({ }) => {

  const [cargando, setCargando] = useState({
    loading:true,
    data:[],
  })

  const { loading, data } = cargando;

  const { addProductToCar } = useContext(UserContext);

const { id } = useParams()

const [seleccionar, setSeccionar] = useState(false)

const onAdd = ( seleccionado ) => {
    if ( seleccionado != undefined) {
        setSeccionar( seleccionado );


    }


}



useEffect(() => {


  const productosCollection = collection(db, "productos")
  console.log(productosCollection)
  
  //const documento = getDoc(doc(pokemonCollection, id))
  //document.then(respuesta => setItem(respuesta.data()))
  const miFiltro = query(productosCollection,where("id","==",parseInt(id)))
  const documentos = getDocs(miFiltro)

  documentos
  .then(resp => {
    console.log(resp.docs.map(doc=>doc.data()))
   setCargando({
    
    loading:false,
    data:resp.docs.map(doc=>doc.data())[0],

  })})
  .catch(console.warn)





}, [id])

 const handleAdd = () => {
 if ( !seleccionar ){
   return
 }
 
 
  console.log(data)
  addProductToCar(data, seleccionar);
  console.log('click')
}
   
 
  return (
    <>
    
{loading ? ( <p className="animate__animated animate__flash"> <Loading /> </p> )  : (

<div className="card animate__animated animate__fadeIn">
            <img src={ data.img } alt={ data.nombre } width={400} height={250} />
            <h4> { data.nombre } </h4>
            <p>{ data.description }</p>
            <h4>Precio Unitario { data.price } $</h4>
            <ItemCount precio={data.price} onAdd={onAdd}  />
         { seleccionar  &&  <button className='btn btn-outline-success'>  <Link onClick={handleAdd} to='/CarShop'> Ir al Carrito  </Link> </button>   }
        </div> )


  }
  <button className='btn btn-outline-primary' onClick={handleAdd}>  <Link to='/'>  Seguir Comprando </Link></button>
  </>
  )
}
