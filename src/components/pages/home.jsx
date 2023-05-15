import React from "react";
import "../../App.css";
import HeroSection from "../heroSection";
import AddLoad from "./addLoad";
import NewLoadContainer from "./addLoad";
import ShowLoads from "./showLoads";
import About from "./about";

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

export default Home;
