import activity from '../assets/activity.jpg';
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
        {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
        <img src={activity} alt='skillpicture' className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="500"/>

      </div>
      <hr class="featurette-divider"></hr>
    </div>
   

    );
}



export default FocusPoint;

