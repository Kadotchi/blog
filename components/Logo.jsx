import Link from 'next/link'
import styles from 'styles/Logo.module.css'

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  )
}
