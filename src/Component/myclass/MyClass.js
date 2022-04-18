import React from 'react';
import { Link } from 'react-router-dom';

import './Myclass.css'

const MyClass = (props) => {

    const {name,picture,balance,about}=props.data;
    return (
        <div className='mysevices '>
            <div className='mb-3'>
                <img width='100%' height='290px' src={picture} alt="" />
            </div>
            <h2>{name}</h2>
            <h5>Tution : {balance}</h5>
            <p className='py-4'>{about}</p>
            <div>
                <Link to='/checkout'> 
                <button  className='btns my-2'>
                 Check Out  </button>
                </Link>

            
            
            </div>
            
        </div>
    );
};

export default MyClass;