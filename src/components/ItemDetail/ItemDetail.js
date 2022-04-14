import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ id, name, price, img, category, tipo, creador, anyo, descripcion, stock }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleOnAdd = (quantity) => {
        if (quantity === 0){
            console.log(`Carrito vacío`)
        } else {
            console.log(`Tienes ${quantity} productos en tu carrito`)
        }
    }

    return (
        
        <div className="OrgDetail">
            <div>
                <img className="imagenDetalle" src={img} alt={name}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>€{price}</p>
                <ul>
                    <li>{tipo}</li>
                    <li>{creador}</li>
                    <li>{anyo}</li>
                    <li>{descripcion}</li>
                    <li>Stock: {stock}</li>
                </ul>
            </div>  
            <ItemCount initial={1} stock={5} count={1} onAdd={handleOnAdd}/>
        </div>
        )
    }

export default ItemDetail