import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AddLoad from './AddLoad';
import NewLoadContainer from './AddLoad';
import ShowLoads from './ShowLoads';
import About from './About';


function Home() {
    return (
        <>
            <HeroSection />
            <AddLoad />
            <NewLoadContainer />
            <ShowLoads />
            <About />
        </>
    );
}

export default Home
