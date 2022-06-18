import Web3 from 'web3'
import React from 'react'

export const useTransEther = () => {
  React.useEffect(() => {
    if (!window.ethereum) {
      alert('Please install & enable MetaMask!')
    }

    window.ethereum?.enable()
  }, [])

  return async ({ addresses, token }: { addresses: string; token: string }) => {
    const provider = !window.web3?.currentProvider
      ? new Web3.providers.HttpProvider('https://eth-testnet.tokenlon.im')
      : window.web3.currentProvider

    const web3 = new Web3(provider)
    const [account] = await web3.eth.getAccounts()

    if (!account) {
      alert("Can't get your account, Please Login to MetaMask!")
      return
    }

    try {
      const receipts = await Promise.all(
        addresses.split(',').map(address =>
          web3.eth.sendTransaction({
            from: account,
            to: address,
            value: token,
          }),
        ),
      )
      alert('the transaction is completed.\ntrans: \n' + receipts)
    } catch (err: any) {
      alert(err?.message)
    }
  }
}
