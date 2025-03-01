import styles from './components.module.css'
export default function LineStyle () {
  return (
    <div className={styles.line_container}>
      <span className={styles.line}></span>
      <span className={styles.line_child}></span>
    </div>
  )
}
