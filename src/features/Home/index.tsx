import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.linkButton}>
        <Link to="transaction" className={styles.link}>
          transaction
        </Link>
      </button>
      <button className={styles.linkButton}>
        <Link to="dashboard" className={styles.link}>
          dashboard UI
        </Link>
      </button>
    </div>
  )
}
