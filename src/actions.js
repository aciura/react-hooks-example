export const actionType = {
  GameTick: 'game.tick',
  ShipRename: 'ship.rename',
  ShipMoved: 'ship.moved',
  ShipSpeedChange: 'ship.speedChange',
  ShipDirectionChange: 'ship.directionChange',
  GamePlayingChange: 'game.isPlayingChange',
}

export function gameTickAction(time) {
  return { type: actionType.GameTick, payload: time }
}

export function shipRenameAction(name) {
  return { type: actionType.ShipRename, payload: name }
}

export function shipMovedAction({ x, y }) {
  return { type: actionType.ShipMoved, payload: { x, y } }
}

export function shipSpeedChangeAction(newSpeed) {
  return { type: actionType.ShipSpeedChange, payload: newSpeed }
}

export function shipDirectionChangeAction(newDirection) {
  return { type: actionType.ShipDirectionChange, payload: newDirection }
}

export function gamePlayingChangeAction(isPlaying) {
  return { type: actionType.GamePlayingChange, payload: isPlaying }
}
