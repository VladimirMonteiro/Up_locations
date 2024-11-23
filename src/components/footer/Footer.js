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
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" title='whatsapp' target={'_blank'} rel='noreferrer'>Seja um fornecedor</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" title='whatsapp' target={'_blank'} rel='noreferrer'>Entre em contado conosco</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Equipamentos</h3>
                    <ul>
                        <li><Link to='/produtos'>Andaimes</Link></li>
                        <li><Link to='/produtos'>Equipamentos para acesso e elevação</Link></li>
                        <li><Link to='/produtos'>Compactação</Link></li>
                        <li><Link to='/produtos'>Concretagem</Link></li>
                        <li><Link to='/produtos'>Equipamentos de jardinagem</Link></li>
                        <li><Link to='/produtos'>Equipamentos de limpeza</Link></li>
                        <li><Link to='/produtos'>Ferramentas Elétricas</Link></li>
                        <li><Link to='/produtos'>Equipamentos para Furação e Demolição</Link></li>
                        <li><Link to='/produtos'>Gerador, bomba e compressor</Link></li>
                        <li><Link to='/produtos'>Outros Equipamentos</Link></li>
                    </ul>
                </div>
                <div className='redes_sociais'>
                    <ul>
                        <li><a href="https://www.facebook.com/uplocacoesesteio" title='facebook' target={'_blank'} rel='noreferrer'>{<FaFacebook />}</a></li>
                        <li><a href="https://www.instagram.com/uplocacoes.esteio/" title='instagram' target={'_blank'} rel='noreferrer'>{<FaInstagram />}</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" title='whatsapp' target={'_blank'} rel='noreferrer'>{<FaWhatsapp />}</a></li>
                        { /* <li><a href="#">{<FaWhatsapp/>}</a></li> */}
                    </ul>
                </div>
            </div>
            <div className='sub_footer'>
                <p>Up Locações de Equipamentos &copy; 2024 Todos os direitos reservados - <span><a href="https://outercode.com.br" target={'_blank'}rel='noreferrer' >Outer Code Software Solutions</a></span></p>
              
            </div>




        </footer>
    )
}


export default Footer