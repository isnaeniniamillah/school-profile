import { Link } from "react-router-dom"
import articles from "../api/articles"
import "../styles/articleSection.css"

function ArticleSection() {
  return (
    <section className="article-section">
      <div className="article-header">
        <h2>Berita & Artikel</h2>
        <Link to="/artikel">Lihat Semua</Link>
      </div>

      <div className="article-list">
        {articles.slice(0, 3).map(item => (
          <div className="article-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="article-content">
              <div className="article-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>

              <Link to={`/artikel/${item.id}`}>
                Baca selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArticleSection