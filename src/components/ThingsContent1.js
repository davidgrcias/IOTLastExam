import React from "react";
import sawah from "./Image/sawahh.jpg";
import sawah1 from "./Image/sawah1.jpg";
import food from "./Image/food.png";
import foto from "./Image/foto.png";
import mount from "./Image/mounts.png";
import pura from "./Image/pura.png";

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
                      src={sawah1}
                      alt="Image"
                      className="img-fluid rellax "
                    />
                  </div>
                  <div
                    className="image-stack__item image-stack__item--top"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-rellax-percentage="0.1"
                  >
                    <img src={sawah} alt="Image" className="img-fluid rellax" />
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
                    Bali's Rice Terraces: Exploring Ubud's and Jatiluwih's
                    Terraced 
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={200}>
                    Immerse yourself in the stunning beauty of Bali's rice
                    terraces in Ubud and Jatiluwih. In Ubud, the lush greenery
                    of the terraced rice fields provides a serene backdrop to
                    your adventures. Explore the intricate network of paths that
                    wind through the fields, offering breathtaking
                    views at every turn.
                  </p>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Jatiluwih, acknowledged as a UNESCO World Heritage Site,
                    displays some of Bali's most stunning terraced landscapes.
                    Exploring these terraces offers not just stunning views, but
                    also a glimpse into the sustainable farming practices that
                    have sustained Bali's communities for generations.
                  </p>
                  <p
                    className="my-4"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  ></p>
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
                  Bali Terraces's <span className="d-block">Facilities</span>
                  </h2>
                  <p>
                    Jatiluwih's facilities provide an authentic Balinese
                    experience amidst stunning rice terraces, offering
                    traditional accommodations, guided tours, spas, and local
                    cuisine for a memorable stay.
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
                        <img src={food} alt="Image" className="img-fluid" />
                      </span>
                      <div>
                        <h3>Food Services</h3>
                        <p>
                          Experience a wide array of culinary delights to
                          satisfy your taste buds.
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
                        <img src={foto} alt="Image" className="img-fluid" />
                      </span>
                      <div>
                        <h3>Photo spots</h3>
                        <p>
                          Explore beauty spots for capturing memorable moments.
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
                        <img src={mount} alt="Image" className="img-fluid" />
                      </span>
                      <div>
                        <h3>Outdoor Adventure Activities </h3>
                        <p>
                          Embark on exciting outdoor adventures surrounded by
                          the beauty of nature.
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
                        <img src={pura} alt="Image" className="img-fluid" />
                      </span>
                      <div>
                        <h3>Culture Tourism</h3>
                        <p>Explore diverse cultural heritage</p>
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
