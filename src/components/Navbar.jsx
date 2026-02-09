import { Link } from "react-router-dom"
import { useState } from "react"
import "../styles/navbar.css"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/logotutwurihandayani.png" alt="Logo SD" />
            <span>SD Negeri 1 Bantarujeg</span>
          </Link>
        </div>

        {/* Hamburger (MOBILE) */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu + Button */}
        <div className={`nav-wrapper ${open ? "active" : ""}`}>
          <nav className="nav-menu">
            <Link to="/" onClick={() => setOpen(false)}>Beranda</Link>

            <div className="dropdown">
              <span>Profil ▾</span>
              <div className="dropdown-menu">
                <Link to="/profil/sejarah" onClick={() => setOpen(false)}>Sejarah</Link>
                <Link to="/profil/visi-misi" onClick={() => setOpen(false)}>Visi & Misi</Link>
                <Link to="/profil/struktur" onClick={() => setOpen(false)}>Struktur Organisasi</Link>
              </div>
            </div>

            <Link to="/artikel" onClick={() => setOpen(false)}>Artikel</Link>
            <Link to="/galeri" onClick={() => setOpen(false)}>Galeri</Link>
          </nav>

          <div className="nav-actions">
            <Link className="btn-outline" to="/ppdb" onClick={() => setOpen(false)}>
              📝 PPDB
            </Link>
            <Link className="btn-solid" to="/kelulusan" onClick={() => setOpen(false)}>
              🎓 Kelulusan
            </Link>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar