import { useParams, Link } from "react-router-dom"
import articles from "../api/articles"
import "../styles/artikel-detail.css"

function ArtikelDetail() {
  const { id } = useParams()
  const article = articles.find(item => item.id === parseInt(id))

  if (!article) {
    return (
      <div className="detail-container">
        <p>Artikel tidak ditemukan</p>
        <Link to="/artikel">← Kembali ke Artikel</Link>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <Link className="back-link" to="/artikel">← Kembali ke Artikel</Link>

      <h1 className="detail-title">{article.title}</h1>
      <div className="detail-date">{article.date}</div>

      <img
        src={article.image}
        alt={article.title}
        className="detail-image"
      />

      <div className="detail-content">
        {article.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default ArtikelDetail