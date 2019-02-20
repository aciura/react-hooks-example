import React, { useContext } from 'react'
import { WorldContext } from './WorldContext'
import { shipSpeedChangeAction, shipDirectionChangeAction } from './actions'
import { useKey } from './useKey'

export function KeyboardController() {
  console.log('UserController')

  const { dispatch, shipDirection, shipSpeed } = useContext(WorldContext)

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

  return <span>Press WSAD</span>
}
