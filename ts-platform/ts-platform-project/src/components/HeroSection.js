import React from 'react';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
            <div className='hero-container'>
                <video src="/videos/video-2.mp4" autoPlay loop muted />
                <h1>Witaj !</h1>
                <p>Potrzebujesz transportu?</p>
                <p>świetnie trafiłeś!</p>
                {/* <div className="hero-btns">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        Link to='/add-load'
                    >
                        Dodaj ładunek
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                        Link to='/list-load'
                    >
                        Lista ładunków
                    </Button>

                </div> */}

            </div>
        </div>
    )
}

export default HeroSection

