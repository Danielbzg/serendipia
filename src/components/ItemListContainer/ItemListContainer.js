import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
    const [count, setCount] = useState(1);
    const onAdd = (condition) => {

        if(condition == '-'){
            setCount(count - 1);
        }
        if (condition === '+'){
            setCount(count + 1);
        }
    };
    const stock = 6;
    const initial = 1;
    return (
        <div>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/>
        </div>
    )
}

export default ItemListContainer