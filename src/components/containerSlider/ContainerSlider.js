import {Link} from 'react-router-dom'
//images
import betoneira from '../../assets/beto.png'
import andaime from '../../assets/andaime.png'





import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import './ContainerSlider.css'


const ContainerSlider = () => {



    return (


           <div className='containerSlider'>
    
            <Swiper  freeMode = {{enabled: false,sticky: false}} slidesPerView={1} modules={[Autoplay, Pagination, Navigation]} loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} speed = {1000} >
                <SwiperSlide>
                    <div>

                        
                        <img src={betoneira} alt='Betoneira'></img>
                        <div className='context'>
                            <h2>Betoneiras</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium, dolorum ex minima debitis in nobis. Dolore hic minima eveniet placeat veritatis unde fuga laborum veniam excepturi ab. Facere, ullam! <span><Link className='link-slider' to={'/produtos'}>Clique aqui</Link></span> </p>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div>
                 
                       <img src={andaime} alt='Andaimes'></img>
                       <div className='context'>
                            <h2>Andaimes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium, dolorum ex minima debitis in nobis. Dolore hic minima eveniet placeat veritatis unde fuga laborum veniam excepturi ab. Facere, ullam!<span><Link className='link-slider' to={'/produtos'}> Clique aqui</Link></span></p>
                        </div>
                       
                   </div>
                </SwiperSlide>
    
            </Swiper>
    
             </div>



    )
}

export default ContainerSlider