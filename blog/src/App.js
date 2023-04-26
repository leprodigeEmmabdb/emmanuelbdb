
import './assets/css/monstyle.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Skills from './templates/Skills';
import About from './templates/About';
import FocusPoint from './templates/FocusPoint';
import './assets/css/bootstrap.min.css';
import Contact from './templates/Contact';



function App() {
  return (
    <div className='container'>
      <div className="App">
      <Navbar />
      </div>
      <Banner/>
      {/* <Skills/>
      <About />
      <FocusPoint/>
      <Contact/> */}
      
    
    
    </div>
  );
}

export default App;
