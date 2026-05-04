import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import styles from './Nav.module.css'

const handleNav = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const txt = t[lang].nav

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>kc.dev</div>

      <ul className={styles.links}>
        {txt.links.map(({ id, label }) => (
          <li key={id}>
            <button className={styles.link} onClick={() => handleNav(id)}>
              {label}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <button
          className={styles.langToggle}
          onClick={toggleLang}
          aria-label="toggle language"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="toggle theme"
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <div className={styles.badge}>
          <span className={styles.dot} />
          {txt.available}
        </div>
      </div>
    </nav>
  )
}