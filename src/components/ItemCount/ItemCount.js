import './ItemCount.css';
import React from 'react';


const ItemCount = ({onAdd, stock, initial, count}) => {
    return <div className='EstiloContador'>
        <h1>Contador de productos en stock</h1>
        <div>
           <button onClick={() => {if (count > initial) onAdd('-')}}>-</button>
                {count}
            <button onClick={() => {if (count < stock) onAdd('+')}}>+</button> 
        </div>
        
    </div>
}

export default ItemCount;