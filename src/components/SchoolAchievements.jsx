import "../styles/achievements.css"

const achievements = [
  {
    id: 1,
    title: "Juara 1 Olimpiade Matematika",
    level: "Tingkat Kabupaten",
    year: "2025",
    image: "/images/prestasi-olimmtk.png"
  },
  {
    id: 2,
    title: "Juara 2 Lomba Pidato Bahasa Indonesia",
    level: "Tingkat Kecamatan",
    year: "2025",
    image: "/images/prestasi-pidatoindo.png"
  },
  {
    id: 3,
    title: "Juara 3 Lomba Cerdas Cermat",
    level: "Tingkat Provinsi",
    year: "2024",
    image: "/images/prestasi-cc.png"
  }
]

function SchoolAchievements() {
  return (
    <section className="school-achievements">
      <div className="achievements-container">
        <h2 className="section-title">Prestasi Sekolah</h2>

        <div className="achievements-grid">
          {achievements.map(item => (
            <div className="achievement-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <p>{item.level}</p>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolAchievements