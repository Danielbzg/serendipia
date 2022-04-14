import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <Link className='fondoCarro' to='/carrito'>
                <img src='./images/carrito.png' className='estiloCarrito' alt='cart'/>
                0
        </Link>
    )
}

export default CartWidget