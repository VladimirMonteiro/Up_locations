import './Contact.css'
import {useState} from 'react'



const urlEmail = process.env.REACT_APP_EMAIL

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
        
        const res = await fetch('http://localhost:8000/form', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FormContact)


        })

        setName('')
        setTel('')
        setMessage('')

        alert('Mensagem enviada com sucesso!')

    }




    return (
        <section className='contact-container'>
            <h2>Contato</h2>
            <div className = 'center'>
                <div className = 'form'>
                    <form onSubmit={handleSubmit}>
                        <h3>Entre em contato conosco</h3>
                        <div>
                            <label htmlFor ='name'>Nome:</label> <br></br>
                            <input type = 'text' name = 'name' id = 'name' required placeholder = 'Nome...' onChange={(e)=>setName(e.target.value) } value ={name} />
                        </div>
                        <div>
                            <label htmlFor ='tel'>Telefone:</label> <br></br>
                            <input type = 'text' name = 'tel' id = 'tel' required placeholder = 'Telefone...' onChange={(e)=> setTel(e.target.value)} value = {tel} />
                        </div>
                        <textarea placeholder = 'Mensagem...' onChange={(e)=> setMessage(e.target.value)} value = {message}></textarea>
                        <input type = 'submit' value = 'Enviar' />

                    </form>
                </div>
                <div className ='map'>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Avenida presidente vargas 3630&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a></div></div>
               </div>
                </div>
        </section>
    )
}



export default Contact