export const getCoinPrice = (subscriptionId: number): Promise<string> => {
  return new Promise(resolve =>
    setTimeout(() => resolve('332,151,666.32'), 2000),
  )
}
