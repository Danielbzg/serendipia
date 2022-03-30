import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div>
                <img src='./images/logo192.png' className="estiloLogo" alt="logo" />
                <h1 className="title">Serendipia</h1>
            </div>

            <div className='orgSecciones'>
                <button className="botonMenu">Inicio</button>
                <button className="botonMenu">Quiénes somos</button>
                <button className="botonMenu">Productos</button>
                <button className="botonMenu">Contacto</button>
            </div>

            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar