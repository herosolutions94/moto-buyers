import React from "react";

const Tab1 = () => {
  return (
    <>
      <form action="">
        <div className="row">
          <div className="col-md-12">
            <div className="txtGrp">
              <input
                type="text"
                className="input"
                placeholder="Enter Your VIN"
              />
            </div>
          </div>

          <div className="col-md-12 text-center my-2">
            <div className="or-divider">
              <span>OR</span>
            </div>
          </div>

          <div className="col-md-12">
            <div className="txtGrp">
              <input
                type="text"
                className="input"
                placeholder="License Plate"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="txtGrp">
              <input type="text" className="input" placeholder="State" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="cta">
              <button className="site_btn round">Get your offer</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Tab1;
