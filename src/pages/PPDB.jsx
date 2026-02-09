import "../styles/ppdb.css"

function PPDB() {
  return (
    <section className="ppdb">
      <div className="ppdb-container">
        <h1>Pendaftaran Peserta Didik Baru</h1>
        <p className="ppdb-desc">
          Silakan isi formulir pendaftaran dengan data yang benar dan lengkap.
        </p>

        <form className="ppdb-form">
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Nama lengkap siswa" />
          </div>

          <div className="form-group">
            <label>NISN</label>
            <input type="text" placeholder="Nomor Induk Siswa Nasional" />
          </div>

          <div className="form-group">
            <label>Tempat Lahir</label>
            <input type="text" placeholder="Tempat lahir" />
          </div>

          <div className="form-group">
            <label>Tanggal Lahir</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Jenis Kelamin</label>
            <select>
              <option>-- Pilih --</option>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Asal Sekolah / TK</label>
            <input type="text" placeholder="Asal sekolah" />
          </div>

          <div className="form-group">
            <label>Nama Orang Tua / Wali</label>
            <input type="text" placeholder="Nama orang tua / wali" />
          </div>

          <div className="form-group">
            <label>No. HP Orang Tua</label>
            <input type="text" placeholder="08xxxxxxxxxx" />
          </div>

          <div className="form-group full">
            <label>Alamat</label>
            <textarea placeholder="Alamat lengkap"></textarea>
          </div>

          <button type="submit" className="ppdb-btn">
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </section>
  )
}

export default PPDB