import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { CONTACT_DATA } from '../data/portfolio'
import Reveal from './Reveal'
import styles from './Contact.module.css'

const FORMSPREE_URL = 'https://formspree.io/f/xbdwdwyo'

export default function Contact() {
  const { lang } = useLang()
  const txt = t[lang].contact
  const [fields, setFields] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  const handle = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto">
      <div className="sec-header">
        <span className="sec-num">{txt.num}</span>
        <h2 className="sec-title">{txt.title}</h2>
        <div className="sec-line" />
      </div>

      <div className={styles.grid}>
        <Reveal>
          <div>
            <h3 className={styles.heading}>
              {txt.heading.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h3>
            <p className={styles.subtext}>{txt.subtext}</p>
            <div className={styles.dataList}>
              {CONTACT_DATA.map((d) => (
                <div className={styles.dataRow} key={d.key}>
                  <span className={styles.dataKey}>{d.key}</span>
                  <span className={styles.dataVal}>
                    {d.href
                      ? <a href={d.href} target="_blank" rel="noopener noreferrer">{d.value}</a>
                      : d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'sent' ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <div className={styles.successTitle}>{txt.successTitle}</div>
              <div className={styles.successSub}>{txt.successSub}</div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>{txt.fields.nombre.label}</label>
                  <input name="nombre" type="text" placeholder={txt.fields.nombre.placeholder} required value={fields.nombre} onChange={handle} />
                </div>
                <div className={styles.field}>
                  <label>{txt.fields.email.label}</label>
                  <input name="email" type="email" placeholder={txt.fields.email.placeholder} required value={fields.email} onChange={handle} />
                </div>
              </div>
              <div className={styles.field}>
                <label>{txt.fields.asunto.label}</label>
                <input name="asunto" type="text" placeholder={txt.fields.asunto.placeholder} value={fields.asunto} onChange={handle} />
              </div>
              <div className={styles.field}>
                <label>{txt.fields.mensaje.label}</label>
                <textarea name="mensaje" placeholder={txt.fields.mensaje.placeholder} required value={fields.mensaje} onChange={handle} />
              </div>
              {status === 'error' && <p className={styles.errorMsg}>{txt.error}</p>}
              <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                {status === 'sending' ? txt.sending : txt.submit}
              </button>
              <p className={styles.note}>{txt.note}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}