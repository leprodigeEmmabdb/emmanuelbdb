const placeName=['Université (pas de diplôme)','RÉV.KIM','GOOGLE ATELIER NUMERIQUE','Orange Digital Center']
    const level=['L3 lMD, Departement de Math-Info',"Diplôme d'Etat",'Certificat de Participation','encours . . .']
const About=()=>{
    return(
        <div className="row featurette">
           
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">EDUCATION <span className="text-muted">/formation suivies</span></h2>
           <div classNameName=" d-flex mt-4">
           <ul >
              {
                placeName.map((e)=>(<li>{e}</li>))
              }
            </ul>
            <ul>
              {
                level.map((e)=>(<li classNameName="nav">: {e}</li>))
              }
            </ul>
           </div>
        </div>
        <div className="col-md-5">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
         
        </div>
        
      </div>
    )
}
export default About;

