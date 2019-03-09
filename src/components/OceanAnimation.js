import React, { useMemo, useState, useEffect } from 'react'

// Require context image folder
const ocean = require.context('../assets/ocean', /*useSubDirs*/ false)
const NUM_OF_FILES = 21

export default function OceanAnimation({ width, height }) {
  const [currentImg, setCurrentImg] = useState(0)

  const renderedImages = useMemo(() => {
    console.log('MEMO: loading images')

    return Array(NUM_OF_FILES)
      .fill(0)
      .map((i, idx) => (idx + 1).toString().padStart(2, '0'))
      .map(num => ocean(`./ocean${num}.png`))
      .map(imgsrc => (
        <img src={imgsrc} alt="ocean" width={width} height={height} />
      ))
  }, [NUM_OF_FILES, ocean])

  useEffect(() => {
    const requestId = window.requestAnimationFrame(timestamp =>
      setCurrentImg((currentImg + 1) % NUM_OF_FILES)
    )
    return function cleanup() {
      window.cancelAnimationFrame(requestId)
    }
  })

  return <div>{renderedImages[currentImg]}</div>
}
