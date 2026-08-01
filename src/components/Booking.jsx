import { SOCIAL } from '../content.js'
import './Booking.css'

export default function Booking() {
  return (
    <div className="booking">
      <a className="booking__button" href={SOCIAL.instagram} target="_blank" rel="noreferrer">
        Book now
      </a>
    </div>
  )
}
