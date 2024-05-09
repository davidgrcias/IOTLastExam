import React from "react";

function ThingsContent1() {
  return (
    <>
      {/* Footer Start */}
      <div>
        <div className="section section-2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
                <div className="image-stack mb-5 mb-lg-0">
                  <div
                    className="image-stack__item image-stack__item--bottom"
                    data-aos="fade-up"
                    data-aos-delay={900}
                    data-rellax-percentage="0.1"
                  >
                    <img
                      src="assets/img/image/images/img_v_1.jpg"
                      alt="Image"
                      className="img-fluid rellax "
                    />
                  </div>
                  <div
                    className="image-stack__item image-stack__item--top"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-rellax-percentage="0.5"
                  >
                    <img
                      src="assets/img/image/images/img_v_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-1">
                <div>
                  <h2
                    className="heading mb-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Explore All Corners of The World With Us
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={200}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p className="my-4" data-aos="fade-up" data-aos-delay={300}>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section service-section-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mb-4 mb-lg-0">
                <div className="heading-content" data-aos="fade-up">
                  <h2>
                    Our <span className="d-block">Services</span>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="my-4" data-aos="fade-up" data-aos-delay={300}>
                    <a href="#" className="btn btn-primary">
                      View All
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div
                    className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="service-1">
                      <span className="icon">
                        <img
                          src="assets/img/image/images/svg/01.svg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </span>
                      <div>
                        <h3>Tourism</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="service-1">
                      <span className="icon">
                        <img
                          src="assets/img/image/images/svg/02.svg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </span>
                      <div>
                        <h3>Package Tours</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="service-1">
                      <span className="icon">
                        <img
                          src="assets/img/image/images/svg/03.svg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </span>
                      <div>
                        <h3>Travel Insurance</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="service-1">
                      <span className="icon">
                        <img
                          src="assets/img/image/images/svg/04.svg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </span>
                      <div>
                        <h3>Airport Lounge Access</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThingsContent1;
