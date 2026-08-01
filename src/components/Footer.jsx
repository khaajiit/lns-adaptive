import { INSTAGRAM_PHOTOS, SOCIAL } from '../content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__grid">
        <div className="footer__info">
          <h3>Contact info</h3>
          <p>
            You can write on{' '}
            <a href={SOCIAL.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>{' '}
            or{' '}
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>{' '}
            in direct to book and specify the time. The studio is located in Novi Beograd, block
            63. To clarify the exact address, use the &ldquo;Book now&rdquo; button.
          </p>
        </div>

        <div className="footer__instagram">
          <h3>Our Instagram</h3>
          <div className="footer__photos">
            {INSTAGRAM_PHOTOS.map((photo) => (
              <a key={photo.src} href={SOCIAL.instagram} target="_blank" rel="noreferrer">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="footer__credit">
        © {new Date().getFullYear()} Lina Nail Studio. Developed by{' '}
        <a href="https://www.instagram.com/sergej.ivanow/" target="_blank" rel="noreferrer">
          SERG_0
        </a>
      </p>
    </footer>
  )
}
