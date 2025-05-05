import React from "react";

const Works = () => {
  return (
    <>
      <section className="sec_works">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>How It Works</h2>
          </div>
          <div className="flex">
            <div className="cols col1">
              <div className="inner">
                <div className="top_area">
                  <div className="num">
                    <p>01</p>
                  </div>
                  <div className="headings">
                    <h4>Tell Us About Your Motorcycle</h4>
                  </div>
                </div>
                <div className="text">
                  <p>
                    Start by giving us a few key details about your motorcycle
                    like Make, model, and year Mileage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="photo">
                <div className="image_o">
                  <img src="images/work-1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="cols col1">
              <div className="inner">
                <div className="top_area">
                  <div className="num">
                    <p>02</p>
                  </div>
                  <div className="headings">
                    <h4>Get a Personalized Offer</h4>
                  </div>
                </div>
                <div className="text">
                  <p>
                    Once we have your info, one of our expert appraisers will
                    evaluate your bike and send you a customized offer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="photo">
                <div className="image_o">
                  <img src="images/work-2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="cols col1">
              <div className="inner">
                <div className="top_area">
                  <div className="num">
                    <p>03</p>
                  </div>
                  <div className="headings">
                    <h4>From Quote to Cash — All in Record Time</h4>
                  </div>
                </div>
                <div className="text">
                  <p>
                    No long waits. No confusion. Just a smooth and speedy sale
                  </p>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="photo">
                <div className="image_o">
                  <img src="images/work-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="cols col1">
              <div className="inner">
                <div className="top_area">
                  <div className="num">
                    <p>04</p>
                  </div>
                  <div className="headings">
                    <h4>We Pick It Up </h4>
                  </div>
                </div>
                <div className="text">
                  <p>
                    Our pickup is free and includes a quick inspection to verify
                    the bike's condition.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="photo">
                <div className="image_o">
                  <img src="images/work-4.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
