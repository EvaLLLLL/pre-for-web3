import Web3 from 'web3'

export const transEther = async ({
  address,
  token,
}: {
  address: string
  token: string
}) => {
  if (!window.web3?.currentProvider) {
    alert('Please install MetaMask!')
    return
  }

  const web3 = new Web3(window.web3.currentProvider)
  const [account] = await web3.eth.getAccounts()

  let transaction
  try {
    transaction = await web3.eth.sendTransaction({
      from: account,
      to: address,
      value: token,
    })

    return transaction
  } catch (err: any) {
    alert(err?.message)
  }
}
