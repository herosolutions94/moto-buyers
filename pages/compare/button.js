import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <>
      <div className="sec_button">
        <p>
          How does MotoBuyers compare to other methods when it's time to sell
          your motorcycle? Check out the table below to see how we offer a
          faster, easier, and more secure way to sell your bike, compared to
          other selling options.
        </p>
        <div className="cta">
          <Link href="" className="site_btn round">
            SELL YOUR BIKE NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Button;
