import { ItemData } from '../types/data'
import { formatDate } from '../views/formatDate'
import { source } from '../views/source'

export const getFormattedData = (): Promise<ItemData[]> => {
  const formattedData = source.map(
    ({
      id,
      symbol,
      status,
      subscriptionId,
      createdTimestamp,
      leaseEnd,
      blockNumber,
    }) => ({
      id,
      coinName: symbol.toUpperCase(),
      status,
      subscriptionId,
      expiryTime: formatDate(createdTimestamp + 3 * (leaseEnd - blockNumber)),
    }),
  )

  return new Promise(resolve => setTimeout(() => resolve(formattedData), 1000))
}
