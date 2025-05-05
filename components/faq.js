import React, { useState, useRef } from "react";
import { gsap } from "gsap";

export default function Faq({ data }) {
  const [openAccordion, setOpenAccordion] = useState(() =>
    Object.fromEntries(data.map((_, idx) => [idx, 0]))
  );

  const accordionRefs = useRef({});

  const handleAccordionClick = (blockIndex, index) => {
    const refKey = `${blockIndex}-${index}`;
    const currentOpen = openAccordion[blockIndex];

    if (index === currentOpen) {
      gsap.to(
        accordionRefs.current[refKey].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: () =>
            setOpenAccordion((prev) => ({ ...prev, [blockIndex]: null })),
        }
      );
    } else {
      if (
        currentOpen !== null &&
        accordionRefs.current[`${blockIndex}-${currentOpen}`]
      ) {
        gsap.to(
          accordionRefs.current[`${blockIndex}-${currentOpen}`].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        );
      }

      setOpenAccordion((prev) => ({ ...prev, [blockIndex]: index }));
      gsap.fromTo(
        accordionRefs.current[refKey].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    }
  };

  return (
    <section className="faqs">
      <div className="contain">
        {data.map((block, blockIndex) => (
          <div className="block1" key={blockIndex}>
            <div className="sec_center_heading">
              <h2>{block.title}</h2>
            </div>
            <div className="faq_blk">
              {block.items.map((val, i) => {
                const refKey = `${blockIndex}-${i}`;
                return (
                  <div
                    className={`outer_faq ${
                      openAccordion[blockIndex] === i ? "open" : ""
                    }`}
                    key={refKey}
                    ref={(el) => (accordionRefs.current[refKey] = el)}
                  >
                    <div
                      className="accordion__header"
                      onClick={() => handleAccordionClick(blockIndex, i)}
                    >
                      <h4>{val.title}</h4>
                    </div>
                    <div className="accordion__details">
                      <div dangerouslySetInnerHTML={{ __html: val.content }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
