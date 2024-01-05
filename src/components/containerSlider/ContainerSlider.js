import {Link} from 'react-router-dom'
//images

import up_image from '../../assets/up_image.jpeg'
import mm from '../../assets/imm.jpg'
import image_slider from '../../assets/image_slider.jpeg'
import image_slider2 from '../../assets/image_slider2.jpeg'





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
                 
                       <img src={up_image} alt='up'></img>
                       <div className='context'>
                            <h2>Andaimes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium, dolorum ex minima debitis in nobis. Dolore hic minima eveniet placeat veritatis unde fuga laborum veniam excepturi ab. Facere, ullam!<span><Link className='link-slider' to={'/produtos'}> Clique aqui</Link></span></p>
                        </div>
                       
                   </div>
                </SwiperSlide>
    
                <SwiperSlide>
                   <div>
                 
                       <img src={mm} alt='up'></img>
                       <div className='context'>
                            <h2>Andaimes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium, dolorum ex minima debitis in nobis. Dolore hic minima eveniet placeat veritatis unde fuga laborum veniam excepturi ab. Facere, ullam!<span><Link className='link-slider' to={'/produtos'}> Clique aqui</Link></span></p>
                        </div>
                       
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div>
                 
                       <img src={image_slider} alt='up_image'></img>
                       <div className='context'>
                            <h2>Andaimes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium, dolorum ex minima debitis in nobis. Dolore hic minima eveniet placeat veritatis unde fuga laborum veniam excepturi ab. Facere, ullam!<span><Link className='link-slider' to={'/produtos'}> Clique aqui</Link></span></p>
                        </div>
                       
                   </div>
                </SwiperSlide>
    
                <SwiperSlide>
                   <div>
                 
                       <img src={image_slider2} alt='up_image2'></img>
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