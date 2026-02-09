import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import PPDB from "./pages/PPDB"
import Kelulusan from "./pages/Kelulusan"

import Sejarah from "./pages/profil/Sejarah"
import VisiMisi from "./pages/profil/VisiMisi"
import Struktur from "./pages/profil/Struktur"

import Artikel from "./pages/Artikel"
import ArtikelDetail from "./pages/ArtikelDetail"
import Galeri from "./pages/Galeri"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/kelulusan" element={<Kelulusan />} />

        <Route path="/profil/sejarah" element={<Sejarah />} />
        <Route path="/profil/visi-misi" element={<VisiMisi />} />
        <Route path="/profil/struktur" element={<Struktur />} />

        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:id" element={<ArtikelDetail />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App