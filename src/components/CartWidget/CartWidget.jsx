import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return(
        <Link className='fondoCarro' to='/cart'>
                <img src='./images/carrito.png' className='estiloCarrito' alt='cart'/>
                {getQuantity()}
        </Link>
    )
}

export default CartWidget