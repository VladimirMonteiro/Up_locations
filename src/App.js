

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'




//components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


//pages
import Home from './pages/Home';
import Products from './pages/Products';
import Sobre from './pages/Sobre';



function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/produtos' element= {<Products/>} />
        <Route path='/sobre' element = {<Sobre/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
