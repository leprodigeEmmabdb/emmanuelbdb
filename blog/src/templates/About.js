import education from '../assets/education.jpg';
const placeName=['Université de Kinshasa ','RÉV.KIM','GOOGLE ATELIER NUMERIQUE','Orange Digital Center']
    const level=['L3 lMD, Departement de Math-Info',"Diplômé d'Etat",'Certificat de Participation','encours . . .']
const About=()=>{
    return(
        <div className="row featurette my-3" id='About'>
                 <hr className="featurette-divider"></hr>

        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">EDUCATION <span className="text-muted">/formations suivies</span></h2>
           <div className=" row my-5">
           <div className="col-lg-5 fs-5 fw-bold">
           {
                placeName.map((e)=>(<div className='p-2 border-bottom ' key={e}>{e}</div>))
              }
           </div>
            <div className="col-lg-7 fs-5 text-secondary ">
              {
                level.map((e)=>(<div className="p-2 mb-3 text-bold " key={e}> {e}</div>))
              }
            </div>
           </div>
        </div>
        <div className="col-md-5 my-3">
          {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
          <img src={education} alt='skillpicture' className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="320" height="350"/>

        </div>
        
      </div>
    )
}
export default About;

