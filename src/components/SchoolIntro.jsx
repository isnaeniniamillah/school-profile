import "../styles/intro.css"

function SchoolIntro() {
  return (
    <section className="school-intro">
      <div className="intro-container">

        {/* Sambutan Kepala Sekolah */}
        <div className="headmaster">
          <img
            src="/images/kepsek.png"
            alt="Kepala Sekolah"
            className="headmaster-img"
          />
          <div className="headmaster-text">
            <h2>Sambutan Kepala Sekolah</h2>
            <p>
              Assalamu’alaikum warahmatullahi wabarakatuh.
              Selamat datang di website resmi SD Negeri 1 Bantarujeg.
              Website ini kami hadirkan sebagai media informasi dan komunikasi
              antara sekolah dengan masyarakat.
            </p>
            <span className="name">
              — Budi, M.pd
            </span>
          </div>
        </div>

        {/* Sejarah */}
        <div className="history">
          <h2>Sejarah Sekolah</h2>
          <p>
            SD Negeri 1 Bantarujeg berdiri sebagai lembaga pendidikan dasar
            yang berkomitmen mencetak generasi berkarakter, berprestasi,
            dan berakhlak mulia.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="vision-mission">
          <div className="vision">
            <h3>Visi</h3>
            <p>
              Terwujudnya peserta didik yang beriman, berilmu,
              berkarakter, dan berprestasi.
            </p>
          </div>

          <div className="mission">
            <h3>Misi</h3>
            <ul>
              <li>Menyelenggarakan pembelajaran yang aktif dan kreatif</li>
              <li>Mengembangkan potensi akademik dan non-akademik siswa</li>
              <li>Menanamkan nilai disiplin dan karakter sejak dini</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SchoolIntro