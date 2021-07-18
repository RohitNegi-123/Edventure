import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from '../../Button'
import './Footer.css'
import{
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {BiBookReader} from 'react-icons/bi';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventures newsletter to receive out best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input
                        className='footer-input'
                         type="email"
                         name='email'
                         placeholder='Your Email'
                         
                         />
                         <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms and Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                        EDVENTURE <BiBookReader className="navbar-icon" />
                        </Link>
                    </div>
                    <small className='website-rights'>EDVENTURE 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            
                            <FaFacebook/>

                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <FaInstagram/>

                        </Link>
                        <Link className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <FaYoutube/>

                        </Link>
                        <Link className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <FaTwitter/>

                        </Link>
                        <Link className="social-icon-link linkedIn"
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <FaLinkedin/>

                        </Link>
                        
        
                    </div>
                </div>
            </section>

            
        </div>
    )
}

export default Footer
