import React, { useReducer } from 'react'
import GameContext from './components/GameContext'
import { ShipNameForm } from './components/ShipNameForm'
import { World } from './components/World'
import { reducer, initState } from './reducer'
import './App.css'
import { KeyboardController } from './components/KeyboardController'
import { useTimer } from './hooks/useTimer'
import { gamePlayingChangeAction } from './actions'

const App = () => {
  console.log('App')

  const [state, dispatch] = useReducer(reducer, initState)
  const { worldWidth, worldHeight } = state
  const { isPlaying } = state

  useTimer(isPlaying, dispatch)

  return (
    <div className="App">
      <h1>React Hooks!</h1>
      <GameContext.Provider value={{ ...state, dispatch }}>
        <KeyboardController />
        <ShipNameForm />
        <button onClick={() => dispatch(gamePlayingChangeAction(!isPlaying))}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <World width={worldWidth} height={worldHeight} />
      </GameContext.Provider>
    </div>
  )
}

export default App
