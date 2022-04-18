import React from 'react';
import './Blog.css'

const Blog = () => {


    return (
        <div className=''>
            <h1 className='py-4 text-center'>Welcome to the Blog </h1>

            <div className='container'>
                <div className='table-css text-center mt-4  '>
                    <h3>1. Difference between authorization and authentication </h3>
                    <div className='text-center my-5 container'>
                   <table className='m-auto'>
                       <tr>
                           <th>Authorization </th>
                           <th>Authentication</th>
                       </tr>
                       <tr>
                           <td>
                           Authorization determines what resources a user can access.

                           </td>
                           <td>
                           Authentication verifies who the user is.
                           </td>
                       </tr>
                       <tr><td>Authorization works through settings that are implemented and maintained by the organization.</td>
                       <td>
                       Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                       </td>
                       
                       
                       </tr>
                       <tr>
                           <td>
                           Authorization isn’t visible to or changeable by the user.

                           </td>
                           <td>Authentication is visible to and partially changeable by the user.</td>
                       </tr>
                   </table>
                   </div>


                </div>
            </div>
            {/*.............. 2.............. */}
            <div className='container'>
            <div className='table-css text-center my-5  '>
                <h3 className=''>2. Why am I using firebase?</h3>
                <div className='text-center my-5 container'>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience</p>
                    <p>The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.</p>


                </div>
                <h4> What other options do i have to implement authentication?</h4>
                <div>
                    <h6>1. Password-based authentication</h6>
                    <h6>2. Multi-factor authentication</h6>
                    <h6>3. Certificate-based authentication</h6>
                    <h6>4. Biometric authentication</h6>
                </div>




            </div>

            </div>
            
            <div className='container'>
            <div className='table-css text-center my-5  '>
                <h3 className=''>3.What other services does firebase provide other than authentication</h3>
                <div className='text-center my-5 container'>
                    <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.</p>
                    <h6>Analytics</h6>
                    <h6>Cloud messaging </h6>
                    <h6>Realtime database</h6>
                    <h6>Performance</h6>
                    <h6>Test lab – Firebase Test Lab</h6>
                    <h6>Create onboarding flows – developers can give users a quick, intuitive sign-in process using Firebase Authentication. They allow users to sign into their apps via their Google, Twitter, Facebook or GitHub accounts in less than five minutes. Developers can also track each step of their onboarding flows to enhance the user experience. Additionally,</h6>


                </div>




            </div>

            </div>
            
        </div>
    );
};

export default Blog;

