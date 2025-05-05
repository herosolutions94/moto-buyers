import Link from "next/link";
import React from "react";

const Ride = () => {
  return (
    <>
      <section className="sec_ride">
        <div className="contain">
          <div className="flex">
            <div className="cols col1">
              <div className="inner">
                <h2>
                  Ready to Ride Forward? Get Your Free Motorcycle Quote Today!
                </h2>
                <p>
                  We hope this comparison made it clear why MotoBuyers is the
                  easiest and most rewarding way to sell your motorcycle. From
                  our lightning-fast quote process to handling all the paperwork
                  and payment, we take care of everything—so you can skip the
                  stress and ride off with cash in hand. No low offers. No
                  headaches. Just a smooth and smart way to sell.
                </p>
                <ul className="cta">
                  <li>
                    <Link href="" className="site_btn round">
                      SELL YOUR BIKE NOW
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="site_btn round black">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cols col2">
              <div className="image_o">
                <img src="images/ride.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ride;
