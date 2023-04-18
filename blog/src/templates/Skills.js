const Skills=()=>{
    const skills=['DÉVELOPPEUR WEB','DÉVELOPPEUR MOBILE','Travailler  en équipe','Utilisation des outils de travils en equipe (GIT,GITHUB,GITLAB)']
    const skillbar=[null,null,null,null]


    return(
        <div>

            <div>
                <h2>Competance</h2>
            <hr></hr>
            <div className="navbar nav justify-content-around" >
                <div>
                    <ul>
                        {skills.map((element) =>(<li className="nav-item text-sencodary fw-bold my-4">{element}</li>))}
                    </ul>
                </div>
            
                <div>
                    <ul >
                        {skillbar.map((element) =>(<li className="nav-item fw-bold my-4"><progress value={element}  />{element*100}%</li>))}
                    </ul>
                </div>
            </div>
            </div>
            
        </div>
    )
}



export default Skills;

