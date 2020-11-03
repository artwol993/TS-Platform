import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
            <div className='hero-container'>
                <video src="/videos/video-2.mp4"  />
                <h1>Witaj !</h1>
                <p>Potrzebujesz transportu?</p>
                <p>świetnie trafiłeś!</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn==large'>
                        Dodaj ładunek
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection

