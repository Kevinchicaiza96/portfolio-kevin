import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { SKILLS } from '../data/portfolio'
import Reveal from './Reveal'
import styles from './Skills.module.css'

export default function Skills() {
  const { lang } = useLang()
  const txt = t[lang].skills

  return (
    <section id="habilidades">
      <div className="sec-header">
        <span className="sec-num">{txt.num}</span>
        <h2 className="sec-title">{txt.title}</h2>
        <div className="sec-line" />
      </div>
      <Reveal>
        <div className={styles.grid}>
          {SKILLS.map((group) => (
            <div className={styles.group} key={group.cat}>
              <div className={styles.groupTitle}>{group.cat}</div>
              {group.items.map((item) => (
                <div className={styles.item} key={item}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}