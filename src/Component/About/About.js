import React from 'react';
import './about.css';
import img from '../img/my.jpg'

const About = () => {
    return (
        <div className=' py-5 container'>
            
            <div className='about-me '>
                <div className='text-center p-4 d-flex align-items-center'>
                   <div className='text-css'>
                    <h2 className='py-4'>I Am <span className='habib-css'> Md Habib</span></h2>
                    <p>Now I am a student of Green university of Bangladesh .I am also a student of  Programming-hero. so as student of cse I have a goal and that is to be a programmer of Google.now I am Learinig web development at first .then  I will move on Programming</p></div>
                </div>
                <div className='text-center p-5 mx-2'>

                    <div className=' custom-img-css'>

                    <img width='350px' src={img} alt="" />
                    
                    </div>

                </div>
            </div>
            <div className='text-center goal-css  my-5'>
                <h3 className='py-3'>How I will work hard to achieve your goal.

               </h3>
               <div className='my-3 text-css py-5'>
                   <p >
                   Develop a positive, “glass-half-full” approach to every aspect of my life, including my thoughts about how i will achieve my goals. Read inspirational books, hang out with other motivated people, and believe in my own abilities. Work on my own attitude at every opportunity.Aslo practice everyday with smart time manegement.
                   </p>
               </div>
            </div>
            
        </div>
    );
};

export default About;