import React, { useState } from 'react'
import { Provider } from './UserContext'

export const MyContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [ carshop, setCarshop] = useState([]);
    const [ numeroProd, setNumeroProd] = useState(0)
    const [ total,   setTotal] = useState(0)

    const addProductToCar = (producto, cantidad) => {

      setCarshop(c => [...c, {...producto, cantidad}])
      setNumeroProd(n => n + cantidad);
      setTotal(t => t + (cantidad * producto.price))
      console.log("Funciona")




    }

    const deleteAll = () => {

      setCarshop([]);
      setNumeroProd(0);
      setTotal(0);

    }

    const deleteElement = ( id, precio, nro ) => {

        setCarshop(carshop.filter((producto) => producto.id !== id));
        setTotal(t => t - precio * nro )

    }

    /*  const deleteElementforElement = ( id, precio, nro, cantidad ) => {

      if ( cantidad === 0 ){

      setCarshop(  carshop.filter(p => p.id !== id)  )


      }

      if ( cantidad !== 0 ){

        setCarshop( carshop.map( producto => {
          ( producto.id === id) && 
      })) 

      setTotal( t => t - precio * nro )

      }
   
   
     


    } */

  const values = { user,
    setUser,
     addProductToCar,
     carshop,
     total,
     numeroProd,
     deleteAll,
     deleteElement,
  }

  

    return (
<Provider value={values}>
{children}
</Provider>
  )
}
