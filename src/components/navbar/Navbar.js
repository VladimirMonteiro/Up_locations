import { Link } from "react-router-dom"
import { useState } from "react"

import './Navbar.css'





const Navbar = () => {

    const [menu, setMenu] = useState(false)


    const handleOpenMenu = () => {
     
        if(menu === false){
        setMenu(true)
       }else{
        setMenu(false)
       }
    

       
       console.log(menu)
    }

 


    return(
        <header>
            <div className="center">
                <h1><a href="/" style={{color: 'yellow'}}>Up Locações </a></h1>
                <nav className="menu-desktop">
                    <ul>
                        <li><Link className="hovver_effect" to='/'>Home</Link></li>
                        <li><Link className="hovver_effect" to='/produtos'>Produtos</Link></li>
                        <li><Link className="hovver_effect" to='/sobre'>Sobre nós</Link></li>
                        <li><a className="hovver_effect" href="https://api.whatsapp.com/send?phone=5551999134363" target='_blank' rel="noreferrer">Orçamento</a></li>
                    </ul>
                </nav>
                <nav className="menu-mobile" onClick={ handleOpenMenu}>
                {menu && <ul onClick={(e) => e.stopPropagation()}>
                        <li><Link to='/' onClick={handleOpenMenu}>Home</Link></li>
                        <li><Link to='/produtos' onClick={handleOpenMenu}>Produtos</Link></li>
                        <li><Link to='/sobre' onClick={handleOpenMenu}>Sobre nós</Link></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5551999134363" target='_blank' rel="noreferrer">Orçamento</a></li>
                    </ul>}
                </nav>
                
            </div>
        </header>
    )
}


export default Navbar