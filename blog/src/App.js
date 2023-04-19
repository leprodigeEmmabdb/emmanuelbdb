import logo from './logo.svg';
import './App.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Bulk from './templates/Bulk';
import Skills from './templates/Skills';
import About from './templates/About';
import FocusPoint from './templates/FocusPoint';
import './assets/css/bootstrap.min.css';
import Footer from './templates/Footer';


function App() {
  return (
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
  );
}

export default App;
