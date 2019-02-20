import React, { useContext, useEffect } from 'react'
import { WorldContext } from './components/WorldContext'
import {
  shipMovedAction,
  shipDirectionChangeAction,
} from './components/actions'

export function GameEngine() {
  console.log('GameEngine')
  const {
    dispatch,
    shipSpeed,
    shipDirection,
    shipPosition,
    worldWidth,
    worldHeight,
  } = useContext(WorldContext)

  function moveShip() {
    const newX =
      shipPosition.x - shipSpeed * Math.cos((shipDirection * Math.PI) / 180)
    const newY =
      shipPosition.y - shipSpeed * Math.sin((shipDirection * Math.PI) / 180)

    if (newX < 0 || newX > worldWidth || newY < 0 || newY > worldHeight) {
      dispatch(shipDirectionChangeAction(shipDirection + 90))
    } else {
      dispatch(shipMovedAction({ x: newX, y: newY }))
    }
  }

  useEffect(() => {
    const requestId = window.requestAnimationFrame(timestamp => moveShip())
    return function cleanup() {
      window.cancelAnimationFrame(requestId)
    }
  })
  return null
}
