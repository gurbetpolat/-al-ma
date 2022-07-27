
import Link from "next/link";
import styles from './header.module.css'

export default function Header() {

    return <header className={styles.header}>
        <nav>
            <ul>
                <li className={styles.li}>
                    <Link href="/">
                        <a className={styles.a} href="">Anasayfa</a>
                    </Link>
                </li >
                <li className={styles.li}>
                    <Link href="/about">
                        <a className={styles.a} href="">Hakkımızda</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/contact">
                        <a className={styles.a} href="">İletişim</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/blog">
                    <a className={styles.a} href="">  Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
}