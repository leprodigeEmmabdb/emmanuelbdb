import '../assets/css/monstyle.css';
import logo from '../assets/logo.png'
const Navbar=()=>{
    return (
        <nav className='navbar justify-content-between navbar-expand-lg  ' >
            <div className='navbar  col-lg-4' id='iconeBloc'><a href='' className='nav-link' ><img src={logo} alt="" width={350} height={120} className='rounded-pill' /></a></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <ul className='collapse navbar-collapse navbar nav col-lg-1 offset-1 ' id='navlink'>
                <li className="nav-item "><a href="#" className="nav-link ">Accueil</a></li>
                <li className="nav-item"><a href="#Skills" className="nav-link ">Compétences</a></li>
                <li  className="nav-item"><a href="#About" className="nav-link ">Apropos</a></li>
                <li className="nav-item"><a href="#FocusPoint" className="nav-link ">Centre d'Interet</a></li>
                <li  className="nav-item"><a href="#Contact" className="nav-link ">Me joindre</a></li>
            </ul>
            
        </nav>
    )
}
export default Navbar;