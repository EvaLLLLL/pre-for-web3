export const formatDate = (dataStr: string) => {
  const date = new Date(dataStr)
  const month = date.toLocaleString('en-US', { month: 'short' })
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const year = date.getFullYear()

  return `${day}/${month}/${year} ${hours}:${minutes}`
}
