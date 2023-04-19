const outils=['logo1','logo2','logo3','logo4']
const Footer=()=>{
    return(
      <div>
        <footer class="py-5">

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#">Logo1</a></li>
              <li class="ms-3"><a class="link-dark" href="#">Logo2</a></li>
              <li class="ms-3"><a class="link-dark" href="#">Logo3</a></li>
            </ul>
          </div>
        </footer>
      </div>
   
    );
}
export default Footer;