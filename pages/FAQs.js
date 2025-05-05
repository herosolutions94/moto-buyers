import React from "react";
import SubBanner from "../components/sub-banner";
import Faq from "../components/faq";
const FAQs = () => {
  const sub_banner = {
    banner: {
      heading: "Got Questions? We've Got Answers!",
      text: "Simply answer a few quick questions about your motorcycle on our website.",
    },
  };
  const faqData = [
    {
      title: "General Questions",
      items: [
        {
          title: "What is MotoBuyers?",
          content: "<p>MotoBuyers helps you sell your motorcycle easily.</p>",
        },
        {
          title: "How do I get an offer?",
          content:
            "<p>Just fill out the form and we’ll get back to you quickly.</p>",
        },
      ],
    },
    {
      title: "Selling Process",
      items: [
        {
          title: "Do I need a title?",
          content: "<p>No, we can help even if you don't have one.</p>",
        },
        {
          title: "What if I have a loan?",
          content: "<p>We’ll work with your lender to pay it off.</p>",
        },
      ],
    },
    {
      title: "After the Sale",
      items: [
        {
          title: "When do I get paid?",
          content: "<p>We offer same-day payment options.</p>",
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <SubBanner data={sub_banner.banner} />
        <Faq data={faqData} />
      </main>
    </>
  );
};

export default FAQs;
