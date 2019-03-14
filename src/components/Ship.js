import React, { useContext } from 'react'
import PirateShipPng from '../assets/pirate-ship.png'
import GameContext from './GameContext'
import { ShipPath } from './ShipPath'

export function Ship({ offset }) {
  // const [path, setPath] = useState([{ x: initX, y: initY }])

  const {
    shipPosition,
    shipDirection,
    shipSpeed,
    shipName,
    shipSize,
  } = useContext(GameContext)
  const { x, y } = shipPosition

  console.log(
    `Ship ${shipName} (x:${x},y:${y} dir:${shipDirection} speed:${shipSpeed})`,
    offset
  )

  // TODO: setPath([...path.slice(-10), newPosition])

  const scaleY = shipDirection > 90 && shipDirection < 270 ? 'scaleY(-1)' : ''

  return (
    <React.Fragment>
      {/* <ShipPath path={path} /> */}
      <div
        style={{
          position: 'absolute',
          left: `${x + offset.left}px`,
          top: `${y + offset.top}px`,
        }}
      >
        <img
          style={{
            width: shipSize,
            height: shipSize,
            transform: `rotate(${shipDirection}deg) ${scaleY}`,
          }}
          alt="Ship"
          src={PirateShipPng}
        />
        <span style={{ display: 'block' }}>{shipName}</span>
      </div>
    </React.Fragment>
  )
}
