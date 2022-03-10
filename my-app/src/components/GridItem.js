import React from 'react'

export const GridItem = ({nombre, img}) => {
  return (
    <div className="card animate__animated animate__fadeIn">
            <img src={ img } alt={ nombre } width={200} height={200} />
            <p> { nombre } </p>
        </div>
  )
}
