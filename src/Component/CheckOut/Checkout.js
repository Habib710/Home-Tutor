import { faAddressBook, faCheckCircle, faEnvelope,   faPen,  faPenNib, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

import './Checkout.css';


const Checkout = () => {
    

   const booking=event=>{
    event.preventDefault(); 

       alert("Your booking confirm")
 
   }
  

    return (
        <div className='checkout-css '>
           <div className='w-100 text-center'>
               <h1>Seleted Class/Program</h1>


           </div>


           <div  className='w-100 p-3 m-5 register-css'>
               <h3 className='text-center'>Register to BooKing Class</h3>
                
         <form  className='form-css '>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Name"><FontAwesomeIcon icon={faPenNib}/></label>
             <input  type="text" placeholder= ' Your Name*' />
             </div>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope}/></label>
             <input  type="email" placeholder= ' Your Email*'  />
             </div>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="number"><FontAwesomeIcon icon={faPhone}/></label>
             <input  type="number" placeholder= ' Your Phone Number*'  />
             </div>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="email"><FontAwesomeIcon icon={faAddressBook}/></label>
             <input  type="text" placeholder= ' Your Adress*'  />
             </div>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="text"><FontAwesomeIcon icon={faPen}/></label>
             <input  type="text" placeholder= ' Your Comments'  />
             </div>
             <button onClick={booking} className='btn-css  py-2 my-4'><FontAwesomeIcon icon={faCheckCircle}/> Booking Now</button>

            
             




               </form>
           </div>

        </div>
    );
};

export default Checkout;