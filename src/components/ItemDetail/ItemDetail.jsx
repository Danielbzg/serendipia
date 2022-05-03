import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import '../ItemDetail/ItemDetail.css'
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, name, price, img, category, tipo, creador, anyo, descripcion, stock }) => {

    const [quantity, setQuantity]= useState(0)

    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const handleOnAdd = (count) => {
        setQuantity(count)

        const productObj = {
            id, name, price
        }

        addItem ({...productObj, quantity: count})

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
            {/* {<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>} */}
            <div>{stock>0?<ItemCount onAdd={handleOnAdd} stock={stock} initial={getQuantityProd(id)}/> :<div>Sin Stock </div>}</div>
        </div>
        )
    }

export default ItemDetail