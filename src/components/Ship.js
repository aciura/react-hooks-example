import React, { useState, useContext } from 'react'
import PirateShipPng from '../assets/pirate-ship.png'
import { WorldContext } from './WorldContext'
import { ShipPath } from './ShipPath'

const SHIP_SIZE = 50

export function Ship({ initX, initY }) {
  // const [path, setPath] = useState([{ x: initX, y: initY }])

  const { shipPosition, shipDirection, shipSpeed, shipName } = useContext(
    WorldContext
  )
  const { x, y } = shipPosition

  console.log(
    `Ship ${shipName} (x:${x},y:${y} dir:${shipDirection} speed:${shipSpeed}`
  )

  // TODO: setPath([...path.slice(-10), newPosition])

  const scaleY = shipDirection > 90 && shipDirection < 270 ? 'scaleY(-1)' : ''

  return (
    <React.Fragment>
      {/* <ShipPath path={path} /> */}
      <div style={{ position: 'absolute', left: `${x}px`, top: `${y}px` }}>
        <img
          style={{
            width: SHIP_SIZE,
            height: SHIP_SIZE,
            transform: `rotate(${shipDirection}deg) ${scaleY}`,
          }}
          alt="Ship"
          src={PirateShipPng}
        />
        <span
          style={{
            display: 'block',
            transform: `rotate(${shipDirection}deg) ${scaleY}`,
          }}
        >
          {shipName}
        </span>
      </div>
    </React.Fragment>
  )
}
