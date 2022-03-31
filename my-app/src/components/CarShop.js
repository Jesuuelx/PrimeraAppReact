import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext'

export const CarShop = () => {
  
  const { carshop, total, user, setUser, deleteAll, deleteElement} = useContext(UserContext);
  console.log(carshop)
  return (
    <div>
<ul>
 {

carshop.map((data) => (
 
<div key={data.id}> 
  <img src={ data.img } alt={ data.nombre } width={150} height={150} />
  <h4> { data.nombre } </h4>
  <h4>Precio Unitario { data.price }  $ x { data.cantidad }</h4>
  <button className='btn btn-outline-danger'
  onClick={ () => { deleteElement(data.id, data.price, data.cantidad)}}>Borrar</button>
  </div>

  ))


}
<div> <h3>Total: {total}</h3>  </div>
 


</ul>
<button className='btn btn-outline-danger' onClick={deleteAll}> Vaciar Carrito </button>
<button className='btn btn-primary'><Link to='/'> Seguir Comprando  </Link>  </button>
<button onClick={ ()=>{ setUser({user:'Jesuuelx',
email:'jesusaleandrosalas@hotmail.com'})}} className='btn btn-outline-success'>Login</button>
<button className='btn btn-outline-info'>{ JSON.stringify( user ) }</button>

    </div>
  )
}
