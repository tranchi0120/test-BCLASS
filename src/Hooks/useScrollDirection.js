import { useState, useRef, useEffect } from 'react'

const useScrollDirection = () => {
  const [scrollDriction, setScrollDriction] = useState(null)
  const previousScrollDriction = useRef(0)
  const [translateXPosition, setTranslateXPosition] = useState(80)
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset
    if (currentScrollPosition > previousScrollDriction.current) {
      setScrollDriction('down')
    } else if (currentScrollPosition < previousScrollDriction.current) {
      setScrollDriction('up')
    }
    previousScrollDriction.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition
    setScrollPosition(currentScrollPosition)
  }

  const handleTranslateX = () => {
    if (scrollDriction === 'down' && scrollPosition >= 900) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      )
    } else if (scrollDriction === 'up') {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      )
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking)
    return () => window.removeEventListener('scroll', scrollTracking)
  }, [])

  useEffect(() => {
    handleTranslateX()
  }, [scrollPosition, scrollDriction])

  return { translateXPosition }
}

export default useScrollDirection
