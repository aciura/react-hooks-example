import React, { useState, useContext } from 'react'
import GameContext from './GameContext'
import { shipRenameAction } from '../actions'

export function ShipNameForm() {
  const [name, setName] = useState('React Pearl')
  const handleNameChange = e => {
    setName(e.target.value)
  }

  const context = useContext(GameContext)
  const dispatchShipRename = () => {
    context.dispatch(shipRenameAction(name))
  }

  return (
    <div>
      <span>Name:</span>
      <input
        style={{ margin: '5px' }}
        value={name}
        onChange={handleNameChange}
      />
      <button style={{ display: 'inline-block' }} onClick={dispatchShipRename}>
        Rename Ship
      </button>
      <span>
        &nbsp; Position: ({Math.floor(context.shipPosition.x)},
        {Math.floor(context.shipPosition.y)}) Speed:
        {context.shipSpeed} Dir: {context.shipDirection}
      </span>
    </div>
  )
}
