import React from 'react'
import styles from './index.module.scss'
import CoinLogo from '../../assets/coinlogo.svg'
import { ItemData } from '../../types/data'
import { StatusIcon } from '../StatusIcon'
import { cxs } from '../../utils/cxs'

export const DataItem: React.FC<
  ItemData & { selected?: boolean; onClick?: () => void }
> = ({
  status,
  coinLogo,
  coinName,
  coinPrice,
  expiryTime,
  selected,
  onClick,
}) => {
  return (
    <div
      className={cxs(
        styles.container,
        selected ? styles.hlbg : styles.normalbg,
      )}
      onClick={onClick}
    >
      <div className={styles.header}>
        <div className={styles.coinname}>{coinName}</div>
        <div className={styles.coinstatus}>
          <StatusIcon status={status} />
        </div>
      </div>

      <div className={styles.coininfo}>
        <div className={styles.coinlogo}>
          <img src={coinLogo || CoinLogo} alt="coinlogo" />
        </div>

        <div className={styles.coindata}>
          <div className={cxs(styles.numberfont, styles.coinprice)}>
            $ {coinPrice}
          </div>
          <div className={cxs(styles.numberfont, styles.coninexpires)}>
            End: {expiryTime}
          </div>
        </div>
      </div>
    </div>
  )
}
