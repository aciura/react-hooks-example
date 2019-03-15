let lastUpdateTime = 0
let updateCount = 0

export function moveShip({ state, currentTime }) {
  console.log(`GameEngine: update# ${updateCount++}`)
  const timeDiff = currentTime - lastUpdateTime
  console.log(
    `GameEngine: moveShip, time diff:${timeDiff}, fps: ${1000 / timeDiff}`
  )

  const {
    shipSpeed,
    shipDirection,
    shipPosition,
    shipSize,
    worldWidth,
    worldHeight,
  } = state
  console.log(
    `State: speed:${shipSpeed} dir:${shipDirection} pos:${shipPosition.x},${
      shipPosition.y
    }`
  )
  const newState = { ...state }

  const newX =
    shipPosition.x - shipSpeed * Math.cos((shipDirection * Math.PI) / 180)
  const newY =
    shipPosition.y - shipSpeed * Math.sin((shipDirection * Math.PI) / 180)

  if (
    newX < 0 ||
    newX > worldWidth - shipSize ||
    newY < 0 ||
    newY > worldHeight - shipSize
  ) {
    newState.shipDirection = shipDirection + 90
  } else {
    newState.shipPosition = { x: newX, y: newY }
  }

  newState.shipPath = [
    ...state.shipPath.slice(-10),
    { x: shipPosition.x, y: shipPosition.y },
  ]

  lastUpdateTime = currentTime
  return newState
}
