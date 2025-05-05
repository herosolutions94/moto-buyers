import React from "react";

const SubBanner = ({ data }) => {
  return (
    <>
      <section className="sub_banner">
        <div className="contain">
          <div className="inner">
            <div className="heading">
              <h2>{data.heading}</h2>
            </div>
            <div className="text">
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubBanner;
