import { SERVICES } from '../content.js'
import './Services.css'

export default function Services() {
  return (
    <section className="services" id="services">
      <h2>Price list</h2>
      <table className="services__table">
        <thead>
          <tr>
            <th>Name of service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((service) => (
            <tr key={service.name}>
              <td data-label="Name of service">{service.name}</td>
              <td data-label="Price">{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
