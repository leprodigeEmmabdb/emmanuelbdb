
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
import AOS from 'aos';
import Aos from 'aos';



function App() {
  AOS.init();
  
  return (
    <div className='container'>
      <div className="App">
      <Navbar />
      </div>
      <div className="body">
        <div data-aos="fade-up"> <Banner /></div>
        <div data-aos="fade-right" data-aos-delay="100"><Skills/></div>
        <div data-aos="fade-left" data-aos-delay="50" ><About /></div>
       
      {/* 
      
      
      <FocusPoint/>
      <Bulk/>
      <Contact/> */}
      </div>
      
    
    
    </div>
  );
}

export default App;
