import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { PROJECTS } from '../data/portfolio'
import Reveal from './Reveal'
import styles from './Projects.module.css'

const BADGE_CLASS = {
  live:    styles.badgeLive,
  sena:    styles.badgeSena,
  android: styles.badgeAndroid,
  web:     styles.badgeWeb,
}

const SCREENSHOTS = {
  '01': '/screenshots/sabores-popayan.jpg',
  '02': '/screenshots/walk-app.jpg',
  '03': '/screenshots/walk-app-android.jpg',
  '04': '/screenshots/siltour.jpg',
}

export default function Projects() {
  const { lang } = useLang()
  const txt = t[lang].projects

  return (
    <section id="proyectos">
      <div className="sec-header">
        <span className="sec-num">{txt.num}</span>
        <h2 className="sec-title">{txt.title}</h2>
        <div className="sec-line" />
      </div>

      {PROJECTS.map((p, i) => (
        <Reveal key={p.idx} delay={i * 0.05}>
          <div className={styles.item}>
            <div className={styles.body}>
              <div className={styles.top}>
                <span className={styles.idx}>{p.idx}</span>
                <span className={`${styles.badge} ${BADGE_CLASS[p.badge]}`}>
                  {txt.labels[p.badge]}
                </span>
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{lang === 'es' ? p.desc : p.descEn || p.desc}</p>
              <div className={styles.stack}>
                {p.stack.map((tech) => <span className={styles.chip} key={tech}>{tech}</span>)}
              </div>
              <div className={styles.links}>
                {p.live && (
                  <a className={`${styles.link} ${styles.linkLive}`} href={p.live} target="_blank" rel="noopener noreferrer">
                    {txt.live}
                  </a>
                )}
                <a className={styles.link} href={p.github} target="_blank" rel="noopener noreferrer">
                  {txt.github}
                </a>
              </div>
            </div>

            <div className={styles.screenshot}>
              <img
                src={SCREENSHOTS[p.idx]}
                alt={p.name}
                className={styles.screenshotImg}
              />
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}