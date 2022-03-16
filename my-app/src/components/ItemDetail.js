import React, { useEffect, useState } from 'react'

export const ItemDetail = ({ producto }) => {

  const [cargando, setCargando] = useState({
    loading:true,
    data:[],
  })

  const { loading, data } = cargando;
 
const  getItem = () => {

  return new Promise ((resolve, reject ) => {
      if( producto ){
        setTimeout(() => {
          resolve(producto)
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
  })

})

 
 
  return (
    <div>
{loading && <p className="animate__animated animate__flash">Loading</p>}

<div className="card animate__animated animate__fadeIn">
            <img src={ data.img } alt={ data.nombre } width={200} height={200} />
            <h4> { data.nombre } </h4>
            <p>{ data.description }</p>
            <h4>PRecio 1000$</h4>
        </div>


    </div>
  )
}
