import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import styles from './Hero.module.css'

export default function Hero() {
  const { lang } = useLang()
  const txt = t[lang].hero

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.mesh} />

      <p className={`${styles.eyebrow} ${styles.a1}`}>{txt.eyebrow}</p>

      <h1 className={`${styles.h1} ${styles.a2}`}>{txt.title}</h1>
      <div className={`${styles.h1Ghost} ${styles.a2}`}>{txt.subtitle}</div>

      <p className={`${styles.desc} ${styles.a3}`}>{txt.desc}</p>

      <div className={`${styles.actions} ${styles.a4}`}>
        <a href="https://sabores-popayan.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
          {txt.cta}
        </a>
        <a href="/cv-kevin-chicaiza.pdf" download="CV-Kevin-Chicaiza.pdf" className="btn-ghost">
          {txt.cv}
        </a>
        <a href="https://github.com/Kevinchicaiza96" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          {txt.github}
        </a>
        <button className="btn-ghost" onClick={scrollToContact}>
          {txt.contact}
        </button>
      </div>

      <span className={styles.scrollHint}>{txt.scroll}</span>
    </section>
  )
}