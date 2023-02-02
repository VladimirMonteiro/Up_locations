import CardProduct from "../components/card_product/CardProduct"
import './Products.css'


import {useState, useEffect} from 'react'



const Products = ()  => {
   

    const [Products, setProducts] = useState([])
    const [url, setUrl] = useState("")
    
    
    useEffect(()=>{
        async function fecthData() {

           const res = await fetch("http://localhost:5000/products")

           const data = await res.json()


           setProducts(data.products)
           setUrl(data.url)
           console.log(data)

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