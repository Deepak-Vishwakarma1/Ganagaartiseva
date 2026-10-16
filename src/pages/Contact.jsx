import { useState } from "react";
import PageHero from "../components/shared/PageHero";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdAccessTime, MdEmail, MdLocationOn } from "react-icons/md";
import "./contact.css";

const phone = "+919794640037";
const email = "mahaartikashiganga@gmail.com";
const address =
  "Balaji Nagar Colony, near Ford Hospital, Samne Ghat Road, Lanka, Varanasi, Uttar Pradesh 221005";
const mapLink = "https://maps.app.goo.gl/eCeiqGD55YCbLjfN8";
const mapQuery = encodeURIComponent(address);

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );

    setFormMessage(
      "Thank you for contacting us. Your email app should open with your message ready to send.",
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  }

  return (
    <main className="contact-page">
      <PageHero
        title="Contact Us"
        description="We’re here to help with your visit to Varanasi and the Ganga Aarti experience."
      />

      <div className="contact-content">
        <section
          className="contact-intro"
          aria-labelledby="contact-intro-title"
        >
          <div>
            <p className="contact-kicker">Ganga Arti Seva · Varanasi</p>
            <h2 id="contact-intro-title">Let’s plan your visit</h2>
            <p>
              Ask us about Aarti timings, event arrangements, or directions to
              Samne Ghat Road and nearby Varanasi. We’ll be glad to help.
            </p>
          </div>
        </section>

        <section className="contact-details" aria-label="Contact details">
          <a className="contact-card" href={`tel:${phone}`}>
            <span className="contact-card__icon">
              <FaPhoneAlt />
            </span>
            <span className="contact-card__label">Call us</span>
            <strong>+91 97946 40037</strong>
            <span className="contact-card__hint">Tap to call</span>
          </a>
          <a
            className="contact-card"
            href="https://wa.me/919794640037"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__label">WhatsApp</span>
            <strong>Message Ganga Arti Seva</strong>
            <span className="contact-card__hint">Usually the fastest way</span>
          </a>
          <a className="contact-card" href={`mailto:${email}`}>
            <span className="contact-card__icon">
              <MdEmail />
            </span>
            <span className="contact-card__label">Email us</span>
            <strong>{email}</strong>
            <span className="contact-card__hint">
              We usually reply within one working day
            </span>
          </a>
        </section>

        <div className="contact-columns">
          <section
            className="contact-panel contact-address"
            aria-labelledby="address-title"
          >
            <p className="contact-kicker">Find us</p>
            <h2 id="address-title">Visit us in Varanasi</h2>
            <div className="contact-address__line">
              <MdLocationOn aria-hidden="true" />
              <p>{address}</p>
            </div>
            <a
              className="contact-text-link"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              Open location in Google Maps ↗
            </a>
          </section>

          <section
            className="contact-panel contact-timing"
            aria-labelledby="timing-title"
          >
            <p className="contact-kicker">Plan your visit</p>
            <h2 id="timing-title">Aarti timings</h2>
            <div className="contact-timing__item">
              <span className="contact-card__icon">
                <MdAccessTime />
              </span>
              <div>
                <strong>Evening Ganga Aarti</strong>
                <p>Around sunset; varies with the season</p>
              </div>
            </div>
            <div className="contact-timing__item">
              <span className="contact-card__icon">
                <MdAccessTime />
              </span>
              <div>
                <strong>Subah-e-Banaras</strong>
                <p>At sunrise; programme timing can vary</p>
              </div>
            </div>
            <p className="contact-note">
              Please call or WhatsApp us to confirm the schedule for your date.
            </p>
            <a
              className="contact-button contact-button--outline"
              href={`tel:${phone}`}
            >
              Call to confirm timing
            </a>
          </section>
        </div>

        <section
          className="contact-panel contact-form-section"
          aria-labelledby="form-title"
        >
          <div className="contact-form-section__intro">
            <p className="contact-kicker">Send an enquiry</p>
            <h2 id="form-title">How can we help?</h2>
            <p>
              Share a few details and we’ll get back to you, usually within one
              working day.
            </p>
            <p className="contact-note">
              For urgent bookings, call or WhatsApp us directly.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Subject
              <input name="subject" type="text" required />
            </label>
            <label className="contact-form__wide">
              Message
              <textarea name="message" rows="4" required />
            </label>
            <button
              className="contact-button contact-button--primary contact-form__wide"
              type="submit"
            >
              Send enquiry
            </button>
            <p
              className="contact-form__status contact-form__wide"
              role="status"
              aria-live="polite"
            >
              {formMessage}
            </p>
          </form>
        </section>

        <section className="contact-map-section" aria-labelledby="map-title">
          <div className="contact-map-section__heading">
            <div>
              <p className="contact-kicker">Find us</p>
              <h2 id="map-title">Map to our location</h2>
            </div>
            <a
              className="contact-text-link"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              Open map ↗
            </a>
          </div>
          <div className="contact-map">
            <iframe
              title="Map showing Ganga Arti Seva in Varanasi"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
        <section className="contact-social" aria-label="Social media">
          <div>
            <p className="contact-kicker">Stay connected</p>
            <h2>Follow our updates</h2>
            <p>Find Ganga Arti Seva on social media.</p>
          </div>
          <div className="contact-social__links">
            <a href="https://www.facebook.com/profile.php?id=61595363699448&mibextid=ZbWKwL" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ganga.arti.seva?mdxt=NjY4N3RxdTZnOTZs" aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@GangaArtiSeva" aria-label="YouTube" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
