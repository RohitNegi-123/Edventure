import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Form from './Form';


function HeroSection({
    lightBg, topline, lightText, lightTextDesc, headline, description1, description2, description3, buttonLabel, img, alt, imgStart, isForm
}) {


    if (isForm === 'true') {


        return (
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container hero">
                    <div className="row home__hero-row"
                        style={{ flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                {/* <div className="top-line">{topline}</div> */}
                                <h1 style={{ marginLeft: "-36px", color: "white" }} className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <ul>
                                    <li> <p style={{ textAlign: "center", width: "1200px", color: "white", marginLeft: "19px", fontFamily: "sans-serif", fontSize: "22.1px" }} className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} >
                                        {description1}
                                    </p>
                                    </li>
                                    <li>
                                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} >
                                            {description2}
                                        </p>
                                    </li>
                                    <li>
                                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} >
                                            {description3}
                                        </p>
                                    </li>
                                </ul>
                                <Link to='/sign-up'>
                                    {/* <div style={{ marginLeft: "290px" }}>
                                        <Button buttonSize='btn-wide' buttonColor='white' >
                                            <span style={{ fontFamily: "revert" }}>Venture Now</span>
                                        </Button>
                                    </div> */}
                                    <div class="flip">
                                        <a href="https://dribbble.com/shots/2507318-start-rollover" target="_blank">
                                            <div style={{ width: "250px" }} class="front">Venture Now</div>
                                            <div style={{ width: "250px" }} class="back">Explore</div>
                                        </a>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <h1></h1>
        )

    }

}

export default HeroSection
