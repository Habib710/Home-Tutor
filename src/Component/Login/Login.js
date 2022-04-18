import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock,faKey,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import img from '../img/google.png';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';


const Login = () => {
    const [email,setemail]=useState([]);
    const [password,setpassword]=useState([]);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle] = useSignInWithGoogle(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
      const [error1,seterror1]=useState([])



    const naviget=useNavigate();


    const hendlemai=(event)=>{
        const inputemail=event.target.value;
        if(inputemail.length<1){
            return seterror1("plz input your Email")
        }
        if(inputemail.length>1){
            seterror1('')
        }
        setemail(inputemail);

    }
    const hendlepassword1=event=>{
        const pass1=event.target.value;
        setpassword(pass1);
    }

    const login=event=>{
        event.preventDefault()

        signInWithEmailAndPassword(email, password)
    }
    const googlesingin=()=>{
        signInWithGoogle()

    }
    
    if(user){
        naviget('/home');
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='root-div'>
            <div className='form-div'>
               <h3 className='text-center pt-4'>Login</h3>
             
         <form className='form-css '>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Name"><FontAwesomeIcon icon={faEnvelope}/></label>
             
             
             <input onBlur={hendlemai}  type="email" placeholder= ' Your Email*' required/></div>
            
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Password"><FontAwesomeIcon icon={faLock}/></label>
             <br />
             <input onBlur={hendlepassword1} type="password" placeholder='Your Password*' required/>
             
             
             
             </div>
             {
                 error1? <p style={{color:'red',fontSize:'16px',fontWeight:'bold'}}>{error1}</p>:''
             }
               {
                     error?  <p style={{color:'red',fontSize:'16px',fontWeight:'bold'}}>{error.message}</p>:''
                 }
             <br />
            
             
             
             <button onClick={login} className='btn-css mb-2 '><FontAwesomeIcon icon={faKey}/> Login</button>
             <br />
             <div  >
                 
             <p  className='text-left'>New to our website?  <Link className='text' to='/singup'>Sing up now</Link></p>
             </div>


             <div className='d-flex align-items-center justify-content-center'>
                 <p>Forget password? </p>
                 <button className='forget-btn' onClick={async () => {
            await sendPasswordResetEmail(email);
            toast('Sent email');
            }}>Reset password</button>
             <ToastContainer />


             </div>
             
             
         </form>
         <div className='d-flex align-items-center justify-content-center '>
             <div className='custom-or'></div>

             <p className='px-2 mt-2'>or</p>
             <div className='custom-or'></div>
         </div>

         <div >
         <button onClick={googlesingin} className='btn-google mb-5 mt-2'> <img className='mb-1' width='20px' src={img} alt="" />  Google sing in</button>
         <br />
         
         
         </div>
        
         </div>
         
         
        </div>
    );
};

export default Login;