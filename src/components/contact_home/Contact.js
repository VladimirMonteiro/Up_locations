import './Contact.css'
import {useState, useEffect} from 'react'


const apiurl = process.env.REACT_APP_API_URL

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

        const res = await fetch(apiurl, {
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
                            <input type = 'text' name = 'name' id = 'name' required placeholder = 'Name...' onChange={(e)=>setName(e.target.value) } value ={name} />
                        </div>
                        <div>
                            <label htmlFor ='tel'>Telefone:</label> <br></br>
                            <input type = 'text' name = 'tel' id = 'tel' required placeholder = 'Phone...' onChange={(e)=> setTel(e.target.value)} value = {tel} />
                        </div>
                        <textarea placeholder = 'Mensagem...' onChange={(e)=> setMessage(e.target.value)} value = {message}></textarea>
                        <input type = 'submit' value = 'Enviar' />

                    </form>
                </div>
                <div className ='map'>
                <div className="mapouter"><div className="gmap_canvas"><iframe width="400" height="360" id="gmap_canvas" src="https://maps.google.com/maps?q=up%20loca%C3%A7oes&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a></div></div> </div>
                </div>
        </section>
    )
}


export default Contact