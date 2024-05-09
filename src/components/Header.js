import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Header.css";

function Header() {
  return (
    <>
      {/* Navigation */}
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
      </Helmet>

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/assets/img/wi.png"
              alt="Start Bootstrap"
              style={{
                height: "10em",
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink
                to="/"
                className="nav-item nav-link"
                exact
                activeClassName="active"
                id="link"
              >
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
              <NavLink
                to="/Things-to-do"
                className="nav-item nav-link"
                activeClassName="active"
                id="link"
              >
                <i className="fas fa-tasks"></i> Things to do
              </NavLink>
              <NavLink
                to="/About"
                className="nav-item nav-link"
                activeClassName="active"
                id="link"
              >
                <i className="fa-solid fa-people-group"></i> About Us
              </NavLink>
              <NavLink
                to="/Game"
                className="nav-item nav-link"
                activeClassName="active"
                id="link"
              >
                <i className="fa-solid fa-gamepad"></i> Game
              </NavLink>
            </div>
            {/*<a href className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
              Contact
            </a>*/}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
