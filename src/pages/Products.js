import CardProduct from "../components/card_product/CardProduct"
import './Products.css'


import {useState, useEffect} from 'react'



const Products = ()  => {
   
   
    const urlApi = process.env.REACT_APP_URL_PRODUCTS
    const [Products, setProducts] = useState([])
    const [url, setUrl] = useState("")
    
    
    useEffect(()=>{
        async function fecthData() {
    
           const res = await fetch(urlApi)
           const data = await res.json()
           console.log(data)
             setProducts(data.products)
             setUrl(data.url)
        

        }

        fecthData()

    },[])
   
    return(
        <section className = 'container-products'>
            <h1>Produtos que você encontrará na Up locaçoes</h1>
            <div className = 'products'>
                {Products.map((item) => (
                    <CardProduct  key={item._id} image={url + item.image} name= {item.name} description = {item.description} alt = {item._id}/>
                ))}
      
            </div>
        </section>

    )
}


export default Products


