import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import "./services.css";

const services = [
  {
    id: "event-planning",
    title: "Event Planning",
    description:
      "Plan a meaningful celebration in Varanasi with help coordinating the venue, ceremony, and details for your guests.",
    note: "Custom events · Advance planning",
  },
  {
    id: "kashi-darshan",
    title: "Kashi Darshan",
    description:
      "Explore the temples, ghats, and sacred landmarks of Kashi with assistance planning your city visit.",
    note: "Local guidance · Flexible visits",
  },
  {
    id: "aarti-darshan",
    title: "Ganga Aarti Darshan",
    description:
      "Arrange a memorable evening at the ghats and experience the prayers, music, and glowing lamps of Ganga Aarti.",
    note: "Evening ceremony · Varanasi ghats",
  },
  {
    id: "pandit-puja-services",
    title: "Pandit & Puja Services",
    description:
      "Arrange traditional puja and ritual services with a pandit for your personal or family occasion.",
    note: "Personal ceremonies · By arrangement",
  },
  {
    id: "jyotish-astrology",
    title: "Jyotish & Astrology",
    description:
      "Request a Jyotish consultation for astrological guidance and insights rooted in traditional practice.",
    note: "Consultations · By appointment",
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target?.tagName === "DETAILS") target.open = true;
    target?.scrollIntoView({ block: "start" });
  }, [location.hash]);

  return (
    <main className="services-page">
      <PageHero
        title="Services"
        description="Discover the rituals, river views, and timeless traditions that make every visit to Banaras unforgettable."
      />

      <section className="services-content" id="our-services">
        <header className="services-heading">
          <p className="services-eyebrow">Our offerings</p>
          <h2>Make your time in Varanasi meaningful</h2>
          <p>Choose an experience and we’ll help you plan your visit.</p>
        </header>

        <div className="services-list">
          {services.map((service) => (
            <details className="service-row" id={service.id} key={service.id}>
              <summary>{service.title}</summary>
              <div className="service-row__copy">
                <p className="service-card__description">{service.description}</p>
                <p className="service-card__note">{service.note}</p>
                <Link to="/book-now" className="service-card__link">Enquire now</Link>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
