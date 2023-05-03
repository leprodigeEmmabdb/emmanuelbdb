
import rectLogo from'../assets/rectLogo.png';
import flutterLogo from'../assets/flutterLogo.png';
// import djangoLogo from'../assets/djangoLogo.png';
import llogoDjango from'../assets/llogoDjango.png';


const Bulk=()=>{
    return(
        <div className="row my-5">
            <div className="col-lg-4">
                <div className="logo">
                    <img src={rectLogo}  width="150px" className=" rounded-circle py-5" />
                </div>
                <h2 className="fw-normal">React js</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <div className="logo ">
                    <img src={llogoDjango}  alt="" width="150px" className=" rounded-circle py-4"/>
                </div>
                <h2 className="fw-normal">Django</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <div className="logo ">
                    <img src={flutterLogo} alt=""   width="150px" className="  rounded-circle py-5"/></div>
                    <h2 className="fw-normal">Flutter</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
        </div>
    );
}
export default Bulk;