import React from "react";
import SubBanner from "../components/sub-banner";
import Button from "./compare/button";
import Moto from "../components/moto";
import Cta from "../components/cta";
import Ride from "./compare/ride";
import Sell from "./compare/sell";
const Compare = () => {
  const sub_banner = {
    banner: {
      heading: "MotoBuyers vs Other Ways to Sell Your Motorcycle",
      text: "",
    },
  };
  return (
    <>
      <main>
        <SubBanner data={sub_banner.banner} />
        <Button />
        <Moto className="background_remove remove_padd" />
        <Sell />
        <Cta />
        <Ride />
      </main>
    </>
  );
};

export default Compare;
