import Link from 'next/link'
import styles from './terms.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約｜エリアド',
  description: 'エリアドの利用規約',
}

export default function TermsOfUse() {
  return (
    <main>
      <h1 className={styles.title}>利用規約</h1>
      <div className={styles.spacer}></div>
    </main>
  )
}
