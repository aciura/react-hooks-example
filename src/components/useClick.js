import { useEffect, useContext } from 'react'
import { WorldContext } from './WorldContext'
const useClick = () => {
  const context = useContext(WorldContext)
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
