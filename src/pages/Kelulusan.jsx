import { useState } from "react"
import { cekKelulusan } from "../api/kelulusanApi"
import "../styles/page.css"

function Kelulusan() {
  const [nisn, setNisn] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = await cekKelulusan(nisn)

    setResult(data)
    setLoading(false)
  }

  return (
  <div className="page-container">
    <div className="page-card">
      <h1 className="page-title">Cek Kelulusan</h1>
      <p className="page-subtitle">
        Masukkan NISN siswa untuk melihat hasil kelulusan
      </p>

      <form className="form-kelulusan" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan NISN"
          value={nisn}
          onChange={(e) => setNisn(e.target.value)}
          required
        />
        <button type="submit">Cek Kelulusan</button>
      </form>

      {loading && (
        <p className="loading-text">Memeriksa data...</p>
      )}

      {result && (
        <div className="result-box">
          <p><b>Nama:</b> {result.nama}</p>
          <p>
            <b>Status:</b>{" "}
            <span className={
              result.status === "LULUS"
                ? "status-lulus"
                : "status-tidak"
            }>
              {result.status}
            </span>
          </p>
          <p><b>Tahun Ajaran:</b> {result.tahun}</p>
        </div>
      )}

      {!loading && result === undefined && (
        <p className="error-text">
          Data tidak ditemukan
        </p>
      )}
    </div>
  </div>
)
}

export default Kelulusan