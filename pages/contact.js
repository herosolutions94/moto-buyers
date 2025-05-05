import React from "react";
import Form from "./contactus/form";
import Grids from "./contactus/grids";
import SubBanner from "../components/sub-banner";

const Contact = () => {
  const sub_banner = {
    banner: {
      heading: "We Look Forward to Hearing From You!",
      text: "Selling your motorcycle has never been easier — and we’re excited to make it a smooth ride for you!",
    },
  };
  return (
    <>
      <main>
        <SubBanner data={sub_banner.banner} />
        <Form />
        <Grids />
      </main>
    </>
  );
};

export default Contact;
