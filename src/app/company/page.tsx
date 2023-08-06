import Link from 'next/link'
import styles from './company.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メタルモ',
  description: 'エリアドの運営会社メタルモについて',
}

export default function Company() {
  return (
    <main>
      <h1 className={styles.title}>メタルモ</h1>
      <div className={styles.spacer}></div>
    </main>
  )
}
