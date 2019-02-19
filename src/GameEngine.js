import { useContext, useEffect } from 'react'
import { WorldContext } from './components/WorldContext'
import { shipMovedAction } from './components/actions'

export function GameEngine() {
  console.log('GameEngine')
  const { dispatch, shipSpeed, shipDirection, shipPosition } = useContext(
    WorldContext
  )

  function moveShip() {
    const newX =
      shipPosition.x - shipSpeed * Math.cos((shipDirection * Math.PI) / 180)
    const newY =
      shipPosition.y - shipSpeed * Math.sin((shipDirection * Math.PI) / 180)

    dispatch(shipMovedAction({ x: newX, y: newY }))
  }

  useEffect(() => {
    const requestId = window.requestAnimationFrame(timestamp => moveShip())
    return function cleanup() {
      window.cancelAnimationFrame(requestId)
    }
  })
  return null
}
