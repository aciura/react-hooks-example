import React from 'react'
import OceanAnim from './OceanAnim'
import { Ship } from './Ship'

export const World = ({ width = 800, height = 600 }) => {
  console.log('World')

  return (
    <React.Fragment>
      <OceanAnim width={width} height={height} />
      <Ship initX={width / 2} initY={height / 2} />
    </React.Fragment>
  )
}
