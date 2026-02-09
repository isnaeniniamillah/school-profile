import { Link } from "react-router-dom"
import gallery from "../api/gallery"
import "../styles/gallery.css"

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Galeri Sekolah</h2>
        <Link to="/galeri" className="gallery-link">
          Lihat Semua →
        </Link>
      </div>

      <div className="gallery-grid">
        {gallery.slice(0, 8).map(item => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection