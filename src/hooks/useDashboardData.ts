import React from 'react'
import { getFormattedData } from '../utils/getFormattedData'
import { ItemData } from '../types/data'

export const useDashboardData = () => {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState<ItemData[]>()

  if (loading) {
    getFormattedData()
      .then(data => {
        setData(data)
      })
      .finally(() => setLoading(false))
  }

  return { data, loading }
}
