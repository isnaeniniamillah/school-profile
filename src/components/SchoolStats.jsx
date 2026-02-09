import { useEffect, useState } from "react"
import "../styles/stats.css"

function Counter({ end, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const increment = end / (duration / 20)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 20)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="stat-card">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  )
}

function SchoolStats() {
  return (
    <section className="school-stats">
      <div className="stats-container">
        <Counter end={25} label="Tenaga Pendidik" />
        <Counter end={500} label="Siswa Telah Lulus" />
        <Counter end={320} label="Siswa Aktif" />
      </div>
    </section>
  )
}

export default SchoolStats