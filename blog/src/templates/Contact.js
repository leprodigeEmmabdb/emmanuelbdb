import {MdHomeWork} from 'react-icons/md'
import {BsFillTelephoneFill} from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
const Contact=()=>{
    return(
        <div className=" px-4" id='Contact'>
            <hr className="featurette-divider"></hr>
            <div className="h2 text-center py-4 ">Contacts</div>
            <div className="row form-floating">
                <div className="col-lg-6 py-3 infoline">
                    <div className='bg-success text-light rounded-pill px-4'>
                        <h2><MdHomeWork /> Domicile</h2>
                        <p className='mx-5'>Av. conseil de ville 29 </p>
                        
                    </div>
                    <div className='bg-success text-light rounded-pill px-4'> 
                        <h2 ><BsFillTelephoneFill/> Appel</h2>
                        <p className='mx-5'>+243 826 222 466</p>
                    </div>
                    <div className='bg-success text-light rounded-pill px-4'>
                        <h2><MdAttachEmail/> Email</h2>
                        <p className='mx-5'>emmanuelbadibanga250@gmail.com</p>
                    </div>
                    <div className='bg-success text-light rounded-pill px-4'>
                        <h2><MdAttachEmail/> Email</h2>
                        <p className='mx-5'>emmanuelbadibanga250@gmail.com</p>
                    </div>
                </div>
                <div className="form-floating col-lg-6 px-3 ">
                    <div className='input-group has-validation mb-3'>
                        <span className='input-group-text'>@</span>
                        <div className="form-floating" >
                            <input className='form-control' type='email' id='floatingInputGoup1' placeholder='votre email'/>
                            <label htmlFor="floatingInputGoup1">email</label>
                        </div>
        
                    </div>
                    <div className='input-group has-validation mb-3'>
                        
                        <div className="form-floating " >
                            <input className='form-control b' type='text' id='floatingInputGoup2' placeholder='Objet du message'/>
                            <label htmlFor="floatingInputGoup2">Objet</label>
                        </div>
        
                    </div>
                    <div className='mb-3'>
                        <textarea className='form-control p-3'  name="msg" id="" cols="71" rows="5" placeholder='message...'></textarea>
                    </div>
                    <div className="text-end">
                        <a className='btn-success btn col-lg-4 p-3' href="mailto:emmanuelbadibanga250@gmail.com?subject={objet}&body={message}">Envoyer</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;