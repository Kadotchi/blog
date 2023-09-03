import styles from 'styles/Accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

/**
 * アコーディオンコンポーネント
 * @param {heading} 見出し
 * @param {children} テキスト
 * @returns {JSX.Element}
 */
export default function Accordion({ heading, children }) {
  const [textIsOpen, setTextIsOpen] = useState(false)

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }
  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleArrowDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}
