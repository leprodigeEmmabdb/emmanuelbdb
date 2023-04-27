
import './assets/css/monstyle.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Bulk from './templates/Bulk';
import Skills from './templates/Skills';
import About from './templates/About';
import FocusPoint from './templates/FocusPoint';
import './assets/css/bootstrap.min.css';
<<<<<<< HEAD
import Footer from './templates/Footer';
=======
import Contact from './templates/Contact';
import  "./assets/css/monstyle.css";
import Bulk from './templates/Bulk';

>>>>>>> main


function App() {
  return (
<<<<<<< HEAD
    <body className='container '>
      <div className="App">
      <Navbar />
      </div>
    <Banner/>
    
    <About />
    <Skills/> 
    <FocusPoint/>
    <Bulk/>
    <Footer/>
    </body>
=======
    <div className='container'>
      <div className="App">
      <Navbar />
      </div>
      <div className="body">
      <Banner/>
      <Skills/>
      <About />
      <FocusPoint/>
      <Bulk/>
      <Contact/>
      </div>
      
    
    
    </div>
>>>>>>> main
  );
}

export default App;
