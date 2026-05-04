import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import Reveal from './Reveal'
import styles from './About.module.css'

export default function About() {
  const { lang } = useLang()
  const txt = t[lang].about

  return (
    <section id="sobre-mi">
      <div className="sec-header">
        <span className="sec-num">{txt.num}</span>
        <h2 className="sec-title">{txt.title}</h2>
        <div className="sec-line" />
      </div>

      <div className={styles.grid}>
        <Reveal>
          <div className={styles.left}>
            <div className={styles.photoWrapper}>
              <img src="/foto-kevin.jpg" alt="Kevin Chicaiza" className={styles.photo} />
              <div className={styles.photoGlow} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.text}>
            <p>{txt.p1}</p>
            <p>{txt.p2}</p>
            <p>{txt.p3}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.meta}>
            {txt.meta.map((m) => (
              <div className={styles.metaItem} key={m.key}>
                <span className={styles.metaKey}>{m.key}</span>
                <span className={`${styles.metaVal} ${m.green ? styles.green : ''}`}>{m.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}