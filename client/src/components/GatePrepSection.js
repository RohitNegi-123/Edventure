import React from 'react';
import './GatePrepSection.css';

 function GatePrepSection() {
     
    return (
        <div className="prep-container">
            <h1 className="prep-heading">Kick-Start Your Preparation With <span id="prep-brand">Eduventure</span></h1>
            <hr className="prep-hr"/>
            <div className="prep-wrapper">
                <ul className="prep-list">
                    <li>We are your one step revolution for GATE.</li>
                    <li>Ace GATE Examination by mastering the core concepts from basics to advanced level.</li>
                    <li>Dedicated and experienced faculty with person track records to mentor student.</li>
                    <li>Streams offered- <span id="prep-subjects">CS, Mech, CH, ECE</span></li>
                </ul>
            </div>
            
        </div>
    )
}

export default GatePrepSection