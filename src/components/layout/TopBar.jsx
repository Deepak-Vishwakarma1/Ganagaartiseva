import React from "react";
import "./topbar.css";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const socials = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61595363699448&mibextid=ZbWKwL", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/ganga.arti.seva?mdxt=NjY4N3RxdTZnOTZs", label: "Instagram" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@GangaArtiSeva", label: "YouTube" },
  { icon: <FaGoogle />, href: "https://maps.app.goo.gl/eCeiqGD55YCbLjfN8", label: "Google Maps" },
];

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__info">
          <a href="tel:+919794640037" className="topbar__item">
            <FaPhoneAlt className="topbar__icon" />
            <span>+91-9794640037</span>
          </a>

          <a href="mailto:mahaartikashiganga@gmail.com" className="topbar__item">
            <MdEmail className="topbar__icon topbar__icon--lg" />
            <span>mahaartikashiganga@gmail.com</span>
          </a>

          <div className="topbar__item topbar__address">
            <MdLocationOn className="topbar__icon topbar__icon--lg" />
            <span>Balaji Nagar Colony, Lanka, Varanasi</span>
          </div>
        </div>

        <div className="topbar__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
