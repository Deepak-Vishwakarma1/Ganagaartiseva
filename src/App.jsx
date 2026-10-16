import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import BookNow from "./pages/BookNow";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import "./components/shared/whatsapp-button.css";

const whatsAppLink = `https://wa.me/919794640037?text=${encodeURIComponent(
  "Hello Ganga Aarti Seva, I want to book a service",
)}`;

function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <a
        className="whatsapp-float"
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ganga Aarti Seva on WhatsApp"
      >
        <span className="whatsapp-float__icon" aria-hidden="true">
          <img src="/Galary/wa.png" alt="" />
        </span>
      </a>
      <Footer />
    </BrowserRouter>
  );
}
