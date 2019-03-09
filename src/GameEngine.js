import React, { useContext, useEffect, useState } from 'react'
import GameContext from './components/GameContext'
import { shipMovedAction, shipDirectionChangeAction } from './actions'

export function GameEngine({ isPlaying }) {
  // const [counter, setCounter] = useState(0)
  console.log(`GameEngine: isPlaying:${isPlaying}`)
  const {
    dispatch,
    shipSpeed,
    shipDirection,
    shipPosition,
    worldWidth,
    worldHeight,
  } = useContext(GameContext)

  function moveShip(timestamp) {
    console.log(`GameEngine: moveShip, timestamp:${timestamp}`)
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

  const [lastUpdateTime, setLastUpdateTime] = useState(0)
  useEffect(() => {
    console.log('GameEngine: useEffect, isPlaying:', isPlaying)
    if (isPlaying) {
      console.log('GameEngine: requestAnimationFrame isPlaying:', isPlaying)
      const requestId = window.requestAnimationFrame(currentTime => {
        const timeDiff = currentTime - lastUpdateTime
        moveShip(timeDiff)
        setLastUpdateTime(currentTime)
      })
      return function cleanup() {
        console.log('GameEngine: cancelAnimationFrame isPlaying:', isPlaying)
        window.cancelAnimationFrame(requestId)
      }
    }
  })

  return null
}
