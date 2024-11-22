import styles from './SectionTool.module.css'

import betoneira from '../../assets/betoico.png'
import 'animate.css';

const SectionTool = ({image, alt, title, description, direction}) => {

    return (
        <section>
            <div className={styles.center} style={{flexDirection: direction}}>
                <div className={"animate__animated animate__bounceInLeft animate__slower"} >
                    <div className={styles.imageContainer}>
                    <img src={image} alt={alt} />
                    </div> 
                </div>
                <div className={styles.containerDescription}>
                    <h2>{title}</h2>
                    <p>
                        {description}

                    </p>

                </div>

            </div>


        </section>
    )


}

export default SectionTool