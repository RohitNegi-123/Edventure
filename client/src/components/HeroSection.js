import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Form from './Form';
const click1 = () => {

    var d = document.getElementById("first");
    if (d.style.display == "none") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none"
    }
    var icn = document.getElementById("icon1");
    console.log(icn, icn.innerHTML);
    if (icn.innerHTML == "+") {
        icn.innerHTML = "-"
    }
    else {
        icn.innerHTML = "+"
    }
    // icn.innerHTML = "-"
}
const click2 = () => {
    var d = document.getElementById("second");
    if (d.style.display == "none") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none"
    }
    var icn = document.getElementById("icon2");
    console.log(icn, icn.innerHTML);
    if (icn.innerHTML == "+") {
        icn.innerHTML = "-"
    }
    else {
        icn.innerHTML = "+"
    }
}
const click3 = () => {
    var d = document.getElementById("third");
    if (d.style.display == "none") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none"
    }
    var icn = document.getElementById("icon3");
    console.log(icn, icn.innerHTML);
    if (icn.innerHTML == "+") {
        icn.innerHTML = "-"
    }
    else {
        icn.innerHTML = "+"
    }
}
const click4 = () => {
    var d = document.getElementById("fourth");
    if (d.style.display == "none") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none"
    }
    var icn = document.getElementById("icon4");
    console.log(icn, icn.innerHTML);
    if (icn.innerHTML == "+") {
        icn.innerHTML = "-"
    }
    else {
        icn.innerHTML = "+"
    }
}
const m1 = () => {
    var ar = document.getElementById("arr");
    ar.style.marginTop = "100px";
    // console.log(ar, " sdgd");
}
const m2 = () => {
    var ar = document.getElementById("arr2");
    ar.style.marginTop = "180px";
    // console.log(ar, " sdgd");
}
const m3 = () => {
    var ar = document.getElementById("arr3");
    ar.style.marginTop = "270px";
    console.log(ar, " sdgd");
}
const m4 = () => {
    var ar = document.getElementById("arr4");
    ar.style.marginTop = "360px";
    // console.log(ar, " sdgd");
}
const m5 = () => {
    var ar = document.getElementById("arr5");
    ar.style.marginTop = "450px";
    // console.log(ar, " sdgd");
}
// const [val, Setval] = useState("");
// const val = "husdhjcbnjsbcvjnj"

function HeroSection({
    lightBg, topline, lightText, lightTextDesc, headline, description1, description2, description3, buttonLabel, img, alt, imgStart, isForm
}) {


    if (isForm === 'true') {


        return (
            <div>
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
                <div className="boxx" >
                    <br />
                    <div style={{ marginTop: "-5px" }} id="box_f" onClick={() => click1()} className="boxx2">
                        <div style={{ marginLeft: "12px" }}>Personalised Learning Environment</div>
                        <div id="icon1">
                            +
                        </div>
                    </div>

                    <div style={{ display: "none" }} id="first">
                        <div className="final" >

                            <p className="pp">

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac felis ac lobortis. Donec ullamcorper pretium ipsum. Praesent eget diam pulvinar, egestas massa bibendum, tincidunt dui. Etiam congue purus nec sagittis ultricies. Morbi at vulputate arcu, id iaculis tellus. Pellentesque ac imperdiet arcu, id tincidunt sem

                            </p>
                        </div>
                    </div>
                    <div id="box_f" onClick={() => click2()} className="boxx2">
                        <div style={{ marginLeft: "12px" }}>Personalised Learning Environment</div>
                        <div id="icon2">
                            +
                        </div>
                    </div>

                    <div style={{ display: "none" }} id="second">
                        <div className="final"  >
                            <p className="pp">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac felis ac lobortis. Donec ullamcorper pretium ipsum. Praesent eget diam pulvinar, egestas massa bibendum, tincidunt dui. Etiam congue purus nec sagittis ultricies. Morbi at vulputate arcu, id iaculis tellus. Pellentesque ac imperdiet arcu, id tincidunt sem

                            </p>
                        </div>
                    </div>
                    <div id="box_f" onClick={() => click3()} className="boxx2">
                        <div style={{ marginLeft: "12px" }}>Personalised Learning Environment</div>
                        <div id="icon3">
                            +
                        </div>
                    </div>

                    <div style={{ display: "none" }} id="third">
                        <div className="final" >
                            <p className="pp">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac felis ac lobortis. Donec ullamcorper pretium ipsum. Praesent eget diam pulvinar, egestas massa bibendum, tincidunt dui. Etiam congue purus nec sagittis ultricies. Morbi at vulputate arcu, id iaculis tellus. Pellentesque ac imperdiet arcu, id tincidunt sem
                            </p>
                        </div>
                    </div>
                    <div id="box_f" onClick={() => click4()} className="boxx2">
                        <div style={{ marginLeft: "12px" }}>Personalised Learning Environment</div>
                        <div id="icon4" >
                            +
                        </div>
                    </div>

                    <div style={{ display: "none" }} id="fourth">
                        <div className="final" >
                            <p className="pp">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac felis ac lobortis. Donec ullamcorper pretium ipsum. Praesent eget diam pulvinar, egestas massa bibendum, tincidunt dui. Etiam congue purus nec sagittis ultricies. Morbi at vulputate arcu, id iaculis tellus. Pellentesque ac imperdiet arcu, id tincidunt sem </p>
                        </div>
                    </div>






                </div >
                <div style={{ marginBottom: "160px" }} class="conta2 cnt ">
                    <h2>Explore our courses</h2>
                    <p>The world's best courses on different bla bla bla</p>
                    <div class="row">
                        <div class="col-sm-4">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
                                </li>
                                <li class="nav-item ">
                                    <a onClick={() => m1()} class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                                </li>
                                <li class="nav-item">
                                    <a onClick={() => m2()} class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                                </li>
                                <li class="nav-item">
                                    <a onClick={() => m3()} class="nav-link" data-toggle="tab" href="#menu3">Menu 3</a>
                                </li>
                                <li class="nav-item">
                                    <a onClick={() => m4()} class="nav-link" data-toggle="tab" href="#menu4">Menu 4</a>
                                </li>
                                <li class="nav-item">
                                    <a onClick={() => m5()} class="nav-link" data-toggle="tab" href="#menu5">Menu 5</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-8">
                            <div class="tab-content">
                                <div id="home" class="container tab-pane active cnt2"><br />
                                    <i id="ar" class="arrow left"></i>
                                    <h3>HOME</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="row m-2" id="1">
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="menu1" class="container tab-pane fade cnt2"><br />
                                    <i id="arr" class="arrow left"></i>
                                    <h3 >Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div class="row m-2" id="1">
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="menu2" class="container tab-pane fade cnt2"><br />
                                    <i id="arr2" class="arrow left"></i>
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <div class="row m-2" id="1">
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="menu3" class="container tab-pane fade cnt2"><br />
                                    <i id="arr3" class="arrow left"></i>
                                    <h3>Menu 3</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <div class="row m-2" id="1">
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="menu4" class="container tab-pane fade cnt2 "><br />
                                    <i id="arr4" class="arrow left"></i>
                                    <h3>Menu 4</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <div class="row m-2" id="1">
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu5" class="container tab-pane fade cnt2"><br />
                                    <i id="arr5" class="arrow left"></i>
                                    <h3>Menu 5</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

                                    <div class="row m-2" id="1">
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="tile">
                                                <div class="tile-header">
                                                </div>
                                                <div class="tile-body p-3">
                                                    Basics of C++ with Data Stuctures and Algorithms Basics of C++ with Data Stuctures and AlgorithmsBasics of C++ with Data Stuctures and AlgorithmsBasics of C++
                                                </div>
                                                <div class="tile-footer">
                                                    Explore Course +
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>


        )

    }

    else {
        return (
            <div>
                <h1></h1>
            </div>

        )
    }
}





export default HeroSection;
