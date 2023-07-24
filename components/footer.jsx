import Container from 'components/Container'
import Logo from 'components/logo'
import styles from 'styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}
