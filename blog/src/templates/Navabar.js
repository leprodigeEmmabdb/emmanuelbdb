import App from '../App.css';
import style from'../assets/style.css';
const Navbar=()=>{
    return (
        <nav className='navbar justify-content-between navbar-expand-lg'>
            <div className='navbar nav-brand  text-danger fs-4 fw-bold col-sm'><a href='' className='nav-link'>Mon LOGO</a></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <ul className='collapse navbar-collapse navbar nav col-lg-1 ' id='navbarSupportedContent'>
                <li className="nav-item"><a href="#Banner" className="nav-link active">Accueil</a></li>
                <li className="nav-item"><a href="#Skills" className="nav-link ">Compétences</a></li>
                <li  className="nav-item"><a href="#About" className="nav-link ">Apropos</a></li>
                <li className="nav-item"><a href="#FocusPoint" className="nav-link ">Centre d'Interet</a></li>
                <li  className="nav-item"><a href="#Contact" className="nav-link ">Me joindre</a></li>
            </ul>
            
        </nav>
    )
}
export default Navbar;