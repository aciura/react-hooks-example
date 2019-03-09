import { useState, useEffect } from 'react'

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize())
  console.log('useWindowSize ', windowSize)

  function handleResize() {
    setWindowSize(getSize())
  }

  // add listener for window resize event
  useEffect(
    () => {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    },
    [] /* RUNS ONCE */
  )

  return windowSize
}

export default useWindowSize
