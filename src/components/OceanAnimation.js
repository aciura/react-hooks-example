import React, { useMemo, useState, useEffect } from 'react'

// Require context image folder
const ocean = require.context('../assets/ocean', /*useSubDirs*/ false)
const NUM_OF_FILES = 21

function loadImages() {
  console.log('MEMO: loading images')

  return Array(NUM_OF_FILES)
    .fill(null)
    .map((i, idx) => (idx + 1).toString().padStart(2, '0'))
    .map(num => ocean(`./ocean${num}.png`))
    .map(imgsrc => {
      const img = new Image()
      img.src = imgsrc
      img.onload = () => {
        console.log('image loaded', imgsrc)
      }
      return imgsrc
    })
}

export default function OceanAnimation({ width, height, isPlaying }) {
  const [currentImg, setCurrentImg] = useState(0)

  const renderedImages = useMemo(loadImages, [])

  useEffect(() => {
    if (isPlaying) {
      const requestId = window.requestAnimationFrame(timestamp =>
        setCurrentImg((currentImg + 1) % NUM_OF_FILES)
      )
      return function cleanup() {
        window.cancelAnimationFrame(requestId)
      }
    }
  })
  return (
    <img
      src={renderedImages[currentImg]}
      alt="ocean"
      width={width}
      height={height}
    />
  )
}
