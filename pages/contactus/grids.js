import Link from "next/link";
import React from "react";
const Grids = () => {
  return (
    <>
      <section id="contact_sec">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/icon-map-marker.svg" alt="" />
                </div>
                <div className="cntnt">
                  <h5>Address</h5>
                  <p>Lorance Road 542B, Tailstoi Town</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/icon-envelope-fill.svg" alt="" />
                </div>
                <div className="cntnt">
                  <h5>Email</h5>
                  <Link href="">abcinfo@gmail.com</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/icon-phone.svg" alt="" />
                </div>
                <div className="cntnt">
                  <h5>Phone</h5>
                  <Link href="">(734) 219-86796</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grids;
