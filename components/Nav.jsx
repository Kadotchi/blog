import Link from 'next/link'
import { useState } from 'react'
import styles from 'styles/Nav.module.css'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>
        MENU
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
