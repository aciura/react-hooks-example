import React from 'react'

const GameContext = React.createContext({
  dispatch: () => {},
})

export const Provider = GameContext.Provider
export const Consumer = GameContext.Consumer
export default GameContext
