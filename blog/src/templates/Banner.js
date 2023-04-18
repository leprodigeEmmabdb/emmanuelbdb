import profil from'../assets/profil.jpg';
import { useState } from 'react';


const Banner=()=>{

    return(
        <div className="d-flex my-5 container justify-content-between">
            <div className='col-lg-6 col-6 my-5'>
                <h1>Bienvenu(e) sur mon blog</h1>
                <p>Lorem ipsum dolor, ibus neque ab voluptas dolorem corrupti? Reprehenderit natus blanditiis corporis labore aliquid dolor fugit provident? Iste magni illo non omnis vel porro culpa, magnam nihil sed soluta.
                Eos sunt ex impedit iusto quis assumenda laborum officiis in officia illo iste et delectus aperiam nam, omnis corporis molestiae est fugit magnam hic sequi veniam quibusdam facere debitis. Dicta.</p>
                <p>Je suis  developper <span >text</span></p>
                <div className='border-1 p-3 rounded-4 bg-success col-3 colg-lg-5'>
                <a href="tel:+243826222466" className='nav-link' id='call' >Appeler icon</a>
                </div>
            </div>
            <div className=' offset-1 col-lg-5 col-6 border-1 ' >
                <img src={profil} alt="" className='rounded-circle fluide' width={500} height={500}/>
            </div>
        </div>
    )
}
export default Banner;