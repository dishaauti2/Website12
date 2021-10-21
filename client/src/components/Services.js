import React from 'react'
import mooddisorder from './images/moodDisorder.jpg'
import Angermanagement from './images/Angermanagement.jpg'
import Gentictesting from './images/Gentictesting.jpeg'
import Alcoholabuse from './images/Alcoholabuse.jpg'
import Depression from './images/Depression.jpg'
import Anxiety from './images/Anxiety.jpg'
import PrescriptionDrugAbuse from './images/PrescriptionDrugAbuse.jpg'
import OCD from './images/OCD.jpg'

import Navbar from './Navbar'


export default function Services() {
     <span class="border border-info"></span>
    let imagedin = {
        maxHeight: '200px'
        

    }
    return (

        <div>
            <Navbar />
            {/* <div className="row row-cols-1 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={mooddisorder} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Mood Disorders</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-2 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={Angermanagement} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Anger Management</button>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row row-cols-3 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={Gentictesting} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Genetic Testing</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-4 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={Alcoholabuse} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Alcohol Abuse</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={Depression} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Depression</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={Anxiety} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Anxiety</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={PrescriptionDrugAbuse} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">Prescription Drug Abuse</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 p-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-center">
                        <img src={OCD} className="card-img-top img-responsive" alt="..." />
                        <div className="card-body d-grid">
                            <button type="button" className="btn btn-primary text-centre">OCD</button>

                        </div>
                    </div>
                </div> */}
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className="card text-center">
                            <img src={mooddisorder} className="card-img-top img-responsive" alt="..." style={imagedin} />
                            <div className="card-body d-grid">
                                <button type="button" className="btn btn-info text-centre">Mood Disorders</button>

                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div className="card text-center">
                            <img src={Angermanagement} className="card-img-top img-responsive" alt="..." style={imagedin} />
                            <div className="card-body d-grid">
                                <button type="button" className="btn btn-info text-centre">Anger Management</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className="card text-center">
                            <img src={Gentictesting} className="card-img-top img-responsive" alt="..." style={imagedin} />
                            <div className="card-body d-grid">
                                <button type="button" className="btn btn-info text-centre">Gentic Testing</button>

                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div className="card text-center">
                            <img src={Alcoholabuse} className="card-img-top img-responsive" alt="..." style={imagedin} />
                            <div className="card-body d-grid">
                                <button type="button" className="btn btn-info text-centre">Alcohol Abuse</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className="card text-center">
                            <img src={PrescriptionDrugAbuse} className="card-img-top img-responsive" alt="..." style={imagedin} />
                            <div className="card-body d-grid">
                                <button type="button" className="btn btn-info text-centre">Prescription Drug Abuse</button>

                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div className="card text-center">
                            <img src={OCD} className="card-img-top img-responsive" alt="..." style={imagedin} />
                            <div className="card-body d-grid">
                                <button type="button" className="btn btn-info text-centre">OCD</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
                </div>

                    

      





    )
}