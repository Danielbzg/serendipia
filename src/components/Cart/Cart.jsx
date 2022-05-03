import './Cart.css'
import { useContext, useState } from "react"
import CartContext from '../../context/CartContext.jsx'
import ItemCart from '../ItemCart/ItemCart.jsx'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, totalCost, getQuantity, finishShopping } = useContext(CartContext)

    if(getQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
            <a href="/list"> <input type="button" value="Visita nuestra lista de producto"></input></a>
            </div>
        )
}

return (
    <div>
        <h1>Cart</h1>
        { cart.map(p => <ItemCart key={p.id} {...p}/>) }
        <h3>Total: ${totalCost()}</h3>
        <button onClick={() => {
            clearCart()
        }}>Limpiar carrito</button>
        <Link to={'/form'}><button /* className="checkOut" */>Realizar compra</button></Link>
    </div>
)
}

export default Cart