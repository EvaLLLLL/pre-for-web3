import React from 'react'
import styles from './index.module.scss'
import OracleLogo from '../../assets/oracle.svg'
import { useWindowSize } from '../../hooks/useWindowSize'
import { DataItem } from '../../components/DataItem'
import { useDashboardData } from '../../hooks/useDashboardData'
import { Loading } from '../../components/Loading'

export const DashBoard: React.FC = () => {
  const { width } = useWindowSize()
  const { data, loading } = useDashboardData()
  const [selectedItemId, setSelectedItemId] = React.useState<
    number | undefined
  >()

  return (
    <div className={styles.container}>
      <div className={styles.device}>window width: {width}</div>

      <div className={styles.content}>
        <div className={styles.title}>
          <img src={OracleLogo} alt="oracle" />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.list}>
            {data?.map(item => (
              <DataItem
                {...item}
                key={item.id}
                selected={item.id === selectedItemId}
                onClick={() => setSelectedItemId(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
