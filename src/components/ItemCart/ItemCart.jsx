import './ItemCart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext.jsx'


const ItemCart = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='styleItemCart'>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio x Unidad: {price}€
                </p>
            </section>
            <footer>
                 <p>
                     Subtotal: {price * quantity}€
                 </p>
                 <button onClick={() => handleRemove(id)}>Descartar este producto</button>
            </footer>
        </article>
    )
}

export default ItemCart