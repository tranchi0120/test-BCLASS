import Button from '@components/Button/Button.jsx'
import style from './style.module.scss'
import { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [dataCountDown, setDataCountDown] = useState({
    days: 30,
    hours: 10,
    minutes: 50,
    seconds: 60
  })

  useEffect(() => {
    const countdown = setInterval(() => {
      setDataCountDown((prev) => {
        const { days, hours, minutes, seconds } = prev
        switch (true) {
          case seconds > 0:
            return { ...prev, seconds: seconds - 1 }
          case minutes > 0:
            return { ...prev, minutes: minutes - 1, seconds: 59 }
          case hours > 0:
            return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 }
          case days > 0:
            return {
              ...prev,
              days: days - 1,
              hours: 59,
              minutes: 59,
              seconds: 59
            }
          default:
        }
        clearTimeout(countdown)
        return prev
      })
    }, [1000])
    return () => clearInterval(countdown)
  }, [])

  return (
    <>
      <div className={style.countdown_main}>
        <div className={style.countdown_time}>
          <div className={style.countdown_reduce}>
            {dataCountDown.days} <span>Days</span>
          </div>
          <div className={style.countdown_reduce}>
            {dataCountDown.hours} <span>Hours</span>
          </div>
          <div className={style.countdown_reduce}>
            {dataCountDown.minutes} <span>Min</span>
          </div>
          <div className={style.countdown_reduce}>
            {dataCountDown.seconds} <span>Secs</span>
          </div>
        </div>
        <p className={style.countdown_title}>The classics make a comeback</p>
        <Button content={'Buy Now'} className={style.btn} />
      </div>
    </>
  )
}
export default CountdownTimer
