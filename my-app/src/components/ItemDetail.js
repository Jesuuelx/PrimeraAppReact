import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { productos } from '../data-productos/data';
import { ItemCount } from './ItemCount';
import { Loading } from './Loading';

export const ItemDetail = ({ }) => {

  const [cargando, setCargando] = useState({
    loading:true,
    data:[],
  })

  const { loading, data } = cargando;

const { id } = useParams()

const [seleccionar, setSeccionar] = useState(false)

const onAdd = ( seleccionado ) => {
    if ( seleccionado != undefined) {
        setSeccionar( seleccionado );


    }


}
  
 
const  getItem = () => {

  return new Promise ((resolve, reject ) => {
      if( productos[id] ){
        setTimeout(() => {
          resolve(productos[id])
        }, 3000);
      }else
      reject('Acceso Negado')
  })

}

useEffect(() => {
  getItem().then( resp => {
    setCargando({
      loading:false,
      data:resp

    })
  }).catch(console.error)

}, [id])

 
 
  return (
    <>
    
{loading ? ( <p className="animate__animated animate__flash"> <Loading /> </p> )  : (

<div className="card animate__animated animate__fadeIn">
            <img src={ data.img } alt={ data.nombre } width={400} height={250} />
            <h4> { data.nombre } </h4>
            <p>{ data.description }</p>
            <h4>Precio Unitario { data.price } $</h4>
            <ItemCount precio={data.price} onAdd={onAdd} />
         { seleccionar  &&  <button className='btn btn-outline-success'>  <Link to='/CarShop'> Ir al Carrito  </Link> </button>   }
        </div> )


  }
  </>
  )
}
