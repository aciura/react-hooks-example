import React, { useReducer, useState } from 'react'
import GameContext from './components/GameContext'
import { ShipNameForm } from './components/ShipNameForm'
import { World } from './components/World'
import { reducer, initState } from './reducer'
import './App.css'
import { KeyboardController } from './components/UserController'
import { useTimer } from './hooks/useTimer'

const App = () => {
  console.log('App')

  const [state, dispatch] = useReducer(reducer, initState)
  const { worldWidth, worldHeight } = state
  const [isPlaying, setIsPlaying] = useState(true)

  useTimer(isPlaying, dispatch)

  return (
    <div className="App">
      <h1>React Hooks!</h1>
      <GameContext.Provider value={{ ...state, dispatch }}>
        <KeyboardController />
        <ShipNameForm />
        <World width={worldWidth} height={worldHeight} />
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </GameContext.Provider>
    </div>
  )
}

export default App
