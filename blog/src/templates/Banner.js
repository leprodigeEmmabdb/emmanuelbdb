import profileIcon from'../assets/profileIcon.png';
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import '../assets/css/monstyle.css';

import { Typed } from "react-typed";




const Banner=(event)=>{
    const handleTyped=()=>{
        return (
            <div>
                <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
                <br/>
 
                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
            </div>
        )
    }

    const handleClickIcon=(event)=>{
        // event.target+="bonjour"
        console.log(event.target.innerHTML)
    }

    return(
        
        <div className="d-flex container justify-content-between flex-wrap " id='Banner'>
            <div className='col-lg-6 col-8 my-5 col-sm '>
                <h1>Bienvenu(e) sur mon blog</h1>
                <p className='fs-5'>Je suis <span className='navbar-brand text-secondary fw-bold fs-4' >Emmanuel Badibanga</span>, Informaticien de formation et passionné  des nouvelles technologies</p>
                <p>Je suis  developper <handleTyped/></p>
                <div className='col-lg-8 col-8 fs-4 m-4'>
                    <div className="mx-auto p-2 rounded-4 bg-success col-8 my-3 text-center colg-lg-6 text-light fw-bolder">
                    Naviguez
                    </div>
                    <div className="row col-lg-12  px-8" id='mesliens'>
                        <div className=" rounded-circle m-1 py-3 d-flex justify-content-center align-content-center text-center col" id='call'><BsFillTelephoneFill cursor="pointer"/></div>
                        <div className=" rounded-circle m-1 py-3 d-flex justify-content-center align-content-center text-center col" id='facebook'><FaFacebookF cursor="pointer"/></div>
                        <div className=" rounded-circle m-1 py-3 d-flex justify-content-center align-content-center text-center col" id='linkdin'><FaLinkedinIn cursor="pointer"/></div>
                        <div className=" rounded-circle m-1 py-3 d-flex justify-content-center align-content-center text-center col" id='instagram'><FiInstagram cursor="pointer"/></div>
                        <div className=" rounded-circle m-1 py-3 d-flex justify-content-center align-content-center text-center col" id='github'><BsGithub cursor="pointer"/></div>

                    </div>
       
             
                
                </div>
            </div>
            <div className=' offset-1 col-lg-5 col-10  rounded-circle  'id='blocProfile'  >
                <div className="rounded-circle bg-light col-lg-12  " id='logoProfile' >
                <img src={profileIcon} alt="" className='image-fluide ' width={345} height={400}/>
                </div>
            </div>
        </div>
    )
}
export default Banner;