import profileIcon from'../assets/profileIcon.png';

import { useState } from 'react';
const logo=['logoA','logoB','logoC','logoD']

const Banner=()=>{

    return(
        <div className="d-flex my-5 container justify-content-between">
            <div className='col-lg-6 col-5 my-5'>
                <h1>Bienvenu(e) sur mon blog</h1>
                <p>Je suis <span className='navbar-brand text-secondary fw-bold fs-4' >Emmanuel Badibanga</span>, Informaticien de formation et  des nouvelles technologies</p>
                <p>Je suis  developper <span >text</span></p>
                <div className='text'>
                <a href="tel:+243826222466" className='border-1 p-3 rounded-4 bg-success col-3 colg-lg-5 nav-link' id='call' >Appeler icon</a>
                <ul className='d-flex '>
                    {
                        logo.map((logo)=>(
                            <li className='nav border rounded-circle mx-1'>{logo}</li>
                        ))
                    }
                </ul>
                
                </div>
            </div>
            <div className=' offset-1 col-lg-5 col-6 rounded-circle bg-warning border' >
                <img src={profileIcon} alt="" className='image-fluide ' width={400} height={400}/>
            </div>
        </div>
    )
}
export default Banner;