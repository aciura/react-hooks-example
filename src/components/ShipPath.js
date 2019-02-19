import React from 'react'

const Square = ({ x, y, size, color }) => (
  <div
    className="square"
    style={{
      borderRadius: '50%',
      left: `${x}px`,
      top: `${y}px`,
      position: 'absolute',
      width: size + 'px',
      height: size + 'px',
      backgroundColor: color,
    }}
  />
)

export function ShipPath({ path }) {
  console.log('ShipPath', path)
  const SQUARE_SIZE = 50
  return path.map((loc, idx) => (
    <Square
      key={`${loc.x}_${loc.y}`}
      x={loc.x}
      y={loc.y}
      color={`rgba(0, 155, 255, ${Math.max(0.0, +idx / 30)})`}
      size={SQUARE_SIZE - idx * 4}
    />
  ))
}
