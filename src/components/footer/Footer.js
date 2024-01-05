import './Footer.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import logoUp from '../../assets/logo_up.png'

import {Link} from 'react-router-dom'



const Footer = () => {

    return (
        <footer>
            <div className="footer_center">
                
                <div className='logo'>
                    <img src={logoUp} alt="Up locações" />
                </div>
                <div>
                    <h3>Intitucional</h3>
                    <ul className='institucional'>
                        <li><Link to="/sobre">Sobre nós</Link></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" target={'_blank'} rel='noreferrer'>Seja um fornecedor</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" target={'_blank'} rel='noreferrer'>Entre em contado conosco</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Equipamentos</h3>
                    <ul>
                        <li><a href="">Andaimes</a></li>
                        <li><a href="">Equipamentos para acesso e elevação</a></li>
                        <li><a href="">Compactação</a></li>
                        <li><a href="">Concretagem</a></li>
                        <li><a href="">Equipamentos de jardinagem</a></li>
                        <li><a href="">Equipamentos de limpeza</a></li>
                        <li><a href="">Ferramentas Elétricas</a></li>
                        <li><a href="">Equipamentos para Furação e Demolição</a></li>
                        <li><a href="">Gerador, bomba e compressor</a></li>
                        <li><a href="">Outros Equipamentos</a></li>
                    </ul>
                </div>
                <div className='redes_sociais'>
                    <ul>
                        <li><a href="https://www.facebook.com/uplocacoesesteio" target={'_blank'} rel='noreferrer'>{<FaFacebook />}</a></li>
                        <li><a href="https://www.instagram.com/uplocacoes.esteio/" target={'_blank'} rel='noreferrer'>{<FaInstagram />}</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" target={'_blank'} rel='noreferrer'>{<FaWhatsapp />}</a></li>
                        { /* <li><a href="#">{<FaWhatsapp/>}</a></li> */}
                    </ul>
                </div>
            </div>
            <div className='sub_footer'>
                <p>&copy; 2023 - Todos direitos reservados <span>Up Locações</span></p>
            </div>




        </footer>
    )
}


export default Footer