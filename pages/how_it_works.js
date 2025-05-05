import React from "react";
import HeroSection from "./how_it_works/hero-section";
import Works from "./how_it_works/works";
import Choose from "./how_it_works/choose";
import Cta from "../components/cta";
import SmoothRide from "./how_it_works/smooth-ride";
import Testimonial from "../components/testimonial";

const HowItWorks = () => {
  return (
    <>
      <main>
        <HeroSection />
        <Works />
        <Choose />
        <Cta />
        <SmoothRide />
        <Testimonial className="background_ch" />
      </main>
    </>
  );
};

export default HowItWorks;
