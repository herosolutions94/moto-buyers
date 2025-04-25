import Link from "next/link";
import React from "react";

const Offers = () => {
  return (
    <>
      {/* =====  create_offers ======== */}
      <section className="create_offers">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>How we create your personalized offer</h2>
            <p>From VIN to value — our appraisal process is fair</p>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/offer-1.svg" alt="" />
                </div>
                <div className="content">
                  <h5>You enter your VIN or plate</h5>
                  <p>
                    Just enter your motorcycle’s VIN or license plate number.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/offer-2.svg" alt="" />
                </div>
                <div className="content">
                  <h5>We check ownership & condition history</h5>
                  <p>
                    We review your motorcycle’s history to ensure accurate
                    pricing.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/offer-3.svg" alt="" />
                </div>
                <div className="content">
                  <h5>We analyze current market demand & pricing</h5>
                  <p>
                    Our team compares your motorcycle with similar models
                    currently on the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/offer-4.svg" alt="" />
                </div>
                <div className="content">
                  <h5>You receive a real, ready-to-go offer</h5>
                  <p>
                    Get a personalized, no-obligation offer sent straight to
                    your inbox—ready when you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cta">
            <Link href="" className="site_btn white round">
              Learn more about our appraisals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
