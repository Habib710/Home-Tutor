import React, { useEffect, useState } from 'react';
import MyClass from '../myclass/MyClass';
import './Header.css'

const Home = () => {


    const [myclass,setmyclass]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setmyclass(data))
    },[])



    return (
        <div >
            <div className='background'>

           
            <div className='custom-baner-css'>
                <div className='text-center p-4'>
                    <h1 className='text-css-heading'>
                        Welcome to Home Tutor
                    </h1>
                    <h4>Find your Best service,and Explore your learning.</h4>
                    <p>Are you looking for private house teacher,Tutor for primary, secondary, or university level students is available here</p>
                </div>
                </div>


            </div>
            <div className=' text-center my-5 p-lg-5 p-sm-3 mx-sm-2'>
                <h2 className='div-heading'>My services</h2>
                <div className='myclass my-5'>
                    {
                        myclass.map(myservice=><MyClass key={myservice.id} data={myservice}></MyClass>)
                    }

                    
                </div>
            </div>
        </div>
    );
};

export default Home;