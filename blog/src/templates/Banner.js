import profileIcon from'../assets/profileIcon.png';
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import '../assets/css/monstyle.css';
import { setState } from 'react';




const Banner=(event)=>{

    const handleClickIcon=(event)=>{
        event.target.innerHTML+="<p>BON</p>";
        // event.target+="bonjour"
        console.log()
    }

    return(
        
        <div className="d-flex my-5 container justify-content-between flex-wrap p-3 ">
            <div className='col-lg-6 col-8 my-5 col-sm '>
                <h1>Bienvenu(e) sur mon blog</h1>
                <p className='fs-5'>Je suis <span className='navbar-brand text-secondary fw-bold fs-4' >Emmanuel Badibanga</span>, Informaticien de formation et  des nouvelles technologies</p>
                <p>Je suis  developper <span >text</span></p>
                <div className='col-lg-8 col-8 fs-4'>
                <a href="tel:+243826222466" className=' mx-auto p-3 rounded-4 bg-success col-8 my-3 text-center colg-lg-8 nav-link' id='call' >Naviguez</a>
                <ul className='d-flex mx-auto'>
                       <li className='nav border rounded-circle mx-auto p-3 'onMouseEnter={handleClickIcon}><BsFillTelephoneFill cursor="pointer"/></li>
                       <li className='nav border rounded-circle mx-auto p-3' onClick={handleClickIcon}><FaFacebookF color='blue' cursor="pointer"/></li>
                       <li className='nav border rounded-circle mx-auto p-3' onClick={handleClickIcon}><FaLinkedinIn color='red'cursor="pointer"/></li>
                       <li className='nav border rounded-circle mx-auto p-3' onClick={handleClickIcon}><FiInstagram color='yellow'cursor="pointer"/></li>
                       <li className='nav border rounded-circle mx-auto p-3' onClick={handleClickIcon}><BsGithub cursor="pointer"/></li>
             </ul>
             
                
                </div>
            </div>
            <div className=' offset-1 col-lg-5 col-10  rounded-circle bg-warning border' >
                <img src={profileIcon} alt="" className='image-fluide ' width={400} height={450}/>
            </div>
        </div>
    )
}
export default Banner;