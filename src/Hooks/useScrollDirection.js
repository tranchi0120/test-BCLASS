import { useState, useRef, useEffect } from 'react'

const useScrollDirection = () => {
  const [scrollDriction, setScrollDriction] = useState(null)
  const previousScrollDriction = useRef(0)
  const [translateXPosition, setTranslateXPosition] = useState(15)
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
    if (scrollDriction === 'down' && scrollPosition >= 1100) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      )
    } else if (scrollDriction === 'up') {
      setTranslateXPosition(
        translateXPosition >= 15 ? 15 : translateXPosition + 1
      )
    }
  }
  console.log({ scrollPosition })

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
