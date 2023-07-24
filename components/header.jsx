import Container from 'components/Container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/Header.module.css'

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
