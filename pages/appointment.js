import React from "react";
import SubBanner from "../components/sub-banner";
import Checklist from "./appointment/checklist";
import Tips from "./appointment/tips";
import Smart from "../components/smart";
import Faq from "../components/faq";
import Testimonial from "../components/testimonial";
const Appointment = () => {
  const faqData = [
    {
      title: "Questions About Your Appointment",
      items: [
        {
          title: "What should I expect from my appointment?",
          content:
            "<p>No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.</p>",
        },
        {
          title: "Will my offer change after inspection?",
          content:
            "<p>No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.</p>",
        },
        {
          title: "What do I need to bring to my appointment?",
          content:
            "<p>No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.</p>",
        },
        {
          title: "Will I need to deal with paperwork?",
          content:
            "<p>No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.</p>",
        },
        {
          title: "My bike isn't paid off. What should I bring with me?",
          content:
            "<p>No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.</p>",
        },
      ],
    },
  ];
  const sub_banner = {
    banner: {
      heading: "Ride In, Get Paid Fast!",
      text: "Skip the hassle—bring your motorcycle in and walk away with cash in just minutes.",
    },
  };
  return (
    <>
      <main>
        <SubBanner data={sub_banner.banner} />
        <Checklist />
        <Tips />
        <Faq data={faqData} />
        <Smart />
        <Testimonial />
      </main>
    </>
  );
};

export default Appointment;
