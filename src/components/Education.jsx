import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { EDUCATION, CERTS } from '../data/portfolio'
import Reveal from './Reveal'
import styles from './Education.module.css'

export default function Education() {
  const { lang } = useLang()
  const txt = t[lang].education

  return (
    <section id="educacion">
      <div className="sec-header">
        <span className="sec-num">{txt.num}</span>
        <h2 className="sec-title">{txt.title}</h2>
        <div className="sec-line" />
      </div>

      <div>
        {EDUCATION.map((e, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div className={styles.item}>
              <div className={styles.date}>{e.date}</div>
              <div>
                <div className={styles.name}>{e.name}</div>
                <div className={styles.place}>{e.place}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className={styles.certs}>
          {CERTS.map((c, i) => (
            <div className={styles.cert} key={i}>
              <div className={styles.certName}>{c.name}</div>
              <div className={styles.certMeta}>{c.meta}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}