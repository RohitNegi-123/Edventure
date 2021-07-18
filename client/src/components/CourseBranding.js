import React from 'react';
import './CourseBranding.css';
import Form2 from './Form2';
import NotificationBar from './NotificationBar';

export default function CourseBranding() {
    return (
        <div>
        <div className="brand-container">
            <div className="brand-wrapper">
                    <div className="brand-elements"><NotificationBar/></div>
                    
                    <div className="brand-center  " >
                       
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            {/* style="width:100%;" */}
                        
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img src='https://www.chieflearningofficer.com/wp-content/uploads/sites/3/beans/images/coaching_new-8b38574.jpg' alt="Los Angeles" className="brand-img" />
                                </div>

                            <div class="item">
                                <img src='https://www.chieflearningofficer.com/wp-content/uploads/sites/3/beans/images/coaching_new-8b38574.jpg' alt="Chicago" className="brand-img" />
                            </div>
                            
                                <div class="item">
                                    <img src='https://www.chieflearningofficer.com/wp-content/uploads/sites/3/beans/images/coaching_new-8b38574.jpg'alt="New york" className="brand-img" />
                                </div>
                            </div>

                            
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="brand-elements"><Form2/></div>
            </div>
        </div>
        <div className="brand-footer">ESE + GATE 2022 Live Online Courses </div>
        </div>

            
   
    )
}
