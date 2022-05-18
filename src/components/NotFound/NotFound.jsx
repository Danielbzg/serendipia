import './NotFound.css'
import { NavLink } from 'react-router-dom'

const NotFound = () => {

    return (
        
        <div className='StyleNotFound'>
            <h1>Página no encontrada</h1>
            <NavLink to="/"><h2>Ir a la página de inicio</h2>   </NavLink>
            
        </div>
        )
    }

export default NotFound