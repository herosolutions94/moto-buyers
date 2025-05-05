import React from "react";

const Agree = () => {
  return (
    <>
      <section className="sec_agree">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>What If You Don’t Agree with Our Offer?</h2>
          </div>
          <div className="sec_content">
            <p>
              We understand that you might have a different idea of what your
              motorcycle is worth. If our offer doesn’t match your expectations,
              here are a few common reasons why there could be a difference
            </p>
          </div>
          <div className="flex flex_row">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="/images/ag-1.png" alt="Over $1.2 Billion" />
                </div>
                <div className="content">
                  <h5>Book Value Isn’t Everything</h5>
                  <p>
                    Some people might believe their motorcycle is worth more
                    based on online “book values.” While those numbers can be
                    helpful as a .......
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="/images/ag-2.png" alt="Quick Funding" />
                </div>
                <div className="content">
                  <h5>Your Loan Balance vs. Bike Value</h5>
                  <p>
                    Still paying off your motorcycle? It’s important to
                    understand that your loan balance doesn’t determine your
                    bike’s value.......
                  </p>
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="/images/ag-3.png" alt="50,000+" />
                </div>
                <div className="content">
                  <h5>Wishing for More?</h5>
                  <p>
                    It’s natural to hope for the highest possible amount when
                    selling your motorcycle. Some sellers think they can get
                    more through.........
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

export default Agree;
