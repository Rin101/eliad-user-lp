import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'
import { FaChevronRight } from "react-icons/fa"
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'エリアド',
  description: '仕事の悩みを解決するQAサイト',
}

export default function Home() {
  return (
    <main>
      <section id="top" className={styles.top}>
        <img className={styles.bgImg} src="/img/white-bg.jpg" alt="" />
        <div className={styles.topContainer}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <p>キャリアQAサイトなら</p>
              <h1>エリアド！</h1>
            </div>
            <div className={styles.linkContainer}>
              <Link href={"/"} className={styles.headerLink1}>質問する</Link>
              {/* <Link href={"/"}>みんなの回答をみる</Link> */}
              <Link href={"/"}>回答をみる</Link>
            </div>
          </div>
          <div className={styles.topContent}>
            <h1 className={styles.topText}>仕事の悩み、<br/>エリートな<br/>ビジネスマンに<br/>聞いてみよう。</h1>
            {/* <h1 className={styles.topText}>仕事の悩み、<br/>プロのビジネスマンに<br/>聞いてみよう。</h1> */}
            <Link href="#form">
              <div className={`${styles.askButton} ${styles.topButton}`}>
                <p>今すぐ無料で質問する</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="bubble" className={styles.bubble}>
        <h2>エリアドは<br/>仕事の悩み相談・解決QAサイトです</h2>
        <div className={styles.chatBubbles}>
          <div className={styles.chatBubbleContainer}>
            <Link href={"/examples/"}>
              <div className={`${styles.chatBubble} ${styles.chatBubble2}`}>
                  <div className={styles.seeExamples}>
                    <p>回答例を見る</p>
                    <FaChevronRight />
                  </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="points" className={styles.points}>
        <div className={styles.point}>
          <Image src={"/img/alone.jpg"} height={800} width={800} alt={"group-chat"} />
          {/* <Image src={"/img/group-chat.jpg"} height={800} width={800} alt={"group-chat"} /> */}
          <div className={styles.pointTextContainer}>
            <h2 className={styles.pointBigHeading}>相談できる人がいない！</h2>
            <h3 className={styles.pointHeading}>仕事のモヤモヤ、悩みを<br/>プロのビジネスマンに相談する</h3>
            <p className={styles.pointContent}>これまでの仕事の悩みは、友達、恋人、職場の先輩や同期・・と一部の限られていた人だけ。<br/>ここでは、質問や相談をすると、社長や役員をはじめとする、様々なビジネスマンが解決のヒントをくれるプラットホームです。</p>
          </div>
        </div>
        <div className={styles.point}>
          <Image src={"/img/chat.jpg"} height={800} width={800} alt={"group-chat"} />
          <div className={styles.pointTextContainer}>
            <h2 className={styles.pointBigHeading}>転職活動は意見交換しながら、ゆっくり探したい！</h2>
            <h3 className={styles.pointHeading}>仕事や起業に活かせる情報収集</h3>
            <p className={styles.pointContent}>市場開拓におけるその業種ならではの実態、カルチャーや、あらゆる情報不足にその業種のプロがヒントをくれます。</p>
          </div>
        </div>
        <div className={styles.point}>
          <Image src={"/img/startup.jpg"} height={800} width={800} alt={"group-chat"} />
          <div className={styles.pointTextContainer}>
            <h2 className={styles.pointBigHeading}>あの業界って実際、どうなの？</h2>
            <h3 className={styles.pointHeading}>新しい転職のカタチとして。</h3>
            <p className={styles.pointContent}>転職サイトに登録して紹介される求人を辿る転職から、
              <br/>相談や意見交換を通じて、様々な人と繋がり、
              <br/>より信頼できる人と一緒に働く、
              <br/>新しい転職活動がここでなら可能です。</p>
          </div>
          </div>
      </section>
      {/* <section id="form" className={styles.form}>
        <iframe className={styles.formContent} src="https://docs.google.com/forms/d/e/1FAIpQLScyOL4k2G9aHbkc6n1wUHkIkTOn_Rm4mgS8cKyfT8-xHo8YAQ/viewform?embedded=true" width="640" height="1100">読み込んでいます…</iframe>
      </section> */}
    </main>
  )
}
