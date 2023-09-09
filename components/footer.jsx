import Container from 'components/Container'
import Logo from 'components/Logo'
import styles from 'styles/Footer.module.css'
import Social from 'components/Social'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
