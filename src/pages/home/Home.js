


import 'swiper/css'



import ContainerSlider from "../../components/containerSlider/ContainerSlider"
//import Serviços from '../../components/seviços_home/Serviços'
import About from '../../components/about_home/About'
import Contact from '../../components/contact_home/Contact'
import betoneira from '../../assets/betoico.png'
import SectionTool from '../../components/section_tool/SectionTool'
import SectionService from '../../components/section_service/SectionService'
import IconWhatsapp from '../../components/icon_whatsApp/IconWhatsapp'
import SectionQuestions from '../../components/section_questions/SectionQuestions'
import andaimeHome from '../../assets/andaimeHome.png'


const Home = () => {
 






    return(
      <section className="firstContainer">
        <IconWhatsapp/>
        <ContainerSlider/>


        <SectionService/>

        <SectionTool image={betoneira} alt="Betoneira" title="Betoneiras de alta qualidade" description="A betoneira perfeita para quem busca eficiência, durabilidade e desempenho inigualável no preparo de concreto e argamassa. Com uma estrutura robusta e tecnologia avançada, ela é a parceira indispensável para obras de pequeno, médio ou grande porte, garantindo misturas homogêneas e resultados precisos a cada uso." direction="row-reverse"/>

        <SectionTool image={andaimeHome} alt="Andaimes" title="Andaimes" description="O andaime de alta qualidade da Up Locações é uma estrutura robusta, feita com materiais resistentes e de alto padrão, garantindo durabilidade e segurança. Seu sistema modular permite montagem rápida e ajustes conforme a necessidade do projeto. As plataformas antiderrapantes oferecem estabilidade, e os guarda-corpos e rodapés proporcionam proteção contra quedas. Nos modelos móveis, os rodízios de alta resistência asseguram fácil deslocamento. Ideal para obras de construção e manutenção, esse andaime atende às mais rigorosas normas de segurança, oferecendo eficiência e confiabilidade para os trabalhadores." direction="row"/>
        {/*<Serviços/>*/ }
        <About/>
        <Contact />
        <SectionQuestions/>
      </section>
    )
}

export default Home