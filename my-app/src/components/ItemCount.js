import React, { useState } from 'react'
import '../index.css'

export const ItemCount = () => {
  
    const [counter, setCounter] = useState(0)

    let stock = 10;
    const handleSumar = () => {
       if ( counter === 10 ){
           return
       }
       
        setCounter(c => c + 1)
        stock = stock - 1
    }

    const handleRestar = () => {
        if ( counter === 0){
            return
        }
        
        setCounter(c => c - 1)
        stock = stock + 1
    }

    const handleFinal = () => {
        return
    }
  
  
    return (

    <div className='card'>

        <pre> {counter} </pre>
<button onClick={ handleSumar } className='btn btn-primary'>Sumar</button>
<button onClick={ handleRestar} className='btn btn-danger'>Restar</button>
<button onClick={ handleFinal } className='btn btn-outline-primary'>Finalizar Compra</button>



    </div>
    
    

  )
}
