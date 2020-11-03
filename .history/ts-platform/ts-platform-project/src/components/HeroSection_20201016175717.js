import React from 'react';
import{Button} from'./Button';

function HeroSection() {
    return (
        <div>
            <div className='hero-container'>
                <video src="/videos/video-2.mp4 autoplay loop muted" />
                <h1>Witaj !</h1>
                <p>Potrzebujesz transportu?</p>
                <p>świetnie trafiłeś!</p>
                <div className="hero-btns">
<Button
                </div>

            </div>
        </div>
    )
}

export default HeroSection

