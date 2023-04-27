import activity from '../assets/activity.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

function FocusPoint() {
    const skills = ['Football ', 'Lecture ','Voyage','sport Intellectuels'];
    const skillbar = [90, 60,70,91];


    return (
    <div className="row featurette" id='FocusPoint'>
      <hr className="featurette-divider"></hr>
      <div className="col-md-7 my-5 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">ACTIVITES <span className="text-muted">/préfèrences</span></h2>
        <p className="lead">Je suis une personne passionnée par les activités <small> ci-dessous</small> et je recherche des opportunités qui me permettront de poursuivre cette passion tout en développant mes compétences.”</p>
        <div className=" d-flex justify-content-around mt-4">
           <div className="col-lg-5 fs-5 text-secondary fw-bold">
           {
                skills.map((e)=>(<div className='p-2 border-bottom' key={e}>{e}</div>))
              }
           </div>
            <div className="col-lg-5">
            {
              skillbar.map((level)=>(
                <div  className='p-2  mb-3' key={level}><ProgressBar animated variant='success' label={`${level}%`} now={level}/></div>
              ))
            }
            </div>
           </div>
      </div>
      <div className="col-md-5 my-2 order-md-1" >
        <img src={activity} alt='skillpicture' className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="320" height="500"/>

      </div>
    </div>
   

    );
}



export default FocusPoint;

