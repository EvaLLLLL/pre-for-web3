import React from 'react'
import styles from './index.module.scss'
import { DataItem } from './components/DataItem'
import { useWindowSize } from '../../hooks/useWindowSize'
import OracleLogo from '../../assets/oracle.svg'

export const DashBoard: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <div className={styles.container}>
      <div className={styles.device}>window width: {width}</div>

      <div className={styles.content}>
        <div className={styles.title}>
          <img src={OracleLogo} alt="oracle" />
        </div>
        <div className={styles.list}>
          <DataItem />
          <DataItem />
          <DataItem />
          <DataItem />
          <DataItem />
          <DataItem />
          <DataItem />
          <DataItem />
        </div>
      </div>
    </div>
  )
}
