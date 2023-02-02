import './CardProduct.css'



const CardProduct = ({image ,name, description, alt}) => {
    return (
        <div className='product-single'>
                <img src={image} alt = {alt}></img>
                <h3>{name}</h3>
                <p>{description}</p>
                <button>Alugar</button>
        </div>
    )
}


export default CardProduct