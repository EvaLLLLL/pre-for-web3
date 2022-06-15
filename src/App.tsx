import React from 'react'
import Web3 from 'web3'
import './App.css'

function App() {
  React.useEffect(() => {
    ;(window as any).ethereum.enable()
  }, [])

  const sendEther = async () => {
    const web3 = new Web3((window as any).web3.currentProvider)
    const [account] = await web3.eth.getAccounts()
    console.log(account)

    let transaction
    try {
      transaction = await web3.eth.sendTransaction({
        from: account,
        to: '',
        value: '',
      })
      console.log('transaction', transaction)
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div className="App">
      <button onClick={sendEther}>发起交易</button>
    </div>
  )
}

export default App
