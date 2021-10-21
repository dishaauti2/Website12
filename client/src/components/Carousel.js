import React from 'react'
import psych01 from './images/psych01.jpg';
import mooddisorder from './images/moodDisorder.jpg'
import Angermanagement from './images/Angermanagement.jpg'
import Gentictesting from './images/Gentictesting.jpeg'
import Alcoholabuse from './images/Alcoholabuse.jpg'
import Depression from './images/Depression.jpg'
import Anxiety from './images/Anxiety.jpg'


export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                        <img src={psych01} className="d-block w-100" alt="..."style={{maxHeight:'80vh'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anxiety} className="d-block w-100" alt="..."style={{maxHeight:'80vh'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={mooddisorder} className="d-block w-100" alt="..."style={{maxHeight:'80vh'}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
                
            </div>
        </div>
    )
}
