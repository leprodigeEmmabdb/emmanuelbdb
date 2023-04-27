<<<<<<< HEAD
function FocusPoint() {
    const skills = ['Football ', 'Lecture '];
    const skillbar = [0.9, 0.6];


    return (
        <div className="row featurette">
            <hr className="featurette-divider"></hr>
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">ACTIVITES <span className="text-muted">préfèrences</span></h2>
        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        <div className=" d-flex justify-content-around mt-4">
           <ul >
              {
                skills.map((e)=>(<li>{e}</li>))
              }
            </ul>
            <ul className="col-5">
              {
                skillbar.map((e)=>(<li className="nav"><progress value={e}/> {e*100}%</li>))
              }
            </ul>
           </div>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
      <hr class="featurette-divider"></hr>
=======
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
>>>>>>> main
    </div>
   

    );
}



export default FocusPoint;

