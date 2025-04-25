import React from "react";
import Banner from "./home/banner";
import Work from "./home/work";
import Moto from "./home/moto";
import Offers from "./home/offers";
import Smart from "./home/smart";
import Testimonial from "./home/testimonial";
export default function index() {
  return (
    <>
      <main>
        <Banner />
        <Work />
        <Moto />
        <Offers />
        <Smart />
        <Testimonial />
      </main>
    </>
  );
}
