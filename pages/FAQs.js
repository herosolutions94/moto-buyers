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
      title: "Frequently Asked Questions",
      items: [
        {
          title: "What is MotoBuyers?",
          content:
            "<p>MotoBuyers is a trusted platform designed to make selling your motorcycle easier than ever. Instead of dealing with countless online listings, haggling buyers, or trade-in hassles, you can simply share a few details about your bike and receive a customized offer. We take care of the inspection, paperwork, and payment — making the process fast, secure, and stress-free for you.</p>",
        },
        {
          title: "Why should I sell my motorcycle to MotoBuyers?",
          content:
            "<p>MotoBuyers helps you sell your bike faster and for more money than most dealerships or trade-in options. No more hassle of selling it yourself — our process is quick, straightforward, and completely transparent. See why MotoBuyers is the smart way to sell your motorcycle today.</p>",
        },
        {
          title: "Where are you located?",
          content: "<p>We are located in different areas.</p>",
        },
        {
          title: "Will you buy any motorcycle?",
          content:
            "<p>Absolutely! At MotoBuyers, we purchase motorcycles of all makes, models, and conditions — whether it's nearly new, well-loved, or even if it needs a little work. Just share the details, and we’ll give you a fair offer, fast.</p>",
        },
        {
          title: "Is MotoBuyers available in my area?",
          content:
            "<p>Yes! MotoBuyers operates nationwide, making it easy for you to sell your motorcycle no matter where you are in the U.S. Simply enter your location and bike details, and we’ll take care of the rest — pickup included.</p>",
        },
      ],
    },
    {
      title: "Questions About Getting Your Quote",
      items: [
        {
          title: "Will I be charged to use your service?",
          content:
            "<p>No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.</p>",
        },
        {
          title: "How long will it take to get my quote?",
          content:
            "<p>At MotoBuyers, you can get your quote in just minutes! Simply fill out a few quick details about your motorcycle, and we’ll provide you with a fair, no-obligation offer right away.</p>",
        },
        {
          title: "I submitted my form, what now?",
          content:
            "<p>Once you submit your form, our team will quickly review your information and reach out to confirm a few details. After that, we’ll finalize your offer and schedule a convenient time for pickup or drop-off—whichever works best for you.</p>",
        },
        {
          title: "What happens if I've let my quote expire?",
          content:
            "<p>If your quote has expired, no worries! You can simply resubmit your information, and we’ll provide you with an updated offer based on the current market value of your motorcycle.</p>",
        },
        {
          title: "What kind of quote should I expect?",
          content:
            "<p>At MotoBuyers, we provide a competitive, no-obligation offer based on your motorcycle’s make, model, condition, mileage, and current market demand. Our goal is to offer you top value with no hidden fees or pressure to sell.</p>",
        },
      ],
    },

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
