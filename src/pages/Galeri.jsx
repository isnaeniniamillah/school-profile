import gallery from "../api/gallery"
import "../styles/gallery.css"

function Galeri() {
  return (
    <section className="gallery-page">
      <h1>Galeri Kegiatan Sekolah</h1>

      <div className="gallery-grid">
        {gallery.map(item => (
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

export default Galeri