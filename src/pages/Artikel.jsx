import { Link } from "react-router-dom"
import articles from "../api/articles"
import "../styles/artikel.css"

function Artikel() {
  return (
    <section className="artikel-page">
      <h1>Artikel & Berita Sekolah</h1>

      <div className="artikel-container">
        {articles.map(article => (
          <div key={article.id} className="artikel-item">
            <img src={article.image} alt={article.title} />

            <div className="artikel-body">
              <h3>{article.title}</h3>
              <div className="date">{article.date}</div>
              <p>{article.excerpt}</p>

              <Link to={`/artikel/${article.id}`}>
                Baca selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Artikel