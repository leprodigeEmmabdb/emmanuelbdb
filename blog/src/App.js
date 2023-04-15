import logo from './logo.svg';
import './App.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Skills from './templates/Skills';
import About from './templates/About';
import CentreInteret from './templates/CentreInteret';

function App() {
  return (
    <body>
      <div className="App">
      <Navbar />
      </div>
    <Banner/>
    <Skills/>
    <About />
 
    <CentreInteret/>
    </body>
  );
}

export default App;
