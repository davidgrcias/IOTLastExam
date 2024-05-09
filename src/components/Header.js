import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/img/wi.png"
              alt="Start Bootstrap"
              style={{
                height: "6em",
                marginTop: "-14px",
                paddingBottom: "0px",
              }}
            />
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>Menu</span>
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i class="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Things-to-do">
                  <i class="fas fa-tasks"></i> Things to do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  <i class="fa-solid fa-people-group"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Game">
                  <i class="fa-solid fa-gamepad"></i> Game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
