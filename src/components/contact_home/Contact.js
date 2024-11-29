import './Contact.css'
import { useState } from 'react'

const api = process.env.REACT_APP_API

const Contact = () => {

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const FormContact = {
            name,
            tel,
            message
        }
        
        try {
            const res = await fetch(`${api}/form`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(FormContact)
            })

            if (res.ok) {
                setName('')
                setTel('')
                setMessage('')
                alert('Mensagem enviada com sucesso!')
            } else {
                alert('Houve um erro ao enviar a mensagem. Tente novamente.')
            }
        } catch (error) {
            alert('Erro na comunicação com o servidor. Tente novamente mais tarde.')
        }
    }

    return (
        <section className='contact-container'>
            <h2>Contato</h2>
            <div className='center'>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <h3>Entre em contato conosco</h3>
                        <div>
                            <label htmlFor='name'>Nome:</label> <br />
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                placeholder='Nome...'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div>
                            <label htmlFor='tel'>Telefone:</label> <br />
                            <input
                                type='text'
                                name='tel'
                                id='tel'
                                required
                                placeholder='Telefone...'
                                onChange={(e) => setTel(e.target.value)}
                                value={tel}
                            />
                        </div>
                        <div>
                            <label htmlFor='message'>Mensagem:</label> <br />
                            <textarea
                                id='message'
                                placeholder='Mensagem...'
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>
                        </div>
                        <input type='submit' value='Enviar' />
                    </form>
                </div>

                <div className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6920.124598936482!2d-51.18436411976514!3d-29.86247711059534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951965875552ae4b%3A0xe39969932703ea48!2sAv.%20Pres.%20Vargas%2C%203630%20-%20Centro%2C%20Esteio%20-%20RS%2C%2093265-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1732901065573!5m2!1spt-BR!2sus"
                        width="400"
                        height="360"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact
