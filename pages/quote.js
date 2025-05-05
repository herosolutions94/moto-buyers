import React from "react";
import SubBanner from "../components/sub-banner";
import Steps from "./quote/steps";
import Agree from "./quote/agree";
import Smart from "../components/smart";

const Quote = () => {
  const sub_banner = {
    banner: {
      heading: "How Do We Determine Your Motorcycle’s Value?",
      text: "Ever wonder how different buyers decide what your motorcycle is worth? Every buyer has their own method — and the truth is, motorcycle values fluctuate often, influenced by local demand, seasonality, condition, and model popularity.",
    },
  };
  return (
    <>
      <main>
        <SubBanner data={sub_banner.banner} />
        <Steps />
        <Agree />
        <Smart className="background_remove" />
      </main>
    </>
  );
};

export default Quote;
