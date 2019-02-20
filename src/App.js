import React, { useReducer } from 'react'
import { WorldContext } from './components/WorldContext'
import { ShipNameForm } from './components/ShipNameForm'
import { World } from './components/World'
import { reducer, initState } from './reducer'
import { GameEngine } from './GameEngine'
import './App.css'
import { KeyboardController } from './components/UserController'

const App = () => {
  console.log('App')

  const [state, dispatch] = useReducer(reducer, initState)
  const { worldWidth, worldHeight } = state

  return (
    <div className="App">
      <h1>React Hooks!</h1>
      <WorldContext.Provider value={{ ...state, dispatch }}>
        <KeyboardController />
        <ShipNameForm />
        <World width={worldWidth} height={worldHeight} />
        <GameEngine />
      </WorldContext.Provider>
    </div>
  )
}

export default App
