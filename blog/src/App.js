import logo from './logo.svg';
import './App.css';
import Navbar from './templates/Navabar';
import Banner from './templates/Banner';
import Skills from './templates/Skills';
import About from './templates/About';
import FocusPoint from './templates/FocusPoint';
import './assets/css/bootstrap.min.css';

function App() {
  return (
    <body className='container'>
      <div className="App">
      <Navbar />
      </div>
    <Banner/>
    <Skills/>
    <About />
    <FocusPoint/>
    </body>
  );
}

export default App;
