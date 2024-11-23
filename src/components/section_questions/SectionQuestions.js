import styles from './sectionQuestions.module.css'

const SectionQuestions = () => {
    
    return (
        <section className={styles.container}>
             <h2>Perguntas frequentes</h2>
            <div className={styles.center}>
               
            </div>
                <div>
                    <details>
                        <summary>Como posso alugar um equipamento?</summary>
                        <p className={styles.res}>Você pode entrar em contato conosco pelo telefone ou através do nosso site.</p>
                    </details>
                </div>
                <div>
                    <details>
                        <summary>Quais são os métodos de pagamento?</summary>
                        <p className={styles.res}>Aceitamos cartões de crédito, débito e transferências bancárias</p>
                    </details>
                </div>
                <div>
                    <details>
                        <summary>Qual é o prazo de entrega dos equipamentos?</summary>
                        <p className={styles.res}>Os prazos variam de acordo com a disponibilidade, mas geralmente entregamos em até 24 horas.</p>
                    </details>
                </div>
                <div>
                    <details>
                        <summary>O que fazer se um equipamento apresentar problemas?</summary>
                        <p className={styles.res}>Entre em contato conosco imediatamente e faremos a troca ou reparo do equipamento.</p>
                    </details>
                </div>
               
            
        </section>
    )
}

export default SectionQuestions