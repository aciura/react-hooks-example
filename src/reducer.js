import { actionType } from './actions'
import { moveShip } from './GameEngine'

export const initState = {
  gameTick: 0,
  isPlaying: true,

  shipPath: [],
  dispatch: () => {},
  shipName: 'React Pearl',
  shipPosition: { x: 300, y: 300 },
  shipDirection: 0,
  shipSpeed: 0,
  shipSize: 50,

  worldWidth: 800,
  worldHeight: 600,
}

export function reducer(state, action) {
  console.log('reducer', action)

  switch (action.type) {
    case actionType.GameTick: {
      return {
        ...state,
        gameTick: state.gameTick + 1,
        ...moveShip({ state, currentTime: action.payload }),
      }
    }

    case actionType.ShipDirectionChange: {
      return {
        ...state,
        shipDirection: (action.payload + 360) % 360,
      }
    }

    case actionType.ShipSpeedChange: {
      const maxSpeed = 3

      return {
        ...state,
        shipSpeed: Math.max(0, Math.min(action.payload, maxSpeed)),
      }
    }

    case actionType.ShipRename: {
      return {
        ...state,
        shipName: action.payload,
      }
    }

    case actionType.GamePlayingChange: {
      return {
        ...state,
        isPlaying: action.payload,
      }
    }

    default: {
      console.error(`Unknown action type '${action.type}'`, action)
    }
  }
}
