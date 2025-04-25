import React, { useState } from "react";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
const Banner = () => {
  const [videoPopup, setVideoPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("plate");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {/* ===== banner ==== */}
      <section className="banner">
        <div className="contain">
          <div className="sec_center_heading">
            <h1>Sell Your Motorcycle Just Got Easier</h1>
          </div>
          <div className="sec_content">
            <p>
              Answer a few questions about your motorcycle to get a customized
              offer from one of our appraisers.
            </p>
          </div>
          <div className="flex">
            <div className="col1">
              <div
                className="vidBlk"
                style={{ backgroundImage: "url('images/banner-1.png')" }}
              >
                <div
                  className="videoBtn fa-play popBtn"
                  data-popup="video"
                  onClick={() => setVideoPopup(true)}
                >
                  <img
                    src="images/fi-rr-play.svg"
                    alt="Play"
                    class="playIcon"
                  />
                </div>
              </div>
            </div>
            <div className="col2">
              <div className="form">
                <ul className="tabs">
                  <li className={activeTab === "plate" ? "active" : ""}>
                    <a href="#!" onClick={() => handleTab("plate")}>
                      VIN or Plate
                    </a>
                  </li>
                  <li className={activeTab === "make-model" ? "active" : ""}>
                    <a
                      href="#!"
                      className=""
                      onClick={() => handleTab("make-model")}
                    >
                      Make & Model
                    </a>
                  </li>
                </ul>
                {activeTab === "plate" && <Tab1 product="plate" />}
                {activeTab === "make-model" && <Tab2 product="make-model" />}
              </div>
            </div>
          </div>
        </div>
      </section>
      {videoPopup === true ? (
        <div className="popup" style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div
                className="crosBtn"
                onClick={() => setVideoPopup(false)}
              ></div>

              <div class="contain">
                <div class=" inside">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/G3k0qlLag74"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
