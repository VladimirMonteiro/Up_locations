import betoneiraIcon from '../../assets/betoico.png'

import './Serviços.css'



const Serviços = () =>{
    return (
        <section className="serviços">
            <h2>Serviços</h2>
            <p className='sub_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quisquam non velit impedit quia quas quidem aspernatur ad fuga quae corporis, ut totam fugit voluptatem, natus odio hic, possimus error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam soluta fugit id suscipit quisquam debitis hic impedit, recusandae facere expedita quo, quis, dignissimos dicta incidunt. Quas amet iure sint blanditiis!</p>

            <div className="center-service">
               <div className='service-single'>
                    <h3>Locaçoes</h3>
                    <img className='icon' src={betoneiraIcon}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio repellat, quaerat inventore iure eaque excepturi rem repellendus cumque iste corrupti omnis adipisci quam maxime illum earum facilis ipsa aut quae! <span><a href="/produtos">Confira!</a></span> </p>
               </div>
        
               <div className='service-single'>
                    <h3>betoneiras</h3>
                    <img className='icon' src={betoneiraIcon}></img>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt optio laudantium ipsum. Veniam repudiandae eos, beatae eaque quod excepturi accusamus facere voluptates? Quos placeat delectus suscipit qui veniam sapiente! <span><a href="">Confira!</a></span></p>
               </div>
               

            </div>
        </section>
    )
}


export default Serviços