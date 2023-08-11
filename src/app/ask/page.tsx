import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '質問する｜エリアド',
  description: 'エリアドで自分の悩みを質問する',
}

export default function Company() {
  return (
    <main>
      <section id="form" className={styles.form}>
        <iframe className={styles.formContent} src="https://docs.google.com/forms/d/e/1FAIpQLScyOL4k2G9aHbkc6n1wUHkIkTOn_Rm4mgS8cKyfT8-xHo8YAQ/viewform?embedded=true" width="640" height="1100">読み込んでいます…</iframe>
      </section>
    </main>
  )
}
