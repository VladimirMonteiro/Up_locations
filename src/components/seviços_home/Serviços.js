import betoneiraIcon from '../../assets/betoico.png'

import './Serviços.css'



const Serviços = () =>{
    return (
        <section className="serviços">
            <div className="center-service">
               <div className='conteudo'>
                    <h2>Serviços</h2>
               </div>
               <div className='service-single'>
                <h2>Locaçoes</h2>
                <img className='icon' src={betoneiraIcon}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat eu purus eu pulvinar. Mauris blandit ligula libero, id interdum ligula tincidunt </p>
               </div>
               
               
               <div className='service-single'>
                <h2>Locaçoes</h2>
                <img className='icon' src={betoneiraIcon}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat eu purus eu pulvinar. Mauris blandit ligula libero, id interdum ligula tincidunt  </p>
               </div>
               

            </div>
        </section>
    )
}


export default Serviços