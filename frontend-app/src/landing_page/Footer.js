import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-5">
        <div className="row">
          {/* Logo + Social Icons */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "40%" }}
              alt="zerodha logo"
            />

            <p className="text-muted mt-3" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className="d-flex gap-3 mt-3 fs-4">
              <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
              <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
              <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
              <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
            </div>
          </div>

          {/* Company Section */}
          <div className="col">
            <p className="fw-semibold">Company</p>
            <FooterLink text="About" />
            <FooterLink text="Products" />
            <FooterLink text="Pricing" />
            <FooterLink text="Referral programme" />
            <FooterLink text="Careers" />
            <FooterLink text="Zerodha.tech" />
            <FooterLink text="Press & media" />
            <FooterLink text="Zerodha cares (CSR)" />
          </div>

          {/* Support Section */}
          <div className="col">
            <p className="fw-semibold">Support</p>
            <FooterLink text="Contact" />
            <FooterLink text="Support portal" />
            <FooterLink text="Z-Connect blog" />
            <FooterLink text="List of charges" />
            <FooterLink text="Downloads & resources" />
          </div>

          {/* Account Section */}
          <div className="col">
            <p className="fw-semibold">Account</p>
            <FooterLink text="Open an account" />
            <FooterLink text="Fund transfer" />
            <FooterLink text="60 day challenge" />
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
          <LegalText />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ text }) {
  return (
    <a
      href="#"
      className="text-decoration-none"
      style={{
        color: "#424242",
        marginBottom: "8px",
        display: "block",
        fontSize: "15px",
      }}
    >
      {text}
    </a>
  );
}

function LegalText() {
  return (
    <>
      <p>
        Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
        INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
        Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
        INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
        Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
        Bengaluru - 560078, Karnataka, India.
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
      </p>

      <p>
        Investments in securities market are subject to market risks; read all
        related documents carefully before investing.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your contact
        details with your broker...". KYC is one time exercise while dealing in
        securities markets.
      </p>
    </>
  );
}

export default Footer;
