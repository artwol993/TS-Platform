import React from 'react';
import './Footer.css';
import facebook from './assets/'
;
function Footer() {
    return (
        <div className='footer-container'>

            <p className='footer-text'>Spotkajmy się na :</p>

            <div className="footer-icon-box">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img alt={"insta"} className={"footer_icon"} src={insta}></img></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img alt={"facebook"} className={"footer_icon"} src={facebook}></img></a>
            </div>

        </div>
    )
}

export default Footer