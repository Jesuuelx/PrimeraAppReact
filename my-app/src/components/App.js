import React, { useState } from 'react'
import { productos } from '../data-productos/data'
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
    <GridItemList itemList={ productos } />
    <h3>Oferta, al Detalle</h3>
    <ItemCount {...properties} />
    <h2>{ compra }</h2>
    </>
  )

}
