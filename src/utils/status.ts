import { StatusEnum } from '../types/data'

export const statusToLabel = (status: StatusEnum) =>
  ({
    [StatusEnum.Active]: 'Active',
    [StatusEnum.Suspended]: 'Suspended',
    [StatusEnum.Terminated]: 'Terminated',
  }[status])

export const statusToColor = (status: StatusEnum) =>
  ({
    [StatusEnum.Active]: '#76FCB3',
    [StatusEnum.Suspended]: '#FFE500',
    [StatusEnum.Terminated]: '#FF007A',
  }[status])
