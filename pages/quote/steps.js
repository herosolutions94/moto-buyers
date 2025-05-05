import React from "react";

const Steps = () => {
  return (
    <>
      <section id="sec_steps">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>How We Quote Your Motorcycle</h2>
          </div>
          <div className="sec_content">
            <p>
              When you share the essential details about your bike — including
              the year, make, model, mileage, and condition — our team steps in
              to determine its true market value. Here’s our process
            </p>
          </div>
          <div className="flex">
            <div className="col col1">
              <div className="inner">
                <div className="head">
                  <h4>Step 1</h4>
                </div>
                <h2>Establishing the Trade-In Baseline</h2>
                <p>
                  We review recent auction and trade-in trends to understand
                  what dealers are paying for similar motorcycles. This baseline
                  considers industry costs like reconditioning, transportation,
                  fees, and the typical margins a wholesaler expects.
                </p>
              </div>
            </div>
            <div className="col col2">
              <div className="image_o">
                <img src="/images/step-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="col col1">
              <div className="inner">
                <div className="head">
                  <h4>Step 2</h4>
                </div>
                <h2>Assessing Private Market Value</h2>
                <p>
                  Book values can be generic, so we dig deeper by analyzing
                  local listings and recent private sale prices for bikes like
                  yours. This research gives us a realistic picture of your
                  motorcycle’s retail potential, helping us gauge how
                  competitive the market is right now.
                </p>
              </div>
            </div>
            <div className="col col2">
              <div className="image_o">
                <img src="/images/step-2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="col col1">
              <div className="inner">
                <div className="head">
                  <h4>Step 3</h4>
                </div>
                <h2>Delivering Your Initial Offer</h2>
                <p>
                  Using both the trade-in baseline and the private market
                  analysis, we craft an initial quote that falls between these
                  two values. Where your offer lands depends on your bike’s
                  condition, demand, and overall marketability.
                </p>
              </div>
            </div>
            <div className="col col2">
              <div className="image_o">
                <img src="/images/step-3.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="col col1">
              <div className="inner">
                <div className="head">
                  <h4>Step 4</h4>
                </div>
                <h2>Finalizing the Offer with an Inspection</h2>
                <p>
                  Your initial quote is based on the data you provide, but
                  before we finalize, our appraiser will conduct a brief
                  inspection (and possibly a test ride). This helps us verify
                  details and adjust the offer if necessary.
                </p>
              </div>
            </div>
            <div className="col col2">
              <div className="image_o">
                <img src="/images/step-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
