import profileIcon from'../assets/profileIcon.png';
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import '../assets/css/monstyle.css';
import { setState } from 'react';
import { Route } from 'react-router';
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
        
        <div className="d-flex my-5 container justify-content-between flex-wrap p-3 " id='Banner'>
            <div className='col-lg-6 col-8 my-5 col-sm '>
                <h1>Bienvenu(e) sur mon blog</h1>
                <p className='fs-5'>Je suis <span className='navbar-brand text-secondary fw-bold fs-4' >Emmanuel Badibanga</span>, Informaticien de formation et passionné  des nouvelles technologies</p>
                <p>Je suis  developper <handleTyped/></p>
                <div className='col-lg-8 col-8 fs-4 m-4'>
                    <div className="mx-auto p-3 rounded-4 bg-success col-8 my-3 text-center colg-lg-8 text-light fw-bold">
                    Naviguez
                    </div>
                    <div className="row col-lg-12">
                        <div className="border rounded-circle m-1 py-2 text-center col"><BsFillTelephoneFill cursor="pointer"/></div>
                        <div className="border rounded-circle m-1 py-2 text-center col"><FaFacebookF color='blue' cursor="pointer"/></div>
                        <div className="border rounded-circle m-1 py-2 text-center col"><FaLinkedinIn color='red'cursor="pointer"/></div>
                        <div className="border rounded-circle m-1 py-2 text-center col"><FiInstagram color='yellow'cursor="pointer"/></div>
                        <div className="border rounded-circle m-1 py-2 text-center col"><BsGithub cursor="pointer"/></div>

                    </div>
       
             
                
                </div>
            </div>
            <div className=' offset-1 col-lg-5 col-10  rounded-circle bg-warning border' >
                <img src={profileIcon} alt="" className='image-fluide ' width={400} height={450}/>
            </div>
        </div>
    )
}
export default Banner;