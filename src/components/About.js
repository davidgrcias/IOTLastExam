import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
      </Helmet>
      {/* About Start */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="h-100"
                style={{
                  border: "50px solid",
                  borderColor: "transparent #13357B transparent #13357B",
                }}
              >
                <img
                  src="assets/img/about-img.jpg"
                  className="img-fluid w-100 h-100"
                  alt
                />
              </div>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)",
              }}
            >
              <h5 className="section-about-title pe-3">About Us</h5>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Travela</span>
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, dolorum, doloribus sunt dicta, officia voluptatibus
                libero necessitatibus natus impedit quam ullam assumenda? Id
                atque iste consectetur. Commodi odit ab saepe!
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quos voluptatem suscipit neque enim, doloribus ipsum
                rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam
                perferendis provident placeat molestiae quia?
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Travel Guide Start */}
      <div className="container-fluid guide py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Travel Guide</h5>
            <h1 className="mb-0">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="assets/img/guide-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="assets/img/guide-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="assets/img/guide-3.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="assets/img/guide-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Travel Guide End */}
    </div>
  );
}

export default About;
