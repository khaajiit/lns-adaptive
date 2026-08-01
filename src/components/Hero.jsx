import { useCallback, useEffect, useRef, useState } from 'react'
import { SLIDES } from '../content.js'
import './Hero.css'

const AUTOPLAY_MS = 5000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback((next) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    timerRef.current = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => window.clearInterval(timerRef.current)
  }, [index, goTo])

  return (
    <section className="hero" id="home">
      <div className="hero__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((slide) => (
          <div className="hero__slide" key={slide.full}>
            <picture>
              <source media="(max-width: 640px)" srcSet={slide.small} />
              <img src={slide.full} alt={slide.alt} loading={index === 0 ? 'eager' : 'lazy'} />
            </picture>
          </div>
        ))}
      </div>

      <button className="hero__control hero__control--prev" type="button" aria-label="Previous slide" onClick={() => goTo(index - 1)}>
        ‹
      </button>
      <button className="hero__control hero__control--next" type="button" aria-label="Next slide" onClick={() => goTo(index + 1)}>
        ›
      </button>

      <div className="hero__dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.full}
            type="button"
            className={i === index ? 'is-active' : ''}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
