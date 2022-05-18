import './Cart.css'
import { useContext, useState } from "react"
import CartContext from '../../context/CartContext.jsx'
import ItemCart from '../ItemCart/ItemCart.jsx'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, totalCost, getQuantity, finishShopping } = useContext(CartContext)

    if (getQuantity() === 0) {
        return (
            <div className='orgCard'>
            <div className='payCard'>
                <h1>No hay items en el carrito</h1>
                <a href="/list"> <input className='BlueReturn' type="button" value="Visita nuestra lista de producto"></input></a>
            </div>
            </div>
        )
    }

    return (
        <div className='orgCard'>
            <div className='payCard'>
                <h1>Cart</h1>
                {cart.map(p => <ItemCart key={p.id} {...p} />)}
                <h3>Total: {totalCost()}€ </h3>
                <div className='orgButtons'>
                    <button onClick={() => {clearCart()}} className='dangerRed'>Limpiar carrito</button>
                    <Link to={'/form'}><button className='OkGreen'>Realizar compra</button></Link>
                </div>
                
            </div>
        </div>

    )
}

export default Cart