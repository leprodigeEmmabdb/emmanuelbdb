import skill from '../assets/skill.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills=()=>{
    const skills=['Développer Front-End ','Développer Back-End ','DÉVELOPPEUR MOBILE','Travailler  en équipe','Utilisation des outils des travaux en equipe (GIT,GITHUB,GITLAB)']
    const skillbar=[60,70,90,50,80]


    return(
    <div className="row featurette" id='Skills'>
      
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">COMPETENCES<span className="text-muted"> /technologies</span></h2>
        <p className="lead fs-5">En tant que développeur, je maîtrise les technologies les plus récentes(ci-dessous) et suis capable de concevoir des solutions innovantes pour répondre aux besoins relatifs à une société.</p>
        <div className="row col-lg-12">
           <div className="col-lg-6 fs-5 text-secondary fw-bold ">
           {
                skills.map((e)=>(<div className='p-2 border-bottom' key={e}>{e}</div>))
              }
           </div>
           <div className="col-lg-6">
            {
              skillbar.map((level)=>(
                <div  className='p-2  mb-3' key={level}><ProgressBar animated variant='success' label={`${level}%`} now={level}/></div>
              ))
            }
           </div>
            
          
           </div>
      </div>
      <div className="col-md-5 order-md-1">
        {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
        <img src={skill} alt='skillpicture' className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="500"/>
      </div>
      <hr className="featurette-divider"></hr>
    </div>
    )
}



export default Skills;

