import React from "react";

const Form = () => {
  return (
    <>
      <section className="contact-form">
        <div className="contain">
          <div className="sec_center_heading">
            <h2>Let’s Start a Conversation</h2>
          </div>
          <div className="flex">
            <div className="cols col1">
              <div className="text">
                <h3>Ask How can We Help You</h3>
                <div className="block">
                  <h5>See How Our Platform Works</h5>
                  <p>
                    Curious about what it’s like to sell your motorcycle with
                    us? Explore how easy, fast, and hassle-free the experience
                    can be.
                  </p>
                </div>
                <div className="block">
                  <h5>Trusted by Riders</h5>
                  <p>
                    We’ve helped countless motorcycle owners sell their bikes
                    with confidence. From instant quotes to final payment, we
                    handle it all—so you don’t have to.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols col2">
              <div className="inner">
                <div className="sec_heading">
                  <h4>Let's Start</h4>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="txtGrp">
                        <input
                          type="text"
                          className="input"
                          required
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="txtGrp">
                        <input
                          type="email"
                          className="input"
                          required
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="txtGrp">
                        <input
                          type="text"
                          className="input"
                          required
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="txtGrp">
                        <input
                          type="text"
                          className="input"
                          required
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="txtGrp">
                        <textarea
                          className="input"
                          rows="4"
                          required
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="btn-box">
                        <button type="submit" className="site_btn round">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
