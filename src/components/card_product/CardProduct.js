import './CardProduct.css'
import {Link} from 'react-router-dom'



const CardProduct = ({image ,name, description, alt, url}) => {
    return (
        <div className='product-single'>
                <img src={image} alt = {alt}></img>
                <h3>{name}</h3>
                <p>{description.substring(0,30)}...</p>
                <Link style={{color: 'white'}}to={url}>Alugar</Link>
        </div>
    )
}


export default CardProduct