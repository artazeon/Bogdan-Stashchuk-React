import './Info.css'
import styles from './Info.module.css'
function Info() {
  return (
    <div className={styles.info}>
        <div className="info">
      <h1>Hello from the Info component</h1>
      <h2>HS</h2>
      <button className={styles.myOtherButton}>
        Click me in Info components
      </button>
      </div>
    </div>
  )
}

export default Info
