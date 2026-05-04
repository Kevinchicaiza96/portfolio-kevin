import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import styles from './Footer.module.css'

export default function Footer() {
  const { lang } = useLang()
  const txt = t[lang].footer

  return (
    <footer className={styles.footer}>
      <span className={styles.text}>{txt.left}</span>
      <span className={styles.text}>{txt.right}</span>
    </footer>
  )
}