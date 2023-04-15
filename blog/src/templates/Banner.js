import profil from'../assets/profil.jpg';
const Banner=()=>{
    return(
        <div class="">
            <div className='contexte'>
                <h1>Bienvenu(e) sur mon blog</h1>
                <p>Lorem ipsum dolor, ibus neque ab voluptas dolorem corrupti? Reprehenderit natus blanditiis corporis labore aliquid dolor fugit provident? Iste magni illo non omnis vel porro culpa, magnam nihil sed soluta.
                Eos sunt ex impedit iusto quis assumenda laborum officiis in officia illo iste et delectus aperiam nam, omnis corporis molestiae est fugit magnam hic sequi veniam quibusdam facere debitis. Dicta.</p>
                <p>Je suis un developper <span >text</span></p>
                <a href="tel:+243826222466">Appeler</a>
            </div>
            <div className='logo'>
                <img src={profil} alt=""/>
            </div>
        </div>
    )
}
export default Banner;