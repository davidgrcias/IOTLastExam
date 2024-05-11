import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>

        <script src="js/main.js"></script>
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
                Welcome to <span className="text-primary">Nirvana</span>
              </h1>
              <p className="mb-4">
              We are five students currently taking the final exam for the Intro to Internet Technology course. 
              We have been assigned a task to create an informative website themed around tourism in Bali.

              </p>
              <p className="mb-4">
              Calvin, who is proficient in design, is in charge of the website layout. David, who loves history and culture,
               is adding information about Bali's history and traditions. Sube is compiling recommendations for hidden gems in Bali.
                Finally, Hugo and Vilbert, who is a talented writer, is filling the website with engaging stories.
              </p>
              <p className="mb-4">
              Through Nirvana, we hope to provide a comprehensive and inspirational guide for travelers who want to experience the beauty of Bali. With hard work and collaboration, we hope this website can be something beneficial for many people.
              </p>
             <p className="mb-4">
             We have worked hard for several weeks, combining our knowledge and interests to produce an informative website. After the launch of our website, Nirvana, finally our final exam for the Intro to Internet Technology course is done.
             </p>
             
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Travel Guide Start */}
      <div className="container-fluid guide py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Our Team</h5>
            <h1 className="mb-0">Meet Our Members</h1>
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
                      href = "http://tiktok.com/davidgtech"
                    >
                      <i className="fab fa-tiktok" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "https://www.instagram.com/davidgrcias/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href  = "https://www.linkedin.com/in/davidgrcias/"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">David Garcia Saragi</h4>
                    <p className="mb-0">Team Leader</p>
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
                      href = "https://www.facebook.com/calvin.yoananda"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "https://www.tiktok.com/@kayoo_elaina"
                    >
                      <i className="fab fa-tiktok" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "https://www.instagram.com/kayoo.h264?igsh=ZzN2b3Bxc3RyZ212"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href ="https://www.linkedin.com/in/calvin-yoananda/"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Calvin Yoananda</h4>
                    <p className="mb-0">Member</p>
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
                      href="https://www.facebook.com/v.jhovan.9?mibextid=ZbWKwL"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href ="https://www.tiktok.com/@vilbertjhovantan"
                    >
                      <i className="fab fa-tiktok" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "https://www.instagram.com/vjhovantan/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "https://id.linkedin.com/in/vilbert-jhovan-68409824b"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Vilbert Jhovan</h4>
                    <p className="mb-0">Member</p>
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
                      href ="https://www.facebook.com/edric.hugo.5/"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href ="https://www.tiktok.com/@waswiswosuhuy"
                    >
                      <i className="fab fa-tiktok" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href ="https://www.instagram.com/edrichugoo/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "http://www.linkedin.com/in/edrichugo"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Edric Hugo</h4>
                    <p className="mb-0">Member</p>
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
                      href ="https://www.facebook.com/samuel.nicholas.3998?mibextid=ZbWKwL"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href ="https://www.tiktok.com/@nicholassubekti?_t=8mG4Jmlk7Rh&_r=1"
                    >
                      <i className="fab fa-tiktok" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href ="https://www.instagram.com/nicholassubekti?igsh=MTg1cGZoaHFrNnd3aw=="
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href = "https://www.linkedin.com/in/samuel-nicholas-subekti-60020228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Samuel Nicholas Subekti</h4>
                    <p className="mb-0">Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Travel Guide End */}

      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Testimonial</h5>
            <h1 className="mb-0">Our Clients Say!!!</h1>
          </div>
          <div className="testimonial-carousel owl-carousel">
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="img/testimonial-1.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="img/testimonial-2.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="img/testimonial-3.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="img/testimonial-4.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default About;
