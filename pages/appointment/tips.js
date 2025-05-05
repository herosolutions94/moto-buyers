import React from "react";

const Tips = () => {
  return (
    <>
      <section className="tips">
        <div className="contain">
          <div className="flex">
            <div className="cols">
              <div className="inner_first">
                <h2>Tips to Make Your Visit Even Easier</h2>
                <p>
                  We want to ensure your visit is as smooth and stress-free as
                  possible. Here are a few simple things you can do to help make
                  the process faster and easier.
                </p>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tip-1.png" alt="" />
                </div>
                <div className="content">
                  <h5>Clear Out Personal Items</h5>
                  <p>
                    Ensure all personal belongings are removed from your car,
                    including parking permits and garage openers.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tip-2.png" alt="" />
                </div>
                <div className="content">
                  <h5>No Need for a Clean-Up</h5>
                  <p>
                    Don’t worry about washing or detailing your car – we’ll
                    handle that during the process.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/tip-3.png" alt="" />
                </div>
                <div className="content">
                  <h5>Check Title Requirements</h5>
                  <p>
                    If your title has two names, both may need to be present.
                    Not sure? Give us a call, and we’ll assist you.
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

export default Tips;
