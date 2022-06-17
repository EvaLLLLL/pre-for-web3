import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Web3 from 'web3'
import { DashBoard, Home, Transaction } from '../features'

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="transaction" element={<Transaction />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App
