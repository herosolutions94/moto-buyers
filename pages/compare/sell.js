import React from "react";
import Slider from "react-slick";
const Sell = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="sec_sell">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>MotoBuyers: The Easiest Way to Sell Your Motorcycle!</h2>
          </div>
          <div className="sec_content">
            <p>
              Selling your motorcycle with MotoBuyers is simple, fast, and
              hassle-free. Get a fair offer, skip the stress, and sell your bike
              on your terms. We handle everything from start to finish, so you
              can cash out with ease!
            </p>
          </div>
          <Slider {...settings}>
            <div className="item">
              <div className="inner">
                <div className="image">
                  <img src="/images/sell-1.png" alt="" />
                </div>
                <div className="content">
                  <h5>Book Value Isn’t Everything</h5>
                  <p>
                    Some people might believe their motorcycle is worth more
                    based on online “book values.” While those numbers can be
                    helpful as a .......
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="image">
                  <img src="/images/sell-2.png" alt="" />
                </div>
                <div className="content">
                  <h5>Your Loan Balance vs. Bike Value</h5>
                  <p>
                    Still paying off your motorcycle? It’s important to
                    understand that your loan balance doesn’t determine your
                    bike’s value.......
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="image">
                  <img src="/images/sell-3.png" alt="" />
                </div>
                <div className="content">
                  <h5>Wishing for More?</h5>
                  <p>
                    It’s natural to hope for the highest possible amount when
                    selling your motorcycle. Some sellers think they can get
                    more through.........
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="image">
                  <img src="/images/ag-1.png" alt="Over $1.2 Billion" />
                </div>
                <div className="content">
                  <h5>Book Value Isn’t Everything</h5>
                  <p>
                    Some people might believe their motorcycle is worth more
                    based on online “book values.” While those numbers can be
                    helpful as a .......
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Sell;
