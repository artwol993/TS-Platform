import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AddLoad from './components/pages/AddLoad';
import ShowLoads from './components/pages/ShowLoads';
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
