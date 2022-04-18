import './ItemCount.css';
import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > initial){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    return <div className='EstiloContador'>
        <p>Cantidad</p>
        <div>
           <button onClick={decrement}>-</button>
                {count}
            <button onClick={increment}>+</button> 
        </div>
        <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
        
    </div>
}

export default ItemCount;