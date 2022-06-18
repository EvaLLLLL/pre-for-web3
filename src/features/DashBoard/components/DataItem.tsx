import React from 'react'
import styles from './index.module.scss'
import CoinLogo from '../../../assets/coinlogo.svg'
import { classnames } from '../../../utils/classnames'

export const DataItem: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.coinname}>BLA</div>
        <div className={styles.coinstatus}>Active</div>
      </div>

      <div className={styles.coininfo}>
        <div className={styles.coinlogo}>
          <img src={CoinLogo} alt="coinlogo" />
        </div>

        <div className={styles.coindata}>
          <div className={classnames(styles.numberfont, styles.coinprice)}>
            $ 3,412,025.12
          </div>
          <div className={classnames(styles.numberfont, styles.coninexpires)}>
            End: 08/Sept/2022 16:00
          </div>
        </div>
      </div>
    </div>
  )
}
