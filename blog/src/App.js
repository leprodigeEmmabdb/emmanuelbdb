
import './assets/css/monstyle.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Skills from './templates/Skills';
import About from './templates/About';
import FocusPoint from './templates/FocusPoint';
import './assets/css/bootstrap.min.css';
import Contact from './templates/Contact';
import ProgressBar from 'react-bootstrap/ProgressBar';


function App() {
  return (
    <div className='container'>
      <div className="App">
      <Navbar />
      </div>
      <Skills/>
    
    {/* 
    <Banner/>
    <About />
    <FocusPoint/>
    <Contact/> */}
    </div>
  );
}

export default App;
