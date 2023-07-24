import styles from 'styles/Container.module.css'

export default function Container({ children, large = false }) {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}
