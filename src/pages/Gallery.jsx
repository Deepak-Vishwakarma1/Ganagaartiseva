import PageHero from "../components/shared/PageHero";
import "./gallery.css";

const galleryPhotos = [
  "pujavaranasi.jpeg",
  "pujavaranasi2.jpeg",
  "pujavaranasi3.jpeg",
  "pujavaranasi4.jpeg",
  "pujavaranasi5.jpeg",
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <PageHero
        title="Gallery"
        description="Explore moments from our ceremonies and experiences in Varanasi."
      />

      <section className="gallery-content" aria-label="Photo gallery">
        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <figure
              className="gallery-photo"
              key={photo}
              style={{ "--gallery-photo": `url("/Galary/${photo}")` }}
            >
              <img
                src={`/Galary/${photo}`}
                alt={`Puja ceremony in Varanasi, gallery photo ${index + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
