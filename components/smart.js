import Link from "next/link";
import React from "react";
const Smart = ({ className = "" }) => {
  return (
    <>
      {/* ======= sell_smart_way ======= */}
      <section className={`sell_smart_way ${className}`}>
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="inner">
                <div className="sec_heading">
                  <h2>Ready to sell your motorcycle the smart way?</h2>
                </div>
                <div className="sec_content">
                  <p>
                    Whether you’ve got questions or you’re ready to get started,
                    we’re here to help.
                  </p>
                </div>
                <ul className="cta">
                  <li>
                    <Link href="" className="site_btn round">
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="site_btn round black">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="site_btn round white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col2">
              <div className="image_o">
                <img src="images/sell_smart_way.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smart;
