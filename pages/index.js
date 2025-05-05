import React from "react";
import Banner from "./home/banner";
import Work from "./home/work";
import Moto from "../components/moto";
import Offers from "./home/offers";
import Smart from "../components/smart";
import Testimonial from "../components/testimonial";
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
