import { useEffect, useContext } from 'react'
import GameContext from '../components/GameContext'

const useClick = () => {
  const context = useContext(GameContext)
  const logClick = e => {
    console.log(`x:${e.clientX},y:${e.clientY}`)
    context.dispatch({
      type: 'user.click',
      payload: { x: e.clientX, y: e.clientY },
    })
  }
  useEffect(() => {
    window.document.addEventListener('click', logClick)
    return () => window.document.removeEventListener('click', logClick)
  })
}
export default useClick
