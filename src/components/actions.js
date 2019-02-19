export const actionType = {
  ShipRename: 'ship.rename',
  ShipMoved: 'ship.moved',
}

export function shipRenameAction(name) {
  return { type: actionType.ShipRename, payload: name }
}

export function shipMovedAction({ x, y }) {
  return { type: actionType.ShipMoved, payload: { x, y } }
}
