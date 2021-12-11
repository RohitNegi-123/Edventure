import React from 'react';
import './HeroSection2.css';
import './CourseBranding.css';
import { FaBars, FaTimes } from 'react-icons/fa';


function HeroSection2({
    lightBg, topline, lightText, lightTextDesc, headline, description1, description2, description3, buttonLabel, img, alt, imgStart

}) {


    return (
        <div>
            <div style={{ height: "730px", backgroundColor: "lightgrey" }}>
                <div style={{ width: "100%", height: "550px", backgroundColor: "lightgreen", marginTop: "230px" }}>

                </div>

                <div style={{
                    boxShadow: " 6px 8px 8px 8px rgba(0, 0, 0, 0.3)",
                    height: "850px", width: "590px", marginLeft: "150px", marginTop: "-750px", backgroundColor: "white"
                }}><br />
                    <h3 style={{ marginTop: "30px", fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "green", fontFamily: "sans-serif", wordSpacing: "4px" }}>YOUR FREE DEMO CLASS</h3>
                    <select style={{ borderRadius: "12px", width: "250px", marginLeft: "180px", height: "55px", fontWeight: "bolder", color: "green", fontFamily: "cursive", fontSize: "18px", marginTop: "80px", textAlign: "center", backgroundColor: "lightgrey", boxShadow: " 3px 2px 3px 2px rgba(0, 0, 0, 0.2)" }} >
                        <option >Select Course </option>
                        <option id="1" >sdfd</option>
                        <option id="1" >sdfd</option>
                        <option id="1" >sdfd</option>
                        <option id="1" >sdfd</option>
                    </select>
                    <br />
                    <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-evenly", color: "green" }}>
                        <h4 style={{ marginRight: "60px", fontWeight: "bolder" }}>FIRST NAME</h4>
                        <h4 style={{ fontWeight: "bolder" }} >LAST NAME</h4>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }} >
                        <input style={{ height: "50px", width: "220px", backgroundColor: "lightgrey", borderRadius: "12px", marginTop: "8px", fontSize: "20px", border: "1px solid grey", boxShadow: " 3px 2px 3px 2px rgba(0, 0, 0, 0.2)" }} type="text " ></input>
                        <input style={{ height: "50px", width: "220px", backgroundColor: "lightgrey", borderRadius: "12px", marginTop: "8px", fontSize: "20px", border: "1px solid grey", boxShadow: " 3px 2px 3px 2px rgba(0, 0, 0, 0.2)" }} type="text " ></input>

                    </div>
                    <div style={{ marginTop: "50px", marginLeft: "82px" }}>

                        <h4 style={{ fontWeight: "bolder", color: "green" }}>PHONE NUMBER</h4>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <input style={{ height: "50px", width: "500px", marginLeft: "50px", backgroundColor: "lightgrey", borderRadius: "12px", marginTop: "-2px", fontSize: "20px", border: "1px solid grey", boxShadow: " 3px 2px 3px 2px rgba(0, 0, 0, 0.2)" }} type="phone" ></input>
                    </div>
                    <div style={{ marginTop: "50px", marginLeft: "82px" }}>

                        <h4 style={{ fontWeight: "bolder", color: "green" }}>EMAIL ADDR.</h4>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <input style={{ height: "50px", width: "500px", marginLeft: "50px", backgroundColor: "lightgrey", borderRadius: "12px", marginTop: "-2px", fontSize: "20px", border: "1px solid grey", boxShadow: " 3px 2px 3px 2px rgba(0, 0, 0, 0.2)" }} type="email" ></input>
                    </div>

                    <button style={{ marginLeft: "230px", marginTop: "40px", height: "50px", width: "150px", borderRadius: "12px", border: "2px solid darkgreen", backgroundColor: "green", color: "white", fontSize: "20px", boxShadow: " 3px 2px 3px 2px rgba(0, 0, 0, 0.2)" }}>Get it Now</button>
                    <p style={{ textAlign: "center", marginTop: "30px" }}>CONTACT US</p>
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginRight: "80px", marginTop: "20px", color: "blue" }}>

                        <br />
                        <span>( +91 ) 123 456 7890</span>
                        <span >edventure@gmail.com</span>
                    </div>
                </div>
                <div style={{ marginTop: "-630px", marginLeft: "900px", border: "3px solid lightgreen", width: "500px", boxShadow: " 6px 6px 6px 6px rgba(0, 0, 0, 0.3)" }}>
                    <img style={{ height: "500px", width: "500px" }} src="images/download.jpg" />

                </div>


            </div >
            <div style={{ height: "900px" }}>
                <div>
                    <h1 style={{ fontSize: "40px", color: "green", fontFamily: "initial", marginLeft: "5px", marginTop: "100px", textAlign: "center", marginBottom: "180px" }}>LET NO PANDEMIC HAMPER YOUR RESULTS,<br />WE'VE GOT YOUR CONCERNS</h1>
                </div>
                <div style={{ boxShadow: " 25px 15px 25px 5px grey", marginLeft: "150px", height: "450px", width: "500px", backgroundColor: "green", marginTop: "120px", borderRadius: "5px" }}>

                </div>
                <div style={{ marginLeft: "173px", height: "450px", width: "500px", backgroundColor: "pink", marginTop: "-468px", borderRadius: "5px" }}>
                    <img style={{ height: "450px", borderRadius: "8px" }} src="images/Pandemic.jpg" />
                </div>
                <div style={{ marginTop: "-380px", marginLeft: "850px", fontWeight: "600" }}>
                    <div style={{ fontSize: "22px" }}>
                        YOUR TIME IN ED-VENTURE IS AN <span style={{ color: "green" }}>ADVENTURE</span>
                        <div style={{ fontSize: "16px", fontWeight: "100", fontFamily: "revert", color: "grey", marginTop: "20px", width: "600px" }}>
                            We provide interactive online classes which you can take from the comfort of your home. Live lessons answers in-depth assessments. The best online home tuition at the most affordable rate.
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "60px", marginLeft: "850px", fontWeight: "600" }}>
                    <div style={{ fontSize: "22px" }}>
                        YOUR TIME IN ED-VENTURE IS AN <span style={{ color: "green" }}>ADVENTURE</span>
                        <div style={{ fontSize: "16px", fontWeight: "100", fontFamily: "revert", color: "grey", marginTop: "20px", width: "600px" }}>
                            We provide interactive online classes which you can take from the comfort of your home. Live lessons answers in-depth assessments. The best online home tuition at the most affordable rate.
                        </div>
                    </div>
                </div>
                <button style={{ height: "50px", width: "200px", backgroundColor: "green", border: "1px solid green", color: "white", fontSize: "19px", fontWeight: "bold", borderRadius: "15px", marginLeft: "900px", marginTop: "30px" }}>Explore Now</button>

            </div>
            <div style={{ height: "900px", backgroundColor: "lightgrey", marginTop: "-35px" }}>
                <div>
                    <br />
                    <h1 style={{ fontSize: "40px", color: "green", fontFamily: "initial", marginLeft: "5px", marginTop: "50px", textAlign: "center", marginBottom: "180px" }}>LET'S HEAR IT FROM OUR PEOPLE</h1>
                </div>
                <div >
                    <img style={{ boxShadow: "5px 8px 8px 8px grey", height: "560px", width: "830px", marginTop: "-65px" }} src="images/Review.jpg" />
                </div>
                <div >
                    sdfvfd
                </div>
                <div style={{ marginTop: "-590px", marginLeft: "770px" }} className="brand-container">
                    <div className="brand-wrapper">

                        <div style={{ width: "600px", backgroundColor: "lightpink" }} className="brand-center  " >

                            <div id="myCarousel" class="carousel slide" data-ride="carousel">

                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                {/* style="width:100%;" */}

                                <div class="carousel-inner">
                                    <div class="item active">
                                        {/* <img src='https://www.chieflearningofficer.com/wp-content/uploads/sites/3/beans/images/coaching_new-8b38574.jpg' alt="Chicago" className="brand-img" /> */}
                                        <div style={{ height: "640px" }}>
                                            <img style={{ height: "230px", width: "300px", marginLeft: "150px", borderRadius: "50%", marginTop: "30px" }} src="images/user-1.jpg" /> <p style={{ fontSize: "18px", color: "green", fontWeight: "600", marginTop: "-380px", marginLeft: "1270px" }}>- Catherine</p>
                                        </div>
                                        <div style={{ marginTop: "-320px", textAlign: "center", marginLeft: "20px", marginBottom: "50px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>

                                    <div class="item">
                                        {/* <img src='https://www.chieflearningofficer.com/wp-content/uploads/sites/3/beans/images/coaching_new-8b38574.jpg' alt="Chicago" className="brand-img" /> */}
                                        <div style={{ height: "640px" }}>
                                            <img style={{ height: "230px", width: "300px", marginLeft: "150px", borderRadius: "50%", marginTop: "30px" }} src="images/user-1.jpg" /> <p style={{ fontSize: "18px", color: "green", fontWeight: "600", marginTop: "-380px", marginLeft: "1270px" }}>- Catherine</p>
                                        </div>
                                        <div style={{ marginTop: "-320px", textAlign: "center", marginLeft: "20px", marginBottom: "50px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>

                                    <div class="item">
                                        {/* <img src='https://www.chieflearningofficer.com/wp-content/uploads/sites/3/beans/images/coaching_new-8b38574.jpg' alt="Chicago" className="brand-img" /> */}
                                        <div style={{ height: "640px" }}>
                                            <img style={{ height: "230px", width: "300px", marginLeft: "150px", borderRadius: "50%", marginTop: "30px" }} src="images/user-1.jpg" /> <p style={{ fontSize: "18px", color: "green", fontWeight: "600", marginTop: "-380px", marginLeft: "1270px" }}>- Catherine</p>
                                        </div>
                                        <div style={{ marginTop: "-320px", textAlign: "center", marginLeft: "20px", marginBottom: "50px" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
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
                    </div>
                </div>


            </div>
            <div style={{ height: "900px", backgroundColor: "lightgrey", marginTop: "-35px", marginBottom: "100px" }}>
                <div style={{ marginLeft: "0px", height: "650px", width: "800px", backgroundColor: "lightgrey", marginTop: "-80px", borderRadius: "5px" }}>
                    <video style={{ marginLeft: "0px", marginTop: "-0px" }} width="1520px" height="1000px" controls play>
                        <source src="images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>








        // <div className={lightBg? 'home__hero-section2':'home__hero-section2 darkBg'}>
        //     <div className='container'>
        //         <div className='header'>
        //             <p className={lightText?'heading2':'heading2 dark'}>How it works?</p>
        //             <div style={{borderTop: "3px solid  rgb(93, 93, 243) ", width:'30%', marginLeft:'35%', paddingBottom:'15px'}}></div>
        //         </div>
        //         <div className="row home__hero-row" 
        //         style={{display:'flex', flexDirection:imgStart==='start'?'row-reverse':'row'}}>
        //             <div className="col2">
        //                 <div className="home__hero-img-wrapper2">
        //                     <img src="images/svg-3.svg"  alt={alt} className='home_hero2-img'/>
        //                 </div>
        //             </div>
        //             <div className="col2">
        //                 <div className="home__hero-text-wrapper2">
        //                     <div className="row2" >
        //                         <div class="icon-box">
        //                                 <i class="fa fa-newspaper-o fa-2x middle" aria-hidden="true"></i>
        //                         </div>
        //                         <div  className="row2_text"><p className={lightTextDesc? 'home__hero2-subtitle':'home__hero2-subtitle dark'}>Find your favourite subject</p></div>
        //                     </div>
        //                     <div className="row2" >
        //                         <div class="icon-box">
        //                             <i class="fa fa-newspaper-o fa-2x middle" aria-hidden="true"></i>
        //                         </div>
        //                         <div  className="row2_text"><p className={lightTextDesc? 'home__hero2-subtitle':'home__hero2-subtitle dark'}>Learn from video lectures</p></div>
        //                     </div>
        //                     <div className="row2" >
        //                         <div class="icon-box">
        //                             <i class="fa fa-newspaper-o fa-2x middle" aria-hidden="true"></i>
        //                         </div>
        //                         <div  className="row2_text"><p className={lightTextDesc? 'home__hero2-subtitle':'home__hero2-subtitle dark'}>Enjoy Learning</p></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div> 
        //     </div>
        // </div>



        /*<div className={lightBg? 'home__hero-section':'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display:'flex', flexDirection:imgStart==='start'?'row-reverse':'row'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topline}</div>
                            <h1 className={lightText?'heading':'heading dark'}>{headline}</h1>
                           <ul>
                               <li> <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'} >
                                {description1}
                            </p>
                            </li>
                            <li>
                            <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'} >
                                {description2}
                            </p>
                            </li>
                            <li>
                            <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'} >
                                {description3}
                            </p>
                            </li>
                            </ul>
                            <Link to='/sign-up'>
                                <Button buttonSize='btn-wide' buttonColor='blue'>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className='home__hero-img'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>*/
    )
}

export default HeroSection2






