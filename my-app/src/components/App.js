import React, { useState } from 'react'
import { GridItemList } from './GridItemList'
import { ItemCount } from './ItemCount'
import { NavBar } from './NavBar'

export const App = () => {
 
  /* el set compra seria mi funcion OnAdd */
  const [compra, setCompra] = useState('No Hay Articulos en el carrito');

  const properties = {
    setCompra:setCompra,
    initialState:0,
    stock:10,
    
  }

  return (
    <>
    <NavBar />
    <GridItemList ofertas='Ofertas!!!!' />
    <ItemCount {...properties} />
    <h2>{ compra }</h2>
    </>
  )

}
