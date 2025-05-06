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
            "<p>We aim to honor the original quote you receive. However, if the motorcycle’s condition differs significantly from what was submitted—such as undisclosed damage or modifications—our offer may be adjusted accordingly after inspection. Transparency is key, and we’ll always explain any changes clearly.</p>",
        },
        {
          title: "What do I need to bring to my appointment?",
          content:
            "<p>To ensure a smooth and speedy sale, please bring the following items to your appointment:A valid government-issued photo ID (like a driver’s license or passport)Your motorcycle’s current registration The title, if available (don’t worry if it's missing or with your lender)All keys and remotes Any maintenance records Owner’s manual or booklets (if you still have them) Having these items ready helps us process your sale quickly and accurately.</p>",
        },
        {
          title: "Will I need to deal with paperwork?",
          content:
            "<p>No, we handle the paperwork for you! Our team will take care of all the necessary documentation, including title transfers and other required forms. You just need to bring the required documents (like your ID, registration, and title, if available), and we’ll do the rest. It’s that simple!</p>",
        },
        {
          title: "My bike isn't paid off. What should I bring with me?",
          content:
            "<p>If your bike isn’t fully paid off, you can still sell it to us. Just bring a government-issued ID (like your driver’s license or passport) for identity verification, your current motorcycle registration, and the title if you have it. If your bike has a lien, be sure to bring a lienholder payoff statement so we can settle the remaining balance with your lender. We'll take care of everything for you, making the process as smooth as possible!</p>",
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
