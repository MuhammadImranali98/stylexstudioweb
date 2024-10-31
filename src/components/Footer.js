import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import whatsappImage from "../images/whatapp.png";
function Footer() {
  return (
    <div className="bg-neutral-950 relative p-8 nav text-neutral-300 flex items-center justify-evenly">
      <ul className="flex gap-1 flex-col items-center justify-center">
        <img alt="logo" className="w-40" src={logo}></img>
        <Link to="/reservations">Make A Reservation</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/reservations">About Us</Link>
        <Link to="/team">View Our Team</Link>
        <Link to="/services">View Our Services</Link>
      </ul>
      <ul className="flex gap-4 flex-col items-center justify-center">
        <a
          href="https://www.facebook.com/StyleXStudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10"
            alt="Facebook"
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/stylexstudio1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10"
            alt="instagram"
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
          ></img>
        </a>
        <a
          href="https://wa.me/923344844545"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          <img src={whatsappImage} alt="WhatsApp" className="w-10" />
        </a>
      </ul>
    </div>
  );
}

export default Footer;
