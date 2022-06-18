export enum StatusEnum {
  Active = 1,
  Terminated = 2,
  Suspended = 3,
}

export type ItemData = {
  id: number
  subscriptionId: number
  coinName: string
  status: StatusEnum
  expiryTime: string
}
