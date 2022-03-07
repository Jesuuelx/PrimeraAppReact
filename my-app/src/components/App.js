import React from 'react'
import { GridItemList } from './GridItemList'
import { ItemCount } from './ItemCount'
import { NavBar } from './NavBar'

export const App = () => {
  return (
    <>
    <NavBar />
    <GridItemList ofertas='Ofertas!!!!' />
    <ItemCount />
    </>
  )

}
