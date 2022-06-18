export enum StatusEnum {
  Active = 'active',
  Terminated = 'terminated',
  Suspended = 'suspended',
}

export type ItemData = {
  id: number
  coinName: string
  coinLogo?: string
  status: StatusEnum
  coinPrice: string
  expiryTime: string
}
