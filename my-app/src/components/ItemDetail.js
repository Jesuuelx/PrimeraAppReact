import React, { useEffect, useState } from 'react'

export const ItemDetail = ({ itemList, img, nombre, description  }) => {

  const [cargando, setCargando] = useState({
    loading:true,
    data:[],
  })

  const { loading, data } = cargando;
 
const  getItem = () => {

  return new Promise ((resolve, reject ) => {
      if( itemList.length > 1 ){
        setTimeout(() => {
          resolve(itemList)
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
            <img src={ img } alt={ nombre } width={350} height={350} />
            <h4> { nombre } </h4>
            <p>{ description }</p>
        </div>


    </div>
  )
}
