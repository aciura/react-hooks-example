import React, { useState, useContext } from 'react'
import PirateShipPng from '../assets/pirate-ship.png'
import { WorldContext } from './WorldContext'
import { ShipPath } from './ShipPath'
import { useKey } from './useKey'
import { shipDirectionChangeAction, shipSpeedChangeAction } from './actions'

const SHIP_SIZE = 50

export function Ship({ initX, initY }) {
  const [path, setPath] = useState([{ x: initX, y: initY }])

  const {
    shipPosition,
    dispatch,
    shipDirection,
    shipSpeed,
    shipName,
  } = useContext(WorldContext)
  const { x, y } = shipPosition

  console.log(
    `Ship name:${shipName} x:${x}, y:${y} dir:${shipDirection} speed:${shipSpeed}`
  )

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
    // TODO: setPath([...path.slice(-10), newPosition])
  }

  useKey(move)
  const scaleY = shipDirection > 90 && shipDirection < 270 ? 'scaleY(-1)' : ''
  return (
    <React.Fragment>
      <ShipPath path={path} />
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
        <span>{shipName}</span>
      </div>
    </React.Fragment>
  )
}
