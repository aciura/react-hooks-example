import { useEffect } from 'react'

const useKey = callback => {
  const keyEvent = 'keypress'

  const handleKey = e => {
    callback(e.key)
  }

  useEffect(() => {
    window.document.addEventListener(keyEvent, handleKey)
    return () => window.document.removeEventListener(keyEvent, handleKey)
  }, [callback])
}
export default useKey
