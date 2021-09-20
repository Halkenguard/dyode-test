//Dependencies
import React from 'react';

//Styles
import './css/Footer.css'

//Images
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';

export default class Footer extends React.Component {
    render() {
        return (
        <div className="footer">
            <div className="link-menu">
                <div className="menu-title">
                    <h3>Customer Service</h3>
                    <a href="#customer-service" className="expand-button">
                        <p>+</p>
                    </a>
                </div>
                <ul className="expandable" id="customer-service">
                    <li><a href="/">Accessibility</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Return Policy</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Gift Certificates</a></li>
                    <li><a href="/">Wishlist</a></li>
                </ul>
            </div>
            <div className="link-menu">
                <div className="menu-title">
                    <h3>Company</h3>
                    <a href="#company" className="expand-button">
                        <p>+</p>
                    </a>
                </div>
                <ul className="expandable" id="company">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Press</a></li>
                    <li><a href="/">Affiliates</a></li>
                </ul>
            </div>
            <div className="link-menu social-menu">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="/"><img src={facebook} alt='facebook'/></a></li>
                    <li><a href="/"><img src={instagram} alt='instagram'/></a></li>
                </ul>
            </div>
        </div>
        );
    }
}