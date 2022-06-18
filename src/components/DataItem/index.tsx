import React from 'react'
import styles from './index.module.scss'
import CoinLogo from '../../assets/coinlogo.svg'
import { ItemData } from '../../types/data'
import { StatusIcon } from '../StatusIcon'
import { cxs } from '../../views/cxs'
import { useLogo, usePrice } from '../../hooks/usePriceAndLogo'

export const DataItem: React.FC<
  ItemData & { selected?: boolean; onClick?: () => void }
> = ({ subscriptionId, status, coinName, expiryTime, selected, onClick }) => {
  const { loading: loadingLogo, logo } = useLogo(subscriptionId)
  const { loading: loadingPrice, price } = usePrice(subscriptionId)
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
          {loadingLogo ? (
            <div className={styles.coinlogoLoading} />
          ) : (
            <img src={logo || CoinLogo} alt="coinlogo" />
          )}
        </div>

        <div className={styles.coindata}>
          <div className={cxs(styles.numberfont, styles.coinprice)}>
            {loadingPrice ? (
              <div className={styles.coinPriceLoading} />
            ) : (
              <div> $ {price}</div>
            )}
          </div>
          <div className={cxs(styles.numberfont, styles.coninexpires)}>
            End: {expiryTime}
          </div>
        </div>
      </div>
    </div>
  )
}
