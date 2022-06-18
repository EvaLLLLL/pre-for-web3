import React from 'react'
import { getCoinLogo } from '../utils/getCoinLogo'
import { getCoinPrice } from '../utils/getCoinPrice'

export const usePrice = (subscriptionId: number) => {
  const [price, setPrice] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  getCoinPrice(subscriptionId)
    .then(res => setPrice(res))
    .finally(() => setLoading(false))
  return { loading, price }
}

export const useLogo = (subscriptionId: number) => {
  const [logo, setLogo] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  getCoinLogo(subscriptionId)
    .then(res => setLogo(res))
    .finally(() => setLoading(false))
  return { loading, logo }
}
