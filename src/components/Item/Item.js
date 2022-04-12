import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ name, price, img, id }) => {
    return (
        
        <div>
            <div>
                <img width="150" height="250" src={img} alt={name}/>
                <h2>{name}</h2>
                <p>€{price}</p>
                <Link to={`/detail/${id}`} className="DetailBoton">Ver detalle</Link>
            </div>            
        </div>
        )
    }

export default Item