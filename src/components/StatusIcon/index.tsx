import React from 'react'
import { StatusEnum } from '../../types/data'
import styles from './index.module.scss'
import { statusToColor, statusToLabel } from '../../views/status'

export const StatusIcon: React.FC<{ status: StatusEnum }> = ({ status }) => {
  return (
    <div className={styles.container} style={{ color: statusToColor(status) }}>
      <div className={styles.outer}>
        <div className={styles.middle}>
          <div
            className={styles.inner}
            style={{ background: statusToColor(status) }}
          />
        </div>
      </div>

      <span className={styles.label}>{statusToLabel(status)}</span>
    </div>
  )
}
