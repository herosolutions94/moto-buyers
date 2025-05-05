import Link from "next/link";
import React from "react";

const Checklist = () => {
  return (
    <>
      <section className="sec_account">
        <div className="contain">
          <div className="heading_area">
            <div className="sec-heading">
              <h2>Your Quick Checklist for a Smooth Sale</h2>
            </div>
            <div className="cta1">
              <Link href="/thanks" className="site_btn round">
                GET YOUR OFFER NOW
              </Link>
            </div>
          </div>

          <div className="flex flex_row">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ac-1.png" alt="" />
                </div>
                <div className="content">
                  <h5>Valid Photo ID</h5>
                  <p>
                    Bring along a government-issued ID (like your driver’s
                    license or passport) so we can verify your identity
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ac-2.png" alt="s" />
                </div>
                <div className="content">
                  <h5>Motorcycle Registration</h5>
                  <p>
                    Your current registration helps us confirm the details of
                    your bike, making the offer and sale process quicker and
                    smoother.
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="/images/ac-3.png" alt="" />
                </div>
                <div className="content">
                  <h5>Title (If Available)</h5>
                  <p>
                    Don’t worry if you can’t find your title or if it’s held by
                    your lender — we can still move forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="/images/ac-4.png" alt="" />
                </div>
                <div className="content">
                  <h5>All Keys and Remotes</h5>
                  <p>
                    If you have multiple keys or remotes for your motorcycle,
                    bring them along! Extra sets are a plus.
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ac-5.png" alt="" />
                </div>
                <div className="content">
                  <h5>Manual and Booklets</h5>
                  <p>
                    If you still have the original owner’s manual or any
                    brochures that came with your motorcycle, bring them along.
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ac-6.png" alt="" />
                </div>
                <div className="content">
                  <h5>Maintenance Records</h5>
                  <p>
                    Got a history of oil changes, tune-ups, or major repairs?
                    Bring those records. It will help to boost its value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checklist;
