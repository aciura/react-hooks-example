import { useEffect } from 'react'
import { gameTickAction } from '../actions'

export function useTimer(isPlaying, dispatch) {
  console.log('useTimer', isPlaying)

  function gameTick(time) {
    console.log('gameTick', time, isPlaying)
    dispatch(gameTickAction(time))
  }

  useEffect(() => {
    let requestId = 0
    if (isPlaying) {
      requestId = window.requestAnimationFrame(time => gameTick(time))
    }
    return () => {
      window.cancelAnimationFrame(requestId)
    }
  })
}
