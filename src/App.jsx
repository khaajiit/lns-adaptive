import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Welcome from './components/Welcome.jsx'
import Booking from './components/Booking.jsx'
import Studio from './components/Studio.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Booking />
        <Studio />
        <Services />
      </main>
      <Footer />
    </>
  )
}
