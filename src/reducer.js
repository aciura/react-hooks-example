import { actionType } from './components/actions'

export const initState = {
  shipPath: [],
  dispatch: () => {},
  shipName: 'React Pearl',
}

export function reducer(state, action) {
  console.log('reducer', state, action)

  switch (action.type) {
    case actionType.ShipMoved: {
      return {
        ...state,
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
