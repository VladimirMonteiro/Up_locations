import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Loading from "../../components/loading/Loading"
import { Link } from 'react-router-dom'
import axios from "axios"

import styles from './ProductsDetails.module.css'


const api = process.env.REACT_APP_API

const ProductsDetails = () => {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  
  const [itemClicado, setItemClicado] = useState(0);






  useEffect(() => {

    async function fecthData() {
      await axios.get(`${api}/product`).then((response) => {
        setProduct(response.data)
        setRemoveLoading(true)

      }).catch(err => console.log(err))

    }

    fecthData()



  }, [])

  const singleProduct = product.filter((product) => product._id === id)
  console.log(singleProduct)






  




  const handleItemClick = (index) => {
    // Atualiza o estado para o índice do item clicado
    setItemClicado(index);
  };




  return (
    <section id="container" className={styles.main_container}>
      <div className={styles.center_container}>
        {!removeLoading && <Loading/>}
        <div className={styles.image_container}>
          {product.length > 0 && (<img crossOrigin="anonymous" src={`${api}/images/products/${singleProduct[0].image}`} alt={product._id} />)}

        </div>
        <div className={styles.product_description}>
          {product.length > 0 && (
            <>
              <h2>{singleProduct[0].name}</h2>
              <p>{singleProduct[0].description}</p>
              <button><a href="https://api.whatsapp.com/send?phone=5551999134363" target={'_blank'} rel='noreferrer'>Alugar</a></button>



            </>
          )}

          
        </div>
      </div>
      <div className={styles.product_details}>
        {product.length > 0 && (
          <ul className={styles.list_option}>
          {['Detalhes', 'Orientação de segurança', 'Orientação operacional', 'Informações técnicas'].map((item, index) => (
            <li key={index} onClick={() => handleItemClick(index)} style={{
              background: index === itemClicado ? 'linear-gradient(to right ,#0251B8 ,#0267EB)' : ''
            }}
            >
              {item}
            </li>
          ))}
        </ul>

        )}
        

        {itemClicado === 0 && product.length > 0 && (
          <div className={styles.option_detalhes}>
            <p>{singleProduct[0].description}, entre em contato com <span style={{color: '#0251B8', fontWeight: 'bold'}}> Up Locações</span> para mais informações.</p>

            <h3>Atenção</h3>
            <ul>
              <li>As especificações técnicas de cada equipamento podem variar de acordo com os fabricantes.</li>

              <li>As imagens dos produtos/equipamentos são ilustrativas.</li>

              <li>Consulte a <span style={{color: '#0251B8', fontWeight: 'bold'}}>Up Locações</span> em caso de dúvidas.</li>

            </ul>
          </div>
        )}
        {itemClicado === 1 && (
          <div className={styles.option_segurança}>
            <h3>Cuidados especiais</h3>
            <ul>
             {singleProduct[0].security_information.map((product, index)=> (
              <li key={index}>{product}</li>
             ))}
              
              <h3>Cuidados para transportar</h3>

              <ul>
                <li>Nos veículos de transporte, fixar o equipamento para evitar que se desloque causando danos ao equipamento, ao veículo, a terceiros e ao próprio condutor.</li>
                <li>Pessoas e equipamentos não podem ser transportados no mesmo compartimento.</li>
                <li>O transporte deve ser realizado respeitando-se o limite de peso e dimensões do veículo, fixando os equipamentos.</li>
              </ul>


            </ul>


          </div>
        )}
        {itemClicado === 2 && (
          <div className={styles.option_operacional}>
            <h3>Orientação operacional</h3>
            <ul>
              {singleProduct[0].operational_information.map((product, index) => (
                <li key={index}> {product} </li>
              ))}
            </ul>
          </div>
        )}
        {itemClicado === 3 &&(
          <div className={styles.informes}>
            {Object.keys(singleProduct[0].technical_information).map((key)=> (
              <div key={key} className={styles.details_product}>
                    <h3>{key}</h3>
                    <p>{singleProduct[0].technical_information[key]}</p>
              </div>
            ))}
         
         

          </div>
        )}
      </div>
      <h2 className={styles.title_products}>Produtos relacionados</h2>
      <div className={styles.more_products} key={product._id}>
     
        
        
        
        
        {product.slice(0, 5).map((product) => (
          
          <Link  key={product._id}to={`/produtos/${product._id}`}>
          
            <div onClick={()=> setItemClicado(0)} key={product._id} className={styles.more_single_product}>
              <div>
                <img crossOrigin="anonymous" src={`${api}/images/products/${product.image}`} alt={product._id} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description.substring(0,100)}...</p>
            </div>
          </Link>
        ))}

      </div>



    </section>

  )
}


export default ProductsDetails