import "../../styles/page.css"

function Struktur() {
  return (
    <div className="page-container">
      <div className="profile-page">
      <h1 className="page-title">Struktur Organisasi</h1>

      <p className="page-text">
        Struktur organisasi SD Negeri 1 Bantarujeg terdiri dari kepala sekolah,
        guru, serta tenaga kependidikan.
      </p>

      <img
        src="/images/struktur.jpg"
        alt="Struktur"
        style={{ width: "100%", marginTop: "20px", borderRadius: "8px" }}
      />
      </div>
    </div>
  )
}

export default Struktur