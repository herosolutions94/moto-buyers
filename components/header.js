import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [userDrop, setUserDrop] = useState(false);
  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };
  return (
    <header>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link href="/how_it_works" onClick={ToggleAction}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/compare" onClick={ToggleAction}>
                Compare Moto Buyers
              </Link>
            </li>
            <li className="drop">
              <Link href="" onClick={ToggleAction}>
                More
              </Link>
              <ul className="sub">
                <li>
                  <Link href="/appointment" onClick={ToggleAction}>
                    Appointment tips
                  </Link>
                </li>
                <li>
                  <Link href="/quote" onClick={ToggleAction}>
                    Our Quote
                  </Link>
                </li>
                <li>
                  <Link href="/FAQs" onClick={ToggleAction}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={ToggleAction}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="" onClick={ToggleAction} className="site_btn round">
                Get my Offer
              </Link>
            </li>
          </ul>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
