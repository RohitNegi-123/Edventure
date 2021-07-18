import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiBookReader } from 'react-icons/bi';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Dropdown from './Dropdown';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton(true);
    }, []);


    window.addEventListener('resize', showButton);
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div>
                <div>
                    <div className="navbar jin ">
                        <div className="navbar-container container">
                            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                                <BiBookReader className="navbar-icon" style={{ color: "white" }} />
                                <span style={{ color: "white" }}>EDVENTURE</span>
                            </Link>
                            <div className="menu-icon" onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}

                            </div>
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                        <span style={{ color: "white" }}> About US</span>
                                    </Link>
                                </li>
                                <li className="nav-item"
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                >
                                    <Link to='/courses' className="nav-links" onClick={closeMobileMenu}>
                                        <span style={{ color: "white" }}> Courses</span> <i className='fas fa-caret-down' />
                                    </Link>
                                    {dropdown && <Dropdown />}
                                </li>
                                <li className="nav-item">
                                    <Link to='/materials' className="nav-links" onClick={closeMobileMenu}>
                                        <span style={{ color: "white" }}> Free Study Material</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/team' className="nav-links" onClick={closeMobileMenu}>
                                        <span style={{ color: "white" }}> Team</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/results' className="nav-links" onClick={closeMobileMenu}>
                                        <span style={{ color: "white" }}> Results</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                        <span style={{ color: "white" }}> Contact</span>
                                    </Link>
                                </li>
                                <li className="nav-btn">
                                    {button ? (
                                        <Link to='/sign-up' className="btn-link">
                                            <Button buttonStyle='btn--outline'>
                                                <span style={{ color: "white" }}> Sign Up</span>

                                            </Button>

                                        </Link>
                                    ) : (
                                        <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                            <Button buttonStyle='btn--mobile'>
                                                Sign Up

                                            </Button>

                                        </Link>

                                    )

                                    }
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </IconContext.Provider>
    )
}

export default Navbar
