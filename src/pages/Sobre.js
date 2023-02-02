
import './Sobre.css'
import photo from '../assets/qsomos01.jpg'
import upImage from '../assets/uphouse.jpeg'



const Sobre = () => {

    return(
        <section>
            <div className='overland'>
                <div className='welcome'>
                    <h2>Conheça a Up Locaçoes</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit ad in exercitationem tempore pariatur. Quibusdam, numquam delectus, aliquid cupiditate cum et suscipit ad saepe voluptatem incidunt neque? Sit, distinctio?</p>
                </div>
            </div>
                <div className='image-about'></div>
                <div className='placeholder'></div>
                <div className='about-center'>
                    <div className='photo'>
                        <img src={photo}></img>
                    </div>
                    <div className='about-message'>
                        <h2>História</h2>
                        <h3 className='sub'>A Up Locaçoes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit ad in exercitationem tempore pariatur. Quibusdam, numquam delectus, aliquid cupiditate cum et suscipit ad saepe voluptatem incidunt neque? Sit, distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit ad in exercitationem tempore pariatur. Quibusdam, numquam delectus, aliquid cupiditate cum et suscipit ad saepe voluptatem incidunt neque? Sit, distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit ad in exercitationem tempore pariatur. Quibusdam, numquam delectus, aliquid cupiditate cum et suscipit ad saepe voluptatem incidunt neque? Sit, distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit ad in exercitationem tempore pariatur. Quibusdam, numquam delectus, aliquid cupiditate cum et suscipit ad saepe voluptatem incidunt neque? Sit, distinctio?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit ad in exercitationem tempore pariatur. Quibusdam, numquam delectus, aliquid cupiditate cum et suscipit ad saepe voluptatem incidunt neque? Sit, distinctio?</p>
                    </div>
                    <div className='upImage'>
                        <img src={upImage}></img>
                    </div>
                </div>
    
        </section>
    )
}


export default Sobre