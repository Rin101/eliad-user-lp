import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '回答例を見る｜エリアド',
  description: 'エリアドの回答例をご覧ください',
}

export default function Examples() {
  return (
    <main>
      <h1 className={styles.title}>回答例</h1>
      <div className={styles.spacer}></div>
    </main>
  )
}
