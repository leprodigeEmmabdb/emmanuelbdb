const Skills=()=>{
    const skills=['Développer Front-End ','Développer Back-End ','DÉVELOPPEUR MOBILE','Travailler  en équipe','Utilisation des outils des travaux en equipe (GIT,GITHUB,GITLAB)']
    const skillbar=[0.6,0.7,0.9,0.6,0.8,0.6]


    return(
        <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">COMPETENCES<span class="text-muted"> /technologies</span></h2>
        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
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
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
      <hr class="featurette-divider"></hr>
    </div>
    )
}



export default Skills;

