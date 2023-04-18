import App from '../App.css';
import style from'../assets/style.css';
const Navbar=()=>{
    return (
        <nav className='navbar justify-content-between'>
            <div className='navbar nav-brand text-danger fs-4 fw-bold'><a href='' className='nav-link'>Mon LOGO</a></div>
            <ul className='navbar nav  '>
                <li className="nav-item"><a href="#" className="nav-link active">Accueil</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">Compétences</a></li>
                <li  className="nav-item"><a href="#" className="nav-link active">Apropos</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">Centre d'Interet</a></li>
                <li  className="nav-item"><a href="#" className="nav-link active">Me joindre</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;