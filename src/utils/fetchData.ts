import { ItemData, StatusEnum } from '../types/data'

const data = [
  {
    id: 71,
    blockNumber: 12297450,
    transactionIndex: 6,
    sources: [0, 1, 2, 3],
    symbol: 'eth',
    slug: 'ethereum',
    leaseEnd: 12499050,
    subscriptionId: 7,
    networkId: 0,
    aggregationStrategy: 1,
    reportingStrategy: 0,
    status: 1,
    client: {
      clientType: 0,
      connectionInfo: {
        contractAddress: '0x0F9dfd6043965B02e74D01188c13936fBE71D688',
        networkId: 0,
      },
    },
    createdTimestamp: '2021-09-12T08:36:26.555',
    updatedTimestamp: '2021-09-12T08:39:16.526',
    display: true,
  },
  {
    id: 71,
    blockNumber: 12297450,
    transactionIndex: 6,
    sources: [0, 1, 2, 3],
    symbol: 'eth',
    slug: 'ethereum',
    leaseEnd: 12499050,
    subscriptionId: 7,
    networkId: 0,
    aggregationStrategy: 1,
    reportingStrategy: 0,
    status: 1,
    client: {
      clientType: 0,
      connectionInfo: {
        contractAddress: '0x0F9dfd6043965B02e74D01188c13936fBE71D688',
        networkId: 0,
      },
    },
    createdTimestamp: '2021-09-12T08:36:26.555',
    updatedTimestamp: '2021-09-12T08:39:16.526',
    display: true,
  },
]

const source: ItemData[] = [
  {
    id: 1,
    coinName: 'ETH',
    status: StatusEnum.Active,
    coinPrice: '322,156,221.32',
    expiryTime: 'hello',
  },
  {
    id: 2,
    coinName: 'ETH',
    status: StatusEnum.Active,
    coinPrice: '322,156,221.32',
    expiryTime: 'hello',
  },
  {
    id: 3,
    coinName: 'ETH',
    status: StatusEnum.Active,
    coinPrice: '322,156,221.32',
    expiryTime: 'hello',
  },
]

export const fetchData = (): Promise<ItemData[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(source), 2000)
  })
}
