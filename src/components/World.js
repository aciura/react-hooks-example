import React, { useState, useRef, useEffect } from 'react'
import OceanAnimation from './OceanAnimation'
import { Ship } from './Ship'
import useWindowSize from '../hooks/useWindowSize'

export const World = ({ width = 800, height = 600 }) => {
  console.log('World')

  const oceanRef = useRef(null)
  const windowSize = useWindowSize()

  const [offset, setOffset] = useState({})

  // run this effect each time windowSize has changed
  useEffect(() => {
    const clientRect = oceanRef.current.getBoundingClientRect()
    console.log('windowSize useEffect', clientRect)
    setOffset(clientRect)
  }, [windowSize])

  return (
    <React.Fragment>
      <div ref={oceanRef}>
        <OceanAnimation width={width} height={height} />
      </div>
      <Ship offset={offset} initX={width / 2} initY={height / 2} />
    </React.Fragment>
  )
}
