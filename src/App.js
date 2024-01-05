






//components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Container from './components/container';

import {Outlet} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">

      <Navbar />
      <ScrollToTop/>
      <Container>
      <Outlet/>

      </Container>
     
      <Footer/>
     

    




    </div>




  );
}

export default App;
