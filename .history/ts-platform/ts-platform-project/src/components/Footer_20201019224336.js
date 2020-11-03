import React from 'react';
import './Footer.css';
;
function Footer() {
    return (
        <div className='footer-container'>

            <p className='footer-text'>Spotkajmy się na :</p>

            <div className="footer-icon-box">
                <a href="https://insta" className='footer-icon footer-icon-fb'></a>
                <div className='footer-icon footer-icon-ig'></div>
            </div>

        </div>
    )
}

export default Footer
