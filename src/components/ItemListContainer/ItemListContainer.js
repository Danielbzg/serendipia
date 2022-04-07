import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import plants from '../mock/plants';
import getPlants from '../utils/getPlants';

const ItemListContainer = () => {
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getPlants().then(plants => setProducts(plants)).catch(error => console.log(error));
    }, [])

    /* useEffect(()=>{
        console.log(products);
    }, [products]) */

    const onAdd = (condition) => {

        if (condition == '-') {
            setCount(count - 1);
        }
        if (condition === '+') {
            setCount(count + 1);
        }
    };
    const stock = 6;
    const initial = 1;
    return (
        <div>
            {products.map((product) => (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} />
                <ItemCount onAdd={onAdd} stock={product.stock} initial={initial} count={count} />
            </div>))}

        </div>
    )
}

export default ItemListContainer