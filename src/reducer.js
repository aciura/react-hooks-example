import { actionType } from './components/actions'

export const initState = {
  shipPath: [],
  dispatch: () => {},
  shipName: 'React Pearl',
  shipPosition: { x: 300, y: 300 },
  shipDirection: 0,
  shipSpeed: 0,
}

export function reducer(state, action) {
  console.log('reducer', state, action)

  switch (action.type) {
    case actionType.ShipDirectionChange: {
      return {
        ...state,
        shipDirection: action.payload % 360,
      }
    }

    case actionType.ShipSpeedChange: {
      const maxSpeed = 3

      return {
        ...state,
        shipSpeed: Math.max(0, Math.min(action.payload, maxSpeed)),
      }
    }
    case actionType.ShipMoved: {
      return {
        ...state,
        shipPosition: action.payload,
        shipPath: [...state.shipPath.slice(-10), action.payload],
      }
    }
    case actionType.ShipRename: {
      return {
        ...state,
        shipName: action.payload,
      }
    }

    default: {
      throw new Error(`Unknown action type '${action.type}'`, action)
    }
  }
}
