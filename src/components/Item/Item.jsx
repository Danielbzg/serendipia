import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ name, price, img, id, creador }) => {

    return (
        
        <div className='orgList'>
            <div className='CardList'>
                <img className='ImagenIndividualList' src={img} alt={name}/>
                <h2>{name}</h2>
                <h6>{creador}</h6>
                <p>€{price}</p>
                <Link to={`/detail/${id}`} className="DetailBoton">Ver detalle</Link>
            </div>            
        </div>
        )
    }

export default Item