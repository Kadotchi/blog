import styles from 'styles/Contact.module.css'
import Social from 'components/Social'

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.address</address>
    </div>
  )
}
