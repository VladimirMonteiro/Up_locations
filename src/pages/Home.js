


import 'swiper/css'
import './Home.css'



import ContainerSlider from "../components/containerSlider/ContainerSlider"
import Serviços from '../components/seviços_home/Serviços'
import About from '../components/about_home/About'
import Contact from '../components/contact_home/Contact'


const Home = () => {
 






    return(
      <section className="firstContainer">
        <ContainerSlider/>
        <Serviços/>
        <About/>
        <Contact />
      </section>
    )
}

export default Home