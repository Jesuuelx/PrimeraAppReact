import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CarShop } from './CarShop';
import { GridItemList } from './GridItemList';
import { ItemDetail } from './ItemDetail';

export const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<GridItemList />} />
        <Route path='/tipo/:id' element={<GridItemList />} />
        <Route path='/CarShop'  element={ <CarShop />} />
        <Route path='/detalle/:id' element={<ItemDetail />} /> 
        <Route path='*' element={ <Navigate replace to='/' />} />
    </Routes>
  )
}
