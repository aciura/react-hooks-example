import React, { useReducer } from 'react'
import { WorldContext } from './components/WorldContext'
import { ShipNameForm } from './components/ShipNameForm'
import { World } from './components/World'
import { reducer, initState } from './reducer'
import { GameEngine } from './GameEngine'
import './App.css'

const App = () => {
  console.log('App')

  const width = 800
  const height = 600
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div className="App">
      <h1>React Hooks!</h1>
      <WorldContext.Provider value={{ ...state, dispatch }}>
        <ShipNameForm />
        <World width={width} height={height} />
        <GameEngine />
      </WorldContext.Provider>
    </div>
  )
}

export default App
