import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./HomeContent.css";
import ew from "./Image/1ew.jpg";
import ews from "./Image/2ew.jpg";
import ewz from "./Image/3ew.jpg";
import Des from "./Image/2 Beach Club.jpg";
import Des1 from "./Image/3ew.jpg";
import Des2 from "./Image/5 Architecture.jpg";
import Des3 from "./Image/4 Architechure.jpg";
import Des4 from "./Image/7 sengkedan.jpg";
import Des5 from "./Image/8 Greenmountain.jpg";
import Des6 from "./Image/The World Kintamani.jpg";
import Des7 from "./Image/The World AYANA Resort.jpg";
import tour from "./Image/historycal.jpeg";
import tour1 from "./Image/Family.jpg";
import tour2 from "./Image/Popular Travel Blogs (3) tanah lot.jpg";
import galery from "./Image/g1.jpg";
import galery1 from "./Image/g2.jpg";
import galery2 from "./Image/g3.jpg";
import galery3 from "./Image/g4.jpg";
import galery4 from "./Image/g5.jpg";
import galery5 from "./Image/g6.jpg";
import galery6 from "./Image/g7.jpg";
import galery7 from "./Image/g8.jpg";
import galery8 from "./Image/6 Beach.jpg";
import galery9 from "./Image/9 Sunset.jpg";
import garudawisnu from "./Image/gwk.jpg";
import { Link } from "react-router-dom";
import GuessGame from "./GuessGame";

import "./Home.css";

function HomeContent() {
  const unknown = [
    {
      id: 1,
      icon: "gopuram",
      judul: "Ancient Temple",
      description:
        "An ancient temple in Bali typically stands as a serene testament to the island's rich cultural and spiritual heritage. Constructed from volcanic stone, these temples feature intricate carvings of mythological beings and scenes from Hindu epics.",
    },
    {
      id: 2,
      icon: "umbrella-beach",
      judul: "Beach",
      description:
        "Bali's beaches offer a sanctuary for every type of traveler. Discover the rhythmic dance of the waves, the gentle whisper of palm trees, and the cultural richness that blooms at the water's edge. Each beach tells its own story of natural beauty and serenity, inviting visitors to unwind and soak in the tropical paradise.",
    },
    {
      id: 3,
      icon: "un",
      judul: "Canvas of the Gods",
      description:
        "The Vibrant Art Scene of Bali Bali is renowned for its intricate wood carvings, delicate batik fabric, and mesmerizing dance performances, each steeped in centuries of history yet vibrantly alive today. This exploration reveals how local artisans preserve their cultural heritage while embracing modern influences, creating a unique fusion that captivates art lovers worldwide.",
    },
    {
      id: 4,
      icon: "un",
      judul: "Dance of the Divine Protector",
      description:
        "The Barong dance is a visually stunning storytelling art form that depicts the eternal battle between good and evil. Performed with elaborate costumes and masks, the dance centers on the mythical creature Barong, a lion-like figure regarded as the king of spirits and a symbol of protection. Accompanied by gamelan music, the dancers convey a rich narrative of magic, myth, and moral lessons.",
    },
  ];
  useEffect(() => {
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init("IMhDqFBmKXuSUzNx1"); // Account Public Key
    } else {
      console.error("EmailJS not loaded");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMail = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (!window.emailjs) {
      return alert("EmailJS library is not loaded.");
    }

    const serviceID = "service_qloyq9q"; // Email Service ID
    const templateID = "template_zcvean9"; // Email Template ID

    window.emailjs
      .send(serviceID, templateID, formData)
      .then((response) => {
        alert("Email sent successfully!!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
        console.error("FAILED...", error);
      });
  };
  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
      </Helmet>
      <div>
        {/* Services Start */}
        <div className="container-fluid bg-light service py-5">
          <div className="container py-5">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
              <h5 className="section-title px-3">Bali</h5>
              <h1 className="mb-0">Description</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div className="service-content text-end">
                        <h5 className="mb-4">WorldWide Tours</h5>
                        <p className="mb-0">
                          Famous more for its enchanting allure than even
                          Indonesia itself, Bali stands as a beacon to travelers
                          from every corner of the globe. Its stunning beauty
                          draws countless tourists, eager to explore its lush
                          landscapes, rich culture, and pristine beaches.
                          Discover why Bali isn't just a place to visit—it's a
                          world to experience.
                        </p>
                      </div>
                      <div className="service-icon p-4">
                        <i className="fa fa-umbrella-beach fa-4x text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                      <div className="service-content text-end">
                        <h5 className="mb-4">Hotel Reservation</h5>
                        <p className="mb-0">
                          Nestled in paradise, our hotels in Bali offer more
                          than just a place to sleep. They are gateways to
                          luxury, comfort, and the authentic Balinese
                          hospitality that lingers in the heart of every
                          traveler. Whether it's a beachfront suite or a
                          secluded garden villa, find your perfect retreat and
                          immerse yourself in the serene beauty of Bali. Come,
                          let your next vacation be a tale of indulgence and
                          relaxation at one of Bali's prestigious hotels.
                        </p>
                      </div>
                      <div className="service-icon p-4">
                        <i className="fa fa-hotel fa-4x text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div className="service-content text-end">
                        <h5 className="mb-4">Travel Guides</h5>
                        <p className="mb-0">
                          Navigate the enchanting island of Bali with our expert
                          travel guides. From hidden gems to iconic landmarks,
                          our guides are crafted to help you discover the very
                          best of Bali. Whether you're seeking adventure,
                          relaxation, or cultural immersion, our travel guides
                          provide all the insights you need to create
                          unforgettable memories. Embark on your journey with
                          the ultimate companion—experience Bali like never
                          before.
                        </p>
                      </div>
                      <div className="service-icon p-4">
                        <i className="fa fa-user fa-4x text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div className="service-content text-end">
                        <h5 className="mb-4">Event Management</h5>
                        <p className="mb-0">
                          Travel with ease and comfort, knowing Bali is
                          dedicated to the safety of all its visitors. With
                          comprehensive security measures and a welcoming local
                          community, you can relax and enjoy the island's
                          stunning scenery and rich culture. Experience the
                          tranquil peace of Bali, where safety complements the
                          beauty, making every moment worry-free.
                        </p>
                      </div>
                      <div className="service-icon p-4">
                        <i className="fa fa-cog fa-4x text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div className="service-icon p-4">
                        <i className="fa fa-globe fa-4x text-primary" />
                      </div>
                      <div className="service-content">
                        <h5 className="mb-4">WorldWide Tours</h5>
                        <p className="mb-0">
                          Explore the enchanting allure of Bali, renowned not
                          only for its breathtaking beauty but as a destination
                          that transcends even the charm of Indonesia itself.
                          Bali beckons travelers from around the world, inviting
                          them to delve into its verdant landscapes, vibrant
                          culture, and immaculate beaches. Discover why Bali
                          isn’t merely a place to visit—it’s a realm to be
                          experienced.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div className="service-icon p-4">
                        <i className="fa fa-hotel fa-4x text-primary" />
                      </div>
                      <div className="service-content">
                        <h5 className="mb-4">Hotel Reservation</h5>
                        <p className="mb-0">
                          Tucked away in this paradise, our hotels in Bali
                          provide more than just accommodations; they offer
                          gateways to opulence, comfort, and genuine Balinese
                          hospitality that remains etched in the memories of
                          every visitor. Whether you prefer a beachfront suite
                          or a secluded garden villa, find your ideal sanctuary
                          and immerse yourself in Bali's tranquil beauty. Let
                          your next vacation be a story of luxury and relaxation
                          at one of Bali’s esteemed hotels.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div className="service-icon p-4">
                        <i className="fa fa-user fa-4x text-primary" />
                      </div>
                      <div className="service-content">
                        <h5 className="mb-4">Travel Guides</h5>
                        <p className="mb-0">
                          Embark on a journey across the magical island of Bali
                          with our expert travel guides. From undiscovered
                          treasures to celebrated attractions, our guides are
                          meticulously designed to help you uncover the best of
                          Bali. Whether your quest is for adventure,
                          tranquility, or cultural enrichment, our travel guides
                          equip you with all the knowledge needed to forge
                          indelible memories. Begin your adventure with the
                          ultimate companion—experience Bali as never before.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div className="service-icon p-4">
                        <i className="fa fa-cog fa-4x text-primary" />
                      </div>
                      <div className="service-content">
                        <h5 className="mb-4">Event Management</h5>
                        <p className="mb-0">
                          Travel with assurance and ease, secure in the
                          knowledge that Bali prioritizes the safety of all its
                          visitors. With robust security measures and a
                          hospitable local community, you can unwind and savor
                          the island’s spectacular vistas and rich heritage.
                          Experience the serene calm of Bali, where safety
                          enhances the allure, ensuring every moment is
                          blissfully carefree.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="text-center">
                  <a
                    className="btn btn-primary rounded-pill py-3 px-5 mt-2"
                    href
                  >
                    Service More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}
        {/* Carousel Start */}
        <div className="carousel-header">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={0}
                className="active"
              />
              <li data-bs-target="#carouselId" data-bs-slide-to={1} />
              <li data-bs-target="#carouselId" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src={ew} className="img-fluid" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: 3 }}
                    >
                      The Wonders of Bali Discover the Incredible
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      Let Bali inspire you
                    </h1>
                    <p className="mb-5 fs-5">
                      Immerse yourself in the serene landscapes, vibrant
                      culture, and breathtaking beaches. Bali isn't just a
                      destination; it's the beginning of a journey that stays
                      with you forever.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ews} className="img-fluid" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: 3 }}
                    >
                      Bali Revealed: Unlocking Its Wonders
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      Let Bali Ignite Your Inspiration
                    </h1>
                    <p className="mb-5 fs-5">
                      Embark on an adventure through Bali, where ancient
                      traditions meet modern delights. Discover the island's
                      rich tapestry of culture, nature, and spirituality in an
                      unforgettable exploration.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ewz} className="img-fluid" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: 3 }}
                    >
                      Origin Of Bali Nature
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      Let Bali Rejuvenate Your Body.
                    </h1>
                    <p className="mb-5 fs-5">
                      Bask in the Healing Energy of Bali: Let the Island
                      Rejuvenate Your Body and Soul.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon btn bg-primary"
                aria-hidden="false"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon btn bg-primary"
                aria-hidden="false"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carousel End */}

        {/* Navbar & Hero End */}

        {/* Destination Start */}
        <div className="container-fluid destination py-5">
          <div className="container py-5">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
              <h5 className="section-title px-3">Destination</h5>
              <h1 className="mb-0">Popular Destination</h1>
            </div>
            <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      All
                    </span>
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-xl-8">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="destination-img">
                            <img
                              className="img-fluid rounded w-100"
                              src={Des}
                              alt
                            />
                            <div className="destination-overlay p-4">
                              <h4 className="text-white mb-2 mt-3">
                                Beach Club
                              </h4>
                            </div>
                            <div className="search-icon">
                              <a href={Des} data-lightbox="destination-1">
                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="destination-img">
                            <img
                              className="img-fluid rounded w-100"
                              src={Des1}
                              alt
                            />
                            <div className="destination-overlay p-4">
                              <h4 className="text-white mb-2 mt-3">Bali Sea</h4>
                            </div>
                            <div className="search-icon">
                              <a href={Des1} data-lightbox="destination-2">
                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="destination-img">
                            <img
                              className="img-fluid rounded w-100"
                              src={Des2}
                              alt
                            />
                            <div className="destination-overlay p-4">
                              <h4 className="text-white mb-2 mt-3">
                                Handara Gate
                              </h4>
                            </div>
                            <div className="search-icon">
                              <a href={Des2} data-lightbox="destination-7">
                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="destination-img">
                            <img
                              className="img-fluid rounded w-100"
                              src={Des4}
                              alt
                            />
                            <div className="destination-overlay p-4">
                              <h4 className="text-white mb-2 mt-3">
                                Sengkedan
                              </h4>
                            </div>
                            <div className="search-icon">
                              <a href={Des4} data-lightbox="destination-8">
                                <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="destination-img h-100">
                        <img
                          className="img-fluid rounded w-100 h-100"
                          src={Des3}
                          style={{ objectFit: "cover", minHeight: 300 }}
                          alt
                        />
                        <div className="destination-overlay p-4">
                          <h4 className="text-white mb-2 mt-3">Pura Puseh</h4>
                        </div>
                        <div className="search-icon">
                          <a href={Des3} data-lightbox="destination-4">
                            <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src={Des5}
                          alt
                        />
                        <div className="destination-overlay p-4">
                          <h4 className="text-white mb-2 mt-3">
                            Kelingking Beach
                          </h4>
                        </div>
                        <div className="search-icon">
                          <a href={Des5} data-lightbox="destination-4">
                            <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src={Des6}
                          alt
                        />
                        <div className="destination-overlay p-4">
                          <h4 className="text-white mb-2 mt-3">Kintamani</h4>
                        </div>
                        <div className="search-icon">
                          <a href={Des6} data-lightbox="destination-5">
                            <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="destination-img">
                        <img
                          className="img-fluid rounded w-100"
                          src={Des7}
                          alt
                        />
                        <div className="destination-overlay p-4">
                          <h4 className="text-white mb-2 mt-3">AYANA Resort</h4>
                        </div>
                        <div className="search-icon">
                          <a href={Des7} data-lightbox="destination-6">
                            <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Destination End */}
        {/* Explore Tour Start IMPORTANT!!!!*/}
        <div className="container-fluid ExploreTour py-5">
          <div className="container py-5">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
              <h5 className="section-title px-3">Explore Tour</h5>
              <h1 className="mb-4">The Bali Island</h1>
              <p className="mb-0">
                With a focus on authentic and comprehensive experiences, Nirvana
                offers curated travel recommendations that combine popular
                destinations and hidden gems. Nirvana provides all the
                information you need to plan your dream vacation in Bali. Let us
                inspire and guide you through the wonders of Bali.
              </p>
            </div>
            <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="#NationalTab-1"
                  >
                    <span className="text-dark" style={{ width: 250 }}>
                      National Tour Category
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="NationalTab-1"
                  className="tab-pane fade show p-0 active"
                >
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                      <div className="national-item">
                        <img
                          src={Des7}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                        />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">
                              Weekend Tour
                            </h5>
                            <Link
                              to="/tour/weekend"
                              className="btn-hover text-white"
                            >
                              View Recommended Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <Link to="/tour/weekend" className="my-auto">
                            <i className="fas fa-link fa-2x text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="national-item">
                        <img
                          src={ews}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                        />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">
                              Holiday Tour
                            </h5>
                            <Link
                              to="/tour/holiday"
                              className="btn-hover text-white"
                            >
                              View Recommended Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <Link to="/tour/holiday" className="my-auto">
                            <i className="fas fa-link fa-2x text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="national-item">
                        <img
                          src={Des5}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                        />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">
                              Road Trip
                            </h5>
                            <Link
                              to="/tour/road-trip"
                              className="btn-hover text-white"
                            >
                              View Recommended Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <Link to="/tour/road-trip" className="my-auto">
                            <i className="fas fa-link fa-2x text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="national-item">
                        <img
                          src={tour}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                        />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">
                              Historical Trip
                            </h5>
                            <Link
                              to="/tour/historical-trip"
                              className="btn-hover text-white"
                            >
                              View Recommended Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <Link to="/tour/historical-trip" className="my-auto">
                            <i className="fas fa-link fa-2x text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="national-item">
                        <img
                          src={tour1}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                        />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">
                              Family Tour
                            </h5>
                            <Link
                              to="/tour/family"
                              className="btn-hover text-white"
                            >
                              View Recommended Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <Link to="/tour/family" className="my-auto">
                            <i className="fas fa-link fa-2x text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="national-item">
                        <img
                          src={tour2}
                          className="img-fluid w-100 rounded"
                          alt="Image"
                        />
                        <div className="national-content">
                          <div className="national-info">
                            <h5 className="text-white text-uppercase mb-2">
                              Beach Tour
                            </h5>
                            <Link
                              to="/tour/beach"
                              className="btn-hover text-white"
                            >
                              View Recommended Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                        <div className="national-plus-icon">
                          <Link to="/tour/beach" className="my-auto">
                            <i className="fas fa-link fa-2x text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Explore Tour Start */}

        {/* Gallery Start */}
        <div className="container-fluid gallery py-5 my-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Our Gallery</h5>
            <h1 className="mb-4">
              A Masterpiece of Nature: Crafted by the Divine In{" "}
              <span className="font-weigh-bold text-decoration-underline">
                Bali
              </span>
            </h1>
            <p className="mb-0">
              Behold a creation of exquisite beauty, where every aspect of its
              proportion is a testament to the divine craftsmanship. This
              natural wonder serves as a perfect highlight, preserving cherished
              memories in digital form. Embrace the sublime, immortalize your
              experiences, and keep the essence of beauty alive through your
              cherished digital keepsakes.
            </p>
          </div>
          <div className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a
                  className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#GalleryTab-2"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Waterfall
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#GalleryTab-3"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Hill
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#GalleryTab-4"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Beach
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#GalleryTab-1"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    All
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#GalleryTab-5"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Temple
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#GalleryTab-6"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Village
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#GalleryTab-7"
                >
                  <span className="text-dark" style={{ width: 150 }}>
                    Statue
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Banyumala Waterfall
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery}
                          data-lightbox="gallery-1"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery1}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Uluwatu
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery1}
                          data-lightbox="gallery-2"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery2}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Pura Tanah Lot
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery2}
                          data-lightbox="gallery-3"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery3}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Kelingking Beach
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery3}
                          data-lightbox="gallery-4"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery4}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Aling Aling Waterfall
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery4}
                          data-lightbox="gallery-5"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery5}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Campuhan Ridge Walk
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery5}
                          data-lightbox="gallery-6"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery6}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Git Git Waterfall
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery6}
                          data-lightbox="gallery-7"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery7}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Desa Wisata Penglipuran
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery7}
                          data-lightbox="gallery-8"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery8}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Kuta Beach
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery8}
                          data-lightbox="gallery-9"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery9}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Padang Padang Beach
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery9}
                          data-lightbox="gallery-10"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={garudawisnu}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Garuda Wisnu Kencana
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={garudawisnu}
                          data-lightbox="gallery-10"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GalleryTab-2" className="tab-pane fade show p-0">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery4}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Aling Aling Waterfall
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery4}
                          data-lightbox="gallery-5"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery6}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Git Git Waterfall
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery6}
                          data-lightbox="gallery-7"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GalleryTab-3" className="tab-pane fade show p-0">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery5}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Campuhan Ridge Walk
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery5}
                          data-lightbox="gallery-6"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GalleryTab-4" className="tab-pane fade show p-0">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery3}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Kelingking Beach
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery3}
                          data-lightbox="gallery-4"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="gallery-item h-100">
                      <img
                        src={galery8}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Kuta Beach
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery8}
                          data-lightbox="gallery-9"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery9}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Padang Padang Beach
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery9}
                          data-lightbox="gallery-10"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GalleryTab-5" className="tab-pane fade show p-0">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery2}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Pura Tanah Lot
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery2}
                          data-lightbox="gallery-3"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="GalleryTab-6" className="tab-pane fade show p-0">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery7}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Desa Wisata Penglipuran
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery7}
                          data-lightbox="gallery-8"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={galery5}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Campuhan Ridge Walk
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={galery5}
                          data-lightbox="gallery-6"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="GalleryTab-7" className="tab-pane fade show p-0">
                <div className="row g-2">
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                    <div className="gallery-item h-100">
                      <img
                        src={garudawisnu}
                        className="img-fluid w-100 h-100 rounded"
                        alt="Image"
                      />
                      <div className="gallery-content">
                        <div className="gallery-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Garuda Wisnu Kencana
                          </h5>
                        </div>
                      </div>
                      <div className="gallery-plus-icon">
                        <a
                          href={garudawisnu}
                          data-lightbox="gallery-10"
                          className="my-auto"
                        >
                          <i className="fas fa-plus fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery End */}

        <div className="container-fluid contact bg-light py-5">
          <div className="container py-5">
            {/* BORDER START */}
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
              <h5 className="section-title px-3">
                Explore Bali With Google Maps API
              </h5>
              <h1 className="mb-0 mt-3">Best Bali Beaches</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/d/embed?mid=1qLFb011Fc3r9F_sl18xgK7AsFR35Auk&hl=en_US&ehbc=2E312F"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            {/* BORDER END */}

            {/* BORDER START */}
            <div
              className="mx-auto text-center mb-5 mt-4"
              style={{ maxWidth: 900 }}
            >
              <h1 className="mb-0">Best Area To Stay In Bali</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/d/embed?mid=1IW6mC5YNdvM_fDow5eO0txTc06i7SGk&hl=en_US&ehbc=2E312F"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            {/* BORDER END */}

            {/* BORDER START */}
            <div
              className="mx-auto text-center mb-5 mt-4"
              style={{ maxWidth: 900 }}
            >
              <h1 className="mb-0">Best Bali Temples To Visit</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/d/embed?mid=1cTS1QJ_FggiU9I-wtShn0Dz3ThbnwEc&hl=en_US&ehbc=2E312F"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            {/* BORDER END */}

            {/* BORDER START */}
            <div
              className="mx-auto text-center mb-5 mt-4"
              style={{ maxWidth: 900 }}
            >
              <h1 className="mb-0">Best Bali Museums</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/d/embed?mid=1N4WS5xXNI8imTFuvhwLkihuDIcUmdJE&hl=en_US&ehbc=2E312F"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            {/* BORDER END */}

            {/* BORDER START */}
            <div
              className="mx-auto text-center mb-5 mt-4"
              style={{ maxWidth: 900 }}
            >
              <h1 className="mb-0">Best Bali Money Changer</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/d/embed?mid=1jjOWIo7oWBfb1zz-V3BPMrF0229qjrc&hl=en_US&ehbc=2E312F"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            {/* BORDER END */}

            {/* BORDER START */}
            <div
              className="mx-auto text-center mb-5 mt-4"
              style={{ maxWidth: 900 }}
            >
              <h1 className="mb-0">Best Bali Rice Fields</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/d/embed?mid=1MUrM4-RJixcGejTmqJWtOKk8g7ipzhI&hl=en_US&ehbc=2E312F"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            {/* BORDER END */}
          </div>
        </div>
        {/* Tour Booking Start */}
        <GuessGame />
        {/* Tour Booking End */}

        {/* Contact Start */}
        <div
          className="container-fluid contact bg-light py-5"
          style={{ marginTop: 0 }}
        >
          <div className="container py-5">
            <div
              className="mx-auto text-center mb-5"
              style={{ marginTop: 0, maxWidth: 900 }}
            >
              <h5 className="section-title px-3">Contact Us</h5>
              <h1 className="mb-0">Contact For Any Query</h1>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-lg-4">
                <div className="bg-white rounded p-4">
                  <div className="text-center mb-4">
                    <i className="fa fa-map-marker-alt fa-3x text-primary" />
                    <h4 className="text-primary">
                      <address />
                    </h4>
                    <p className="mb-0">
                      Universitas Multimedia Nusantara <br /> Indonesia
                    </p>
                  </div>
                  <div className="text-center mb-4">
                    <i className="fa fa-phone-alt fa-3x text-primary mb-3" />
                    <h4 className="text-primary">Mobile</h4>
                    <p className="mb-0">+62 877-7680-3957</p>
                    <p className="mb-0">+62 812-9301-273</p>
                  </div>
                  <div className="text-center">
                    <i className="fa fa-envelope-open fa-3x text-primary mb-3" />
                    <h4 className="text-primary">Email</h4>
                    <p className="mb-0">kelompok5thebest@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <h3 className="mb-2">Send us a message</h3>
                <p className="mb-4">
                  Please send your feedback about our website so we can develop
                  it from a customer perspective.{" "}
                </p>
                <form onSubmit={sendMail}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          onChange={handleChange}
                          value={formData.name}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          onChange={handleChange}
                          value={formData.subject}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          style={{ height: 160 }}
                          defaultValue={""}
                          onChange={handleChange}
                          value={formData.message}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>
    </div>
  );
}

export default HomeContent;
