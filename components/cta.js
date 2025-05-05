import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <section className="sec_cta">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="headings">
                <h2>Ready to Sell Your Motorcycle?</h2>
              </div>
              <div className="content">
                <p>
                  We make it easy — get a real offer, fast pickup, and instant
                  payment. Your ride deserves a smooth, fair sale — and we are
                  here to make it happen.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="cta">
                <Link href="" className="site_btn round white">
                  Get Your Offer Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
