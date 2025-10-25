import React from "react";
import siteLogo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="footer sm:footer-horizontal  text-base-content p-10 container mx-auto px-2">
        <aside>
          <img className="w-40 h-40 " src={siteLogo} alt="site-logo" />
          <p>
             Pet Care Industries Ltd.
            <br />
            Your Reliable Partner in Pet Care Since 1990
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
