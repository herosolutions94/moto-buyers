import React from "react";

const Choose = () => {
  return (
    <>
      <section className="choose_us">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="sec_content">
            <p>
              Thousands of motorcycle owners have trusted MotoBuyers for a fast,
              fair, and hassle-free selling experience. Don’t just take our word
              for it — see what real riders are saying!
            </p>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ch-1.png" alt="" />
                </div>
                <div className="content">
                  <h5>Safe and Secure</h5>
                  <p>Your information and transaction are always protected.</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ch-2.png" alt="" />
                </div>
                <div className="content">
                  <h5>No Lowball Offers</h5>
                  <p>We believe in fair, market-based pricing — no games.</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ch-3.png" alt="" />
                </div>
                <div className="content">
                  <h5>We Handle the Paperwork</h5>
                  <p>
                    Leave the documents to us. You just focus on getting paid.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/ch-4.png" alt="" />
                </div>
                <div className="content">
                  <h5>Customer Satisfaction</h5>
                  <p>Our sellers love us — and you will too.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
