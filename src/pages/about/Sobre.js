
import styles from './Sobre.module.css'
import photo from '../../assets/qsomos01.jpg'
import upImage from '../../assets/uphouse.jpeg'



const Sobre = () => {

    return(
        <section>
            <div className={styles.overland}>
                <div className={styles.welcome}>
                    <h2>Conheça a Up Locaçoes</h2>
                    <p>A Up Locações é especializada na locação de equipamentos de alta qualidade para a construção civil e manutenção. Com foco em segurança e eficiência, oferece soluções inovadoras, como andaimes e plataformas, atendendo às necessidades de cada projeto com excelência e agilidade.</p>
                </div>
            </div>
                <div className={styles.image_about}></div>
                <div className={styles.placeholder}></div>
                <div className={styles.about_center}>
                    <div className={styles.photo}>
                        <img src={photo}></img>
                    </div>
                    <div className={styles.about_message}>
                        <h2>História</h2>
                        <h3 className='sub'>A Up Locaçoes</h3>
                        <p>A Up Locações é uma empresa que nasceu da parceria de dois amigos que juntos tem o objetivo de proporcionar ao mercado da construção da civil uma ampla variedade de equipamentos para locação. Sempre prezando pela qualidade, agilidade e pelo atendimento personalizado para atender a demanda dos clientes. Desde 2019 a Up é a parceria perfeita para sua obra, seja ela uma simples reforma ou uma obra completa. Contamos com a locação de andaimes, betoneiras, equipamentos para furação e demolição, jardinagem e limpeza e ferramentas elétricas. Também oferecemos o serviço de manutenção de betoneiras. Estamos localizados na cidade de Esteio e atendemos toda a região.</p>
                        
                    </div>
                    <div className={styles.upImage}>
                        <img src={upImage}></img>
                    </div>
                </div>
    
        </section>
    )
}


export default Sobre