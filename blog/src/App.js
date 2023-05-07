
import './assets/css/monstyle.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Skills from './templates/Skills';
import About from './templates/About';
import FocusPoint from './templates/FocusPoint';
import './assets/css/bootstrap.min.css';
import Contact from './templates/Contact';
import  "./assets/css/monstyle.css";
import Bulk from './templates/Bulk';
import Aos from 'aos';



function App() {
  Aos.init();
  
  return (
    <div className='container'>
      <div className="App">
      <Navbar />
      </div>
      <div className="body">
        <div data-aos="fade-down"> <Banner /></div>
        <div data-aos="fade-up-right" data-aos-delay="100"><Skills/></div>
        <div data-aos="fade-up-left" data-aos-delay="50" ><About /></div>
        <div data-aos="flip-left"><FocusPoint/></div>
        <div data-aos="fade-up-left"> <Bulk/></div>
        <div data-aos="fade-up-left"> <Contact/></div>
      </div>
      
    
    
    </div>
  );
}

export default App;
