


import 'swiper/css'



import ContainerSlider from "../../components/containerSlider/ContainerSlider"
import Serviços from '../../components/seviços_home/Serviços'
import About from '../../components/about_home/About'
import Contact from '../../components/contact_home/Contact'
import betoneira from '../../assets/betoico.png'
import SectionTool from '../../components/section_tool/SectionTool'


const Home = () => {
 






    return(
      <section className="firstContainer">
        <ContainerSlider/>
        <SectionTool image={betoneira} alt="Betoneira" title="Betoneiras de alta qualidade" description="A betoneira perfeita para quem busca eficiência, durabilidade e desempenho inigualável no preparo de concreto e argamassa. Com uma estrutura robusta e tecnologia avançada, ela é a parceira indispensável para obras de pequeno, médio ou grande porte, garantindo misturas homogêneas e resultados precisos a cada uso." direction="row-reverse"/>

        <SectionTool image={betoneira} alt="Betoneira" title="Betoneiras de alta qualidade" description="Lorem ipsum odor amet, consectetuer adipiscing elit. Quis suspendisse non mollis donec non taciti posuere imperdiet. Rhoncus at sodales ultricies in felis lobortis. Consectetur sapien velit; ultricies curabitur viverra class eleifend fermentum. Aliquet hendrerit dictum enim erat conubia augue parturient quis. Placerat in diam congue placerat morbi quisque. Facilisis fames leo varius et commodo torquent fames facilisis nullam." direction="row"/>
        {/*<Serviços/>*/ }
        <About/>
        <Contact />
      </section>
    )
}

export default Home