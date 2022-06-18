import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashBoard, Home, Transaction } from '../features'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="transaction" element={<Transaction />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App
