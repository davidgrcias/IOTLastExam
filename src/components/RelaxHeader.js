import React from "react";
function RelaxHeader() {
  return (
    <>
      {/* Footer Start */}
      <div className="hero overlay">
        <div className="img-bg rellax">
          <img
            src="assets/img/image/images/hero_1.jpg"
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">
                It's a Big World Out There, Go Explore
              </h1>
              <p className="mb-5" data-aos="fade-up">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div data-aos="fade-up">
                <a
                  href="https://www.youtube.com/watch?v=BFS9n4B_2xA"
                  className="play-button align-items-center d-flex glightbox3"
                >
                  <span className="icon-button me-3">
                    <span className="icon-play" />
                  </span>
                  <span className="caption">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelaxHeader;
