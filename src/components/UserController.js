import React, { useContext } from 'react'
import GameContext from './GameContext'
import { shipSpeedChangeAction, shipDirectionChangeAction } from '../actions'
import useKey from '../hooks/useKey'

export function KeyboardController() {
  console.log('UserController')

  const { dispatch, shipDirection, shipSpeed } = useContext(GameContext)

  const move = key => {
    if (key === 'w') {
      dispatch(shipSpeedChangeAction(shipSpeed + 1))
    }
    if (key === 's') {
      dispatch(shipSpeedChangeAction(shipSpeed - 1))
    }
    if (key === 'd') {
      dispatch(shipDirectionChangeAction(shipDirection + 5))
    }
    if (key === 'a') {
      dispatch(shipDirectionChangeAction(shipDirection - 5))
    }
  }

  useKey(move)

  return <span>Control using 'W' 'S' 'A' 'D' keys</span>
}
