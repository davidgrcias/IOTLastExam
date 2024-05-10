import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Footer() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="Footer.css" />
      </Helmet>
      {/* Footer Start */}

      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>

                <a className="text-white" href>
                  <i className="fa-solid fa-house" /> &nbsp;Universitas Multimedia Nusantara, Indonesia
                </a>
                <a className="text-white" href>
                  <i className="fas fa-envelope me-2" /> iKelompok5Thebest@gmail.com
                </a>
                <a className="text-white" href>
                <i className="fas fa-phone me-2" /> +62 812 3456 7890
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>
                <a className="text-white" href>
                  <i className="fas fa-angle-right me-2" /> About
                </a>
                <a className="text-white" href>
                  <i className="fas fa-angle-right me-2" /> Careers
                </a>
                <a className="text-white" href>
                  <i className="fas fa-angle-right me-2" /> Blog
                </a>
                <a className="text-white" href>
                  <i className="fas fa-angle-right me-2" /> Press
                </a>
                <a className="text-white" href>
                  <i className="fas fa-angle-right me-2" /> Gift Cards
                </a>
                <a className="text-white" href>
                  <i className="fas fa-angle-right me-2" /> Magazine
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      <div className="container-fluid copyright text-body py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-end mb-md-0">
              <i className="fas fa-copyright me-2" />
              <a className="text-white" href="#">
                Bali
              </a>
              &nbsp;&nbsp;<span>All right reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-start">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              <span>Designed By</span>&nbsp;
              <a className="text-white" href="https://htmlcodex.com">
                Kelompok 5
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
