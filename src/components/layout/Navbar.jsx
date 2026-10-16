import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Event Planning", id: "event-planning" },
  { label: "Kashi Darshan", id: "kashi-darshan" },
  { label: "Ganga Aarti Darshan", id: "aarti-darshan" },
  { label: "Pandit & Puja Services", id: "pandit-puja-services" },
  { label: "Jyotish & Astrology", id: "jyotish-astrology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeServicesMenu(event) {
    const dropdown = event.currentTarget.closest("details");
    if (dropdown) dropdown.open = false;
    setIsOpen(false);
  }

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav__inner">
        <Link
          className="site-nav__brand"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="site-nav__logo"
            src="/faviconbr.png"
            alt=""
            aria-hidden="true"
          />
          <span>Ganga Aarti Seva</span>
        </Link>

        <button
          className={`site-nav__toggle${isOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="site-nav-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="site-nav-links"
          className={`site-nav__links${isOpen ? " is-open" : ""}`}
        >
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li className="site-nav__services">
            <details className="site-nav__dropdown">
              <summary>Services</summary>
              <ul className="site-nav__submenu">
                {serviceLinks.map(({ label, id }) => (
                  <li key={id}>
                    <Link to={`/services#${id}`} onClick={closeServicesMenu}>{label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li className="site-nav__action">
            <Link to="/book-now" onClick={() => setIsOpen(false)}>
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
