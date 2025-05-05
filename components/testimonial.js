import React from "react";
import Testimonials from "./testimonials";
const Testimonial = ({ className = "" }) => {
  return (
    <>
      {/* ==== testimonials ======== */}
      <section className={`testimonials ${className}`}>
        <div className="contain">
          <div className="sec_center_heading">
            <h2>Trusted by Real Riders</h2>
          </div>
          <div className="sec_content">
            <p>
              Thousands of motorcycle owners have trusted MotoBuyers for a fast,
              fair, and hassle-free selling experience. Don’t just take our word
              for it — see what real riders are saying!
            </p>
          </div>
          <div className="testi">
            <Testimonials />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
