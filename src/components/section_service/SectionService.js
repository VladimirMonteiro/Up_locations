
import styles from './SectionService.module.css'

import { Link } from 'react-router-dom'

const SectionService = () => {

    return (
        <section className={styles.container}>
            <div className={styles.center}>
                <div className={styles.card}>
                    <h2>Equipamentos para Construção</h2>
                    <p>Locação de betoneiras, andaimes, rompedores e <span><Link to="/produtos">muito mais!</Link></span></p>
                </div>
                <div className={styles.card}>
                <h2>Manutenção de betoneiras</h2>
                <p>Manutenção e concerto de betoneiras</p>

                </div>
                <div className={styles.card}>
                <h2>Suporte ao Cliente</h2>
                <p>Atendimento especializado para ajudar na sua escolha.</p>

                </div>
            </div>


        </section>
    )
}

export default SectionService