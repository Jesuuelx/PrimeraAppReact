import React from 'react'
import { Link } from 'react-router-dom'

export const GridItem = ({nombre, img, id}) => {
  return (
    <div className="card animate__animated animate__fadeIn">
            <img src={ img } alt={ nombre } width={200} height={200} />
            <h3> { nombre } </h3>
            <button className='btn btn-outline-info btn-block'> <Link to={`/detalle/${id}`} className='detalle'> Ver Detalle </Link>  </button>
        </div>
  )
}
