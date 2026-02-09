import "../styles/footer.css"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>SD Negeri 1 Bantarujeg</h3>
          <p>
            Jl. Pendidikan No. 1<br />
            Bantarujeg, Majalengka<br />
            Jawa Barat
          </p>
        </div>

        <div className="footer-section">
          <h4>Media Sosial</h4>
          <ul className="footer-list">
            <li>
              <FaFacebookF className="footer-icon" />
              <a href="#">Facebook</a>
            </li>
            <li>
              <FaInstagram className="footer-icon" />
              <a href="#">Instagram</a>
            </li>
            <li>
              <FaYoutube className="footer-icon" />
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontak</h4>
          <p className="footer-contact">
            <FaEnvelope className="footer-icon" />
            sdnbantarujeg1@gmail.com
          </p>
          <p className="footer-contact">
            <FaPhoneAlt className="footer-icon" />
            08xxxxxxxxxx
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SD Negeri 1 Bantarujeg. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer