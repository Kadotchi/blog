import styles from 'styles/Accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'

/**
 * アコーディオンコンポーネント
 * @param {heading} 見出し
 * @param {children} テキスト
 * @returns {JSX.Element}
 */
export default function Accordion({ heading, children }) {
  return (
    <div className={styles.open}>
      <h3 className={styles.heading}>
        <button>
          {heading}
          <FontAwesomeIcon icon={faCircleArrowDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text}></div>
      <div className={styles.textInner}>{children}</div>
    </div>
  )
}
