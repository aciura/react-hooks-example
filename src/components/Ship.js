import React, { useState, useContext } from 'react'
import PirateShipPng from '../assets/pirate-ship.png'
import { WorldContext } from './WorldContext'
import { ShipPath } from './ShipPath'
import { useKey } from './useKey'
import { shipMovedAction } from './actions'

export function Ship({ initX, initY }) {
  const [x, setX] = useState(initX)
  const [y, setY] = useState(initY)
  const [transformation, setTransformation] = useState('rotate(0)')
  const [path, setPath] = useState([{ x: initX, y: initY }])

  const context = useContext(WorldContext)

  const movement = 20
  const size = 50

  console.log(`Ship name:${context.shipName} x:${x}, y:${y}`)

  const move = key => {
    if (key === 'w') {
      setY(y - movement)
      setTransformation('rotate(90deg)')
    }
    if (key === 's') {
      setY(y + movement)
      setTransformation('rotate(270deg)')
    }
    if (key === 'd') {
      setX(x + movement)
      setTransformation('scaleX(-1) rotate(0)')
    }
    if (key === 'a') {
      setX(x - movement)
      setTransformation('rotate(0)')
    }
    setPath([...path.slice(-10), { x, y }])
    context.dispatch(shipMovedAction({ x, y }))
  }

  useKey(move)
  return (
    <React.Fragment>
      <ShipPath path={path} />
      <div style={{ position: 'absolute', left: `${x}px`, top: `${y}px` }}>
        <img
          style={{
            width: size,
            height: size,
            transform: `${transformation}`,
          }}
          alt="Ship"
          src={PirateShipPng}
        />
        <span>{context.shipName}</span>
      </div>
    </React.Fragment>
  )
}
