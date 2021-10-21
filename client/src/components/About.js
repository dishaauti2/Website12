import React from 'react'
import Navbar from './Navbar'
import aboutus from './images/AboutUS.jpg';
import './Login.css'

export default function About() {
    return (
        <div>
            <Navbar />

           <div className="carousel-inner">
           
                <div className="carousel-item active">
                    <img src={aboutus} className="d-block w-50" alt="..." />
                    
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-5 mx-auto p-0">
                        <div className="card">
                            <div className="login-box">
                                <div className="login-snip">


                                    <div className="login-space" >
                                        
                                        
                                        <h1>Providing Excellent Care</h1>
                                        <h2> Learn More About Us Today!</h2>

                                        <p>
                                            Our website provides a full range of psychiatric medication treatment services for adults.
                                            We understand what you need in order to live your very best life. Don’t let your troubles slow you down.
                                            We are here to help you find solutions and treatments for your conditions.
                                            We will work with you to gain all the information need to guide you in the right direction.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}
