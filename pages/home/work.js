import React from "react";

const Work = () => {
  return (
    <>
      {/*======= how it works ======== */}
      <section className="how_works">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>How It Works</h2>
          </div>
          <div className="flex">
            <div className="cols col1">
              <div className="inner">
                <ul>
                  <li>
                    <div className="block">
                      <div className="image">
                        <img src="images/discount.svg" alt="" />
                      </div>
                      <div className="content">
                        <h5>Get your Offer</h5>
                      </div>
                    </div>
                    <div className="num">
                      <p>01</p>
                    </div>
                  </li>
                  <li>
                    <div className="block">
                      <div className="image">
                        <img src="images/event.svg" alt="" />
                      </div>
                      <div className="content">
                        <h5>Get your Offer</h5>
                      </div>
                    </div>
                    <div className="num">
                      <p>02</p>
                    </div>
                  </li>
                  <li>
                    <div className="block">
                      <div className="image">
                        <img src="images/payment.svg" alt="" />
                      </div>
                      <div className="content">
                        <h5>Get your Offer</h5>
                      </div>
                    </div>
                    <div className="num">
                      <p>03</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cols col2">
              <div className="inside">
                <div className="block1">
                  <div className="image_o">
                    <img src="images/works.png" alt="" />
                  </div>
                </div>
                <div className="block2">
                  <h3>Get your Offer</h3>
                  <p>
                    Tell us about your motorcycle, and one of our motorcycle
                    appraisers will send you a customized quote
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

export default Work;
