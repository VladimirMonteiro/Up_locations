import './About.css'

//images
import betoneiras from '../../assets/betoneira_home.jpg'
import andaimes from '../../assets/andaimes.jpg'
import rompedores from '../../assets/rompedores.jpg'
import compactadores from '../../assets/compactadores.jpg'


import {Link} from 'react-router-dom'







const About = () => {

    return (
        <section className = 'container03'>
            <h2>Equipamentos mais alugados</h2>
            <div className="center">
                <Link to='/produtos'>
                    <div className='single_image'>
                        <img src={betoneiras} alt="betoneiras" />
                        <p>Betoneiras</p>
                    </div>
                </Link>
                <a href="/produtos">
                    <div className='single_image'>
                        <img src={andaimes} alt="andaimes" />
                        <p>Andaimes</p>
                    </div>
                </a>
                <Link to="/produtos">
                    <div className='single_image'>
                        <img src={rompedores} alt="rompedores" />
                        <p>Rompedores</p>
                    </div>
                </Link>
                <Link to="/produtos">
                    <div className='single_image'>
                        <img src={compactadores} alt="compactadores" />
                        <p>Compactadores</p>
                    </div>
                </Link>
                

                

              
            </div>
        </section>

    )
}


export default About