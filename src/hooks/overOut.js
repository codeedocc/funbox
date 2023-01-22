import { useState } from 'react'

export const useOverOut = () => {
  const [bgColor, setBgColor] = useState('#fff')

  const mouseOverHandler = () => {
    setBgColor('#fff')
  }

  const mouseOutHandler = () => {
    setBgColor('#96ff3a')

    const timeout = setTimeout(() => {
      setBgColor('#fff')
    }, 2000)

    return () => clearTimeout(timeout)
  }

  return {
    bgColor,
    mouseOverHandler,
    mouseOutHandler,
  }
}
