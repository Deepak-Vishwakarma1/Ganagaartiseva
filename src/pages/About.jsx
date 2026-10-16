import "./about.css";
import PageHero from "../components/shared/PageHero";

const offerings = [
  ["Ganga Aarti Darshan", "Watch the evening Ganga Aarti from a good spot, with comfortable seating or from a boat on the river. We help you arrive on time and avoid the crowd."],
  ["Kashi Darshan", "Visit Kashi Vishwanath Temple and other important temples and ghats. Our guides explain the history and meaning of each place, so your visit is more than just sightseeing."],
  ["Pandit & Puja Services", "Experienced pandits for Rudrabhishek, Pind Daan, Satyanarayan Katha, Griha Pravesh, and more. Every puja is done in the correct traditional way, and we explain each step."],
  ["Jyotish & Astrology", "Talk with trusted astrologers about your kundli, auspicious dates (muhurat), and remedies, in simple and clear language."],
  ["Event Planning", "We plan and manage religious ceremonies, family functions, and group events in Varanasi, from start to finish. This includes pandits, arrangements, and local coordination."],
];

const reasons = [
  ["Local knowledge", "We live in Kashi and know the best places and the right timings."],
  ["Trusted people", "Our pandits, astrologers, and guides are experienced and reliable."],
  ["Personal service", "Every plan is made for your family, your beliefs, and your schedule."],
  ["Honest pricing", "You know the cost before you book. There are no hidden charges."],
  ["Respect for tradition", "We treat every ritual and every guest with care and respect."],
];

const steps = [
  ["Contact us", "Message us on WhatsApp or call us and tell us what you need."],
  ["Get your plan", "We suggest dates, timings, and the cost, so you can decide with confidence."],
  ["Confirm your booking", "Once you agree, we arrange everything for you."],
  ["Enjoy your visit", "Our team is with you in Varanasi, so you can relax and take part with a calm mind."],
];

function BulletList({ items, numbered = false }) {
  return (
    <ul className={numbered ? "about-list about-list--steps" : "about-list"}>
      {items.map(([title, text], index) => (
        <li key={title}>
          {numbered && <span className="about-step-number" aria-hidden="true">{index + 1}</span>}
          <p><strong>{title}:</strong> {text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <PageHero
        title="About Us"
        description="Discover how our local team helps make your visit to Varanasi and the Ganga Aarti meaningful."
      />
      <article className="about-content">
        <div className="about-intro">
          <p>Varanasi is one of the oldest and holiest cities in the world. Every year, millions of people come here to pray, to take a holy dip in the Ganga, and to feel peace. But planning a trip to Kashi can be stressful, especially if it is your first visit. Where should you stay? What time is the Aarti? Which pandit can you trust?</p>
          <p>Ganga Aarti Seva is a local team based in Varanasi. We know the city, its ghats, and its traditions well. Our goal is simple: to take care of the details, so you can focus on your faith and your family. Whether you come alone, with your parents, or with a big group, we make the trip smooth and meaningful.</p>
        </div>

        <section className="about-section">
          <h2>What we offer</h2>
          <BulletList items={offerings} />
        </section>
        <section className="about-section">
          <h2>Why choose us</h2>
          <BulletList items={reasons} />
        </section>
        <section className="about-section about-section--last">
          <h2>How it works</h2>
          <BulletList items={steps} numbered />
        </section>

        <p className="about-closing">
          A trip to Kashi should bring you peace, not problems.
          <br />
          <strong>हर हर महादेव।</strong> Let us plan your visit.
        </p>
      </article>
    </main>
  );
}
