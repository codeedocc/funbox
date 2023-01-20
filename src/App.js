import React from 'react'
import Chicken from './components/Chicken'
import Fish from './components/Fish'
import FoieGras from './components/FoieGras'

function App() {
  return (
    <div>
      <p className="title">Ты сегодня покормил кота?</p>
      <div className="container">
        <FoieGras />
        <Fish />
        <Chicken />
      </div>
    </div>
  )
}

export default App
