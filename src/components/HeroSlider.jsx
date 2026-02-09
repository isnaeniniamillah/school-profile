import { useEffect, useState } from "react"
import "../styles/hero.css"

const images = [
  "/images/slide-juara.png",
  "/images/slide-literasi.png",
  "/images/gallery-teater.png",
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="hero-slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="hero-overlay">
        <h1>SD Negeri 1 Bantarujeg</h1>
        <p>Sekolah Unggul, Berkarakter, Berprestasi</p>
        <a href="/ppdb" className="hero-btn">Daftar Sekarang</a>
      </div>
    </section>
  )
}

export default HeroSlider