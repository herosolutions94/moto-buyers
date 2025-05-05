import Link from "next/link";
import React from "react";

const SmoothRide = () => {
  return (
    <>
      <section className="sec_smooth">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>Smooth Ride to Selling Your Motorcycle</h2>
          </div>

          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tick.svg" alt="" />
                </div>
                <div className="content">
                  <h5>Quick Motorcycle Check</h5>
                  <p>
                    Our appraiser will quickly review your motorcycle based on
                    the details you shared. This includes a short inspection and
                    maybe a test ride to make sure everything matches.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tick.svg" alt="" />
                </div>
                <div className="content">
                  <h5>Confirm Your Best Offer</h5>
                  <p>
                    Based on the inspection, we'll confirm or adjust your
                    initial quote. Many times, the final offer is the same or
                    even higher if you forgot to mention any special upgrades
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tick.svg" alt="" />
                </div>
                <div className="content">
                  <h5>Bring the Essentials</h5>
                  <p>
                    Bring your ID, your bike’s title (or loan info if
                    applicable), keys, and any accessories. This helps us
                    complete your sale quickly and smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tick.svg" alt="" />
                </div>
                <div className="content">
                  <h5>Get Paid Instantly and Hassle-Free</h5>
                  <p>
                    Once you accept the offer, we’ll take care of all the
                    paperwork, hand you the payment, and you're done! Not ready
                    yet? No problem — think about it and come back whenever
                    you're read.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cta">
            <Link href="" className="site_btn round">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmoothRide;
