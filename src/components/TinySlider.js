import React from "react";
import { Helmet } from "react-helmet";

function TinySlider() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="templateuntree/TinySlider.css" />
        <link rel="stylesheet" href="templateuntree/style.css" />
        <link rel="stylesheet" href="templateuntree/aos.css" />
        <link rel="stylesheet" href="templateuntree/glightbox.min.css" />
        <link rel="stylesheet" href="templateuntree/flatpickr.min.css" />
        <link rel="stylesheet" href="templateuntree/fonts/icomoon/style.css" />
        <link
          rel="stylesheet"
          href="templateuntree/fonts/flaticon/font/flaticon.css"
        />
        <script src="js/custom.js"></script>
      </Helmet>
      {/* Footer Start */}
      <div
        className="section section-3"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between  mb-5">
            <div className="col-lg-5" data-aos="fade-up">
              <h2 className="heading mb-3">
                Discover Hundred of Travel Destinations
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <div
              className="col-lg-5 text-md-end"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div id="destination-controls">
                <span className="prev me-3" data-controls="prev">
                  <span className="icon-chevron-left" />
                </span>
                <span className="next" data-controls="next">
                  <span className="icon-chevron-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="destination-slider-wrap">
          <div className="destination-slider">
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$560</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$490</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$490</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-5.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-6.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$560</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-7.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$490</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img
                  src="assets/img/image/images/img-4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="price">$490</div>
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Paradise Beach, Palawan Island</a>
                </h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TinySlider;
