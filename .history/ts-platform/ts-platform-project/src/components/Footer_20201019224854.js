import React from 'react';
import './Footer.css';
;
function Footer() {
    return (
        <div className='footer-container'>

            <p className='footer-text'>Spotkajmy się na :</p>

            <div className="footer-icon-box">

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img alt={"insta"}className={"footer-icon"}src={insta}></img></a>

            </div>

        </div>
    )
}

export default Footer
