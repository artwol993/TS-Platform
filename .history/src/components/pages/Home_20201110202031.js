import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import NewLoadContainer from './AddLoad';
import About from './About';
import ShowOffer from './ShowOffer';


function Home() {
    return (
        <>
            <HeroSection />
            <NewLoadContainer />
            <ShowOffer />
            <About />
        </>
    );
}

export default Home
