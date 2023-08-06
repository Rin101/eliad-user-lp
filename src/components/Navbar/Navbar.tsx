"use client"

import Link from 'next/link'
import styles from './navbar.module.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div className={styles.header}>
            <Link href={"/"}>
                <h1 className={styles.logo}>エリアド</h1>
            </Link>
            <i onClick={() => toggleMenu()} className={styles.menuBar}><FaBars /></i>
            <Menu menuOpen={menuOpen} closeMenu={closeMenu} />
        </div>
    )
}

const Menu = ({ menuOpen, closeMenu }: any) => {
    return (
        <div style={{display: menuOpen? "block" : "none"}} className={styles.menu}>
            <div className={styles.links}>
                <Link href="/">
                    <div onClick={() => closeMenu()}>
                        <p>エリアドとは</p>
                    </div>
                </Link>
                <Link href="/privacy/">
                    <div onClick={() => closeMenu()}>
                        <p>プライバシーポリシー</p>
                    </div>
                </Link>
                <Link href="/terms-of-use/">
                    <div onClick={() => closeMenu()}>
                        <p>利用規約</p>
                    </div>
                </Link>
                <Link href="/company/">
                    <div onClick={() => closeMenu()}>
                        <p>運営会社</p>
                    </div>
                </Link>
            </div>
            <i onClick={() => closeMenu()} className={styles.closeMenu}><FaTimes /></i>
        </div>
    )
}