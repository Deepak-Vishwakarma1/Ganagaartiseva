import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "./footer.css";

const services = [
  ["Event Planning", "event-planning"],
  ["Kashi Darshan", "kashi-darshan"],
  ["Ganga Aarti Darshan", "aarti-darshan"],
  ["Pandit & Puja Services", "pandit-puja-services"],
  ["Jyotish & Astrology", "jyotish-astrology"],
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61595363699448&mibextid=ZbWKwL",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ganga.arti.seva?mdxt=NjY4N3RxdTZnOTZs",
    icon: <FaInstagram />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@GangaArtiSeva",
    icon: <FaYoutube />,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <section
          className="site-footer__brand"
          aria-label="About Ganga Aarti Seva"
        >
          <Link
            to="/"
            className="site-footer__logo-link"
            aria-label="Ganga Aarti Seva home"
          >
            <img src="/faviconbr.png" alt="" aria-hidden="true" />
            Ganga Aarti Seva
          </Link>
          <p>
            Experience the devotion and traditions of Varanasi. We help you plan
            Aarti darshan, Kashi visits, puja, and special events arrangement by
            us.
          </p>
          <div className="site-footer__socials" aria-label="Social media">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </section>

        <section className="site-footer__section">
          <h2>Our Services</h2>
          <ul>
            {services.map(([label, id]) => (
              <li key={id}>
                <Link to={`/services#${id}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-footer__section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/book-now">Book Aarti</Link>
            </li>
          </ul>
        </section>

        <section className="site-footer__section site-footer__contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="tel:+919794640037">
                <MdPhone />
                +91 97946 40037
              </a>
            </li>
            <li>
              <a href="mailto:mahaartikashiganga@gmail.com">
                <MdEmail />
                mahaartikashiganga@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/eCeiqGD55YCbLjfN8"
                target="_blank"
                rel="noreferrer"
              >
                <MdLocationOn />
                Balaji Nagar Colony, Lanka, Varanasi
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
