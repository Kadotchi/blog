import styles from 'styles/PostBody.module.css'

export default function PostBody({ children }) {
  return <div className={styles.stack}>{children}</div>
}
