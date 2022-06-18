import React from 'react'
import { fetchData } from '../utils/fetchData'
import { ItemData } from '../types/data'

export const useDashboardData = () => {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState<ItemData[]>()

  if (loading) {
    fetchData()
      .then(data => {
        setData(data)
      })
      .finally(() => setLoading(false))
  }

  return { data, loading }
}
