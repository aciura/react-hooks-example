import React, { useState, useContext } from 'react'
import { WorldContext } from './WorldContext'
import { shipRenameAction } from './actions'

export function ShipNameForm() {
  const [name, setName] = useState('React Pearl')
  const handleNameChange = e => {
    setName(e.target.value)
  }

  const context = useContext(WorldContext)
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
      <button style={{ display: 'inline-block;' }} onClick={dispatchShipRename}>
        Rename Ship
      </button>
    </div>
  )
}
