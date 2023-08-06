import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footerLogoContainer}>
                <Link href={"/"}>
                    <h2 className={styles.footerLogo}>エリアド - ELIAD</h2>
                </Link>
            </div>
            <div className={styles.footerLinks}>
                <Link href="/">
                    <p>エリアドとは</p>
                </Link>
                <Link href="/privacy/">
                    <p>プライバシーポリシー</p>
                </Link>
                <Link href="/terms-of-use/">
                    <p>利用規約</p>
                </Link>
                <Link href="/company/">
                    <p>運営会社</p>
                </Link>
            </div>
            <p className={styles.copyright}>©︎Metarmo-メタルモ 2023</p>
        </section>
    )
}