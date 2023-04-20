const outils=['logo1','logo2','logo3','logo4']
const Footer=()=>{
    return(
      <div>
        <footer className="py-5">

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#">Logo1</a></li>
              <li className="ms-3"><a className="link-dark" href="#">Logo2</a></li>
              <li className="ms-3"><a className="link-dark" href="#">Logo3</a></li>
            </ul>
          </div>
        </footer>
      </div>
   
    );
}
export default Footer;