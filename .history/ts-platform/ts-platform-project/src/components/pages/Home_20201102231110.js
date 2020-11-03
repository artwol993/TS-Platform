import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AddLoad from './AddLoad';
import NewLoadContainer
import ShowLoads from './ShowLoads';
import About from './About';


function Home() {
    return (
        <>
            <HeroSection />
            <AddLoad />
            <ShowLoads />
            <About />
        </>
    );
}

export default Home
