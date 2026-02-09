import "../styles/extracurricular.css"

const extracurriculars = [
  {
    id: 1,
    name: "Pramuka",
    image: "/images/ekskul-pramuka.png",
    desc: "Melatih kemandirian, disiplin, dan jiwa kepemimpinan siswa."
  },
  {
    id: 2,
    name: "Pencak Silat",
    image: "/images/ekskul-silat.png",
    desc: "Mengembangkan kekuatan fisik dan mental serta budaya bangsa."
  },
  {
    id: 3,
    name: "Seni Tari",
    image: "/images/ekskul-tari.png",
    desc: "Mengasah bakat seni dan kreativitas siswa."
  },
  {
    id: 4,
    name: "Sepak Bola",
    image: "/images/ekskul-bola.png",
    desc: "Menumbuhkan sportivitas dan kerja sama tim."
  }
]

function SchoolExtracurricular() {
  return (
    <section className="school-extracurricular">
      <div className="extracurricular-container">
        <h2 className="section-title">Ekstrakurikuler</h2>

        <div className="extracurricular-grid">
          {extracurriculars.map(item => (
            <div className="extracurricular-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="extracurricular-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolExtracurricular