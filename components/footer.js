import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flexRow">
            <div className="col">
              <div className="footerLogo">
                <Link href="index.php">
                  <img src="images/footer.png" alt="" />
                </Link>
              </div>
              <ul className="infoLst">
                <li>
                  <img src="images\location.svg" alt="" />
                  <Link href="">
                    7696 Broadway, Suite CLemon Grove, CA 91945
                  </Link>
                </li>
                <li>
                  <img src="images\envelope.svg" alt="" />
                  <Link href="mailto:jetmeans@gmail.com">
                    abcinfo@gmail.com
                  </Link>
                </li>
                <li>
                  <img src="images\phone.svg" alt="" />
                  <Link href="tel:(734) 219-2298">(734) 219-86796</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Quick Links</h4>
              <ul className="fst">
                <li>
                  <Link href="index.php"> Home</Link>
                </li>
                <li>
                  <Link href="about.php">How It Works</Link>
                </li>
                <li>
                  <Link href="service.php">Compare Moto Buyers</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>More Links</h4>
              <ul className="fst">
                <li>
                  <Link href="index.php">Contact Us</Link>
                </li>
                <li>
                  <Link href="about.php">FAQ</Link>
                </li>
                <li>
                  <Link href="service.php">Appointment Tips</Link>
                </li>

                <li>
                  <Link href="contact.php">Our Appraisals</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Signup for Newsletters</h4>
              <form
                action="newsletter"
                method="post"
                autoComplete="off"
                className=""
              >
                <label htmlFor="email">
                  Copy these components directly into your favorite's platforms.
                </label>
                <div className="txtGrp relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="txtBox"
                    placeholder="Enter your email address"
                  />
                  <button type="submit">
                    <img src="images/mail.svg" alt="" />
                  </button>
                </div>
              </form>
              <div className="flex">
                <h4>Follow Us</h4>
                <ul className="social flex">
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="images/social-instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="images/social-facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="images/social-youtube.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="images/social-twitter.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright relative">
            <div className="contain">
              <div className="inner">
                <p>Copyright © Moto Buyers</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
