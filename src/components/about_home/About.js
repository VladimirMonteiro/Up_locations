import './About.css'
import uphouse from '../../assets/uphouse.jpeg'







const About = () => {

    return (
        <section className = 'container03'>
            <div className="center">
                <h2>Sobre nós</h2>
                <div className="about-container">
                    <div className="imagem-up">
                        <img src = {uphouse} alt = 'up-house'></img>
                    </div>
                    <div className="about-message">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat eu purus eu pulvinar. Mauris blandit ligula libero, id interdum ligula tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat eu purus eu pulvinar. Mauris blandit ligula libero, id interdum ligula tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat eu purus eu pulvinar. Mauris blandit ligula libero, id interdum ligula tinciduntLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat eu purus eu pulvinar. Mauris blandit ligula libero, id interdum ligula tincidunt</p>

                    </div>

                </div>
            </div>
        </section>

    )
}


export default About