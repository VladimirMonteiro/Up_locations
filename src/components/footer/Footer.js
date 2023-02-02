import './Footer.css'
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'




const Footer = () => {

    return (
        <footer>
            <div className = 'message'>
                <p>&copy; Todos direitos reservados</p>
            </div>
            <div className='redes-sociais'>
                <ul>
                    <li><a href="https://www.facebook.com/uplocacoesesteio" target={'_blank'} rel = 'noreferrer'>{<FaFacebook/>}</a></li>
                    <li><a href="https://www.instagram.com/uplocacoes.esteio/" target={'_blank'} rel = 'noreferrer'>{<FaInstagram/>}</a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=5551999134363" target={'_blank'} rel = 'noreferrer'>{<FaWhatsapp/>}</a></li>

                   { /* <li><a href="#">{<FaWhatsapp/>}</a></li> */}
                </ul>
            </div>
        </footer>
    )
}


export default Footer