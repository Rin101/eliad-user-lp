import Link from 'next/link'
import styles from './privacy.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜エリアド',
  description: 'エリアドのプライバシーポリシー',
}

export default function Privacy() {
  return (
    <main>
      <h1 className={styles.title}>プライバシーポリシー</h1>
      <div className={styles.spacer}></div>
    </main>
  )
}
