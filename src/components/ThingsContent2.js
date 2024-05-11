import React from "react";
import { Helmet } from "react-helmet";
import foot from "./Image/foots.jpg"

function ThingsContent2() {
  return (
    <>
      {/* Footer Start */}

      <div className="section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0"> 
              <img
                src={foot}
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <h2 className="heading mb-5">
                Frequently Asked <br /> Questions
              </h2>
              <div className="custom-accordion" id="accordion_1">
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                    What are the must-visit attractions in Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                    Must-visit attractions in Bali include the iconic Uluwatu Temple, the breathtaking rice terraces of Tegallalang, and the vibrant Ubud Monkey Forest.
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What are the best activities to experience in Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                    Bali offers a plethora of activities, from surfing in Kuta to snorkeling in the pristine waters of Nusa Penida, exploring the artistic community of Ubud, or trekking up Mount Batur to witness a stunning sunrise..
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is the best time of year to visit Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                    The best time to visit Bali is during the dry season, which typically spans from April to October, when the weather is sunny and rainfall is minimal, making it ideal for outdoor activities and sightseeing.
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What are the traditional dishes and culinary experiences not to miss in Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                    Traditional Balinese dishes not to miss include Nasi Goreng (fried rice), Mie Goreng (fried noodles), Babi Guling (suckling pig), and the iconic Balinese satay. Don't forget to indulge in local delicacies like Pisang Goreng (banana fritters) and refreshing coconut water.
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThingsContent2;
