import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(`New rating is ${newRating}`);
  };
  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <div className="inner">
            <div className="image">
              <img src="images/testimonial-1.jpg" />
            </div>

            <div className="profile">
              <div className="name">
                <h5>Jack Albert</h5>
              </div>
              <div className="text">
                <p>
                  “Beyond the course, including a well-appointed clubhouse that
                  serves as a warm and inviting hub for members and guests
                  alike.”
                </p>
              </div>
              <div className="rating">
                <div className="google">
                  <img src="images/google.png" alt="" />
                  <p>3 weeks ago</p>
                </div>
                <div className="stars">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={17}
                    value={5}
                    activeColor="#ffd700"
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                    filledIcon={<i className="fas fa-star"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="image">
              <img src="images/testimonial-1.jpg" />
            </div>

            <div className="profile">
              <div className="name">
                <h5>Jack Albert</h5>
              </div>
              <div className="text">
                <p>
                  “Beyond the course, including a well-appointed clubhouse that
                  serves as a warm and inviting hub for members and guests
                  alike.”
                </p>
              </div>
              <div className="rating">
                <div className="google">
                  <img src="images/google.png" alt="" />
                  <p>3 weeks ago</p>
                </div>
                <div className="stars">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={17}
                    value={5}
                    activeColor="#ffd700"
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                    filledIcon={<i className="fas fa-star"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="image">
              <img src="images/testimonial-1.jpg" />
            </div>

            <div className="profile">
              <div className="name">
                <h5>Jack Albert</h5>
              </div>
              <div className="text">
                <p>
                  “Beyond the course, including a well-appointed clubhouse that
                  serves as a warm and inviting hub for members and guests
                  alike.”
                </p>
              </div>
              <div className="rating">
                <div className="google">
                  <img src="images/google.png" alt="" />
                  <p>3 weeks ago</p>
                </div>
                <div className="stars">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={17}
                    value={5}
                    activeColor="#ffd700"
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                    filledIcon={<i className="fas fa-star"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
