import CardProduct from "../../components/card_product/CardProduct"
import styles from './Products.module.css'
import Loading from "../../components/loading/Loading"

import { BsSearch } from 'react-icons/bs'


import { useState, useEffect } from 'react'

import axios from 'axios'

const api = process.env.REACT_APP_API






const Products = () => {



    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])
    let [search, setSearch] = useState('')
    const [removeLoading, setRemoveLoading] = useState(false)

  



    useEffect(() => {
        async function fecthData() {

            await axios.get(`${api}/product`).then((response) => {
                console.log(response.data)
                setProducts(response.data)
                setRemoveLoading(true)
                return response.data
            }).catch(err => console.log(err))


        }

        fecthData()

    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        if (search) {
        
            search = search.charAt(0).toUpperCase() + search.slice(1)
            setSearch(search.trim())
        
            let searchProducts = products.filter((product) => product.name === search) 
        

            setSearchProducts(searchProducts)
        }else{
            setSearchProducts([])
            await axios.get(`${api}/product`).then((response) => {
                console.log(response.data)

                return response.data
            }).catch(err => console.log(err))
        }
     
        setSearch('')
    }

    function handleClick(filter){
       

        let searchProducts = products.filter((products)=> products.category === filter)
        console.log(searchProducts)

        setSearchProducts(searchProducts)
    }


  

    return (
        <section className={styles.container_products}>
            <h1>Produtos que você encontrará na Up Locações</h1>
            <form className={styles.form_search} onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" placeholder="Procure um equipamento..." onChange={(e) => setSearch(e.target.value)} value={search} />
                <BsSearch className={styles.icone} onClick={handleSubmit} />
            </form>
            <div className={styles.container}>
                <div className={styles.category}>
                    <h2>Categorias</h2>
                    <ul>
                        <li onClick={()=> handleClick('Andaimes')}>Andaimes</li>
                        <li onClick={()=> handleClick('acesso e elevação')}>Equipamentos para acesso e elevação</li>
                        <li onClick={()=> handleClick('Compactação')}>Compactação</li>
                        <li onClick={()=> handleClick('Concretagem')}>Concretagem</li>
                        <li onClick={()=> handleClick('Jardinagem')}>Equipamentos de jardinagem</li>
                        <li onClick={()=> handleClick('Limpeza')}>Equipamentos de limpeza</li>
                        <li>Ferramentas Elétricas</li>
                        <li>Equipamentos para Furação e Demolição</li>
                        <li>Gerador, bomba e compressor</li>
                        <li>Outros Equipamentos</li>
                    </ul>


                </div>
                {!removeLoading && <Loading/>}
                <div className={styles.products}>
                    
                    {searchProducts.length > 0? (
                        <>
                        
                            {searchProducts.map((item) => (
                                <CardProduct key={item._id} image={`${api}/images/products/${item.image}`} name={item.name} description={item.description} alt={item._id} url={`/produtos/${item._id}`}/>
                            
                            ))}



                        </>
                    ) : (<>


                        {products.length > 0 && (<>

                        {products.map((item) => (
                            <CardProduct key={item._id} image={`${api}/images/products/${item.image}`} name={item.name} description={item.description} alt={item._id} url={`/produtos/${item._id}`} />
                        ))}
                        
                        
                        
                        
                        </>)}

                    </>)}
                   

                </div>
            </div>

        </section>

    )
}


export default Products


