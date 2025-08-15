import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
           <h2>Go Food brings the joy of delicious meals right to your doorstep!</h2> From sizzling snacks to gourmet feasts, we deliver fresh, hot, and mouthwatering food in record time. Hungry? Skip the wait, explore endless flavors, and let Go Food turn every meal into a delightful experience—because great food deserves to be enjoyed anytime, anywhere.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 9856738987</li>
            <li>contact@gofood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ GoFood.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
