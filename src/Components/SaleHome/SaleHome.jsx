import style from './style.module.scss'
import imgLeft from '@images/saleImgLeft.jpeg'
import imgRight from '@images/saleImgRight.jpeg'
import Button from '@components/Button/Button.jsx'
import { useState, useRef, useEffect } from 'react'
import useScrollDirection from '@hooks/useScrollDirection.js'

const SaleHome = () => {
  const { translateXPosition } = useScrollDirection()

  return (
    <div>
      <div className={style.salehome}>
        <div className={style.salehome_container}>
          <div className={style.salehome_main}>
            <div
              className={style.salehome_imgleft}
              style={{
                transform: `translateX(${translateXPosition}%)`
              }}
            >
              <img src={imgLeft} alt='#!' />
            </div>
            <div className={style.salehome_content}>
              <h2 className={style.salehome_content__title}>
                Sale of the year
              </h2>
              <p>
                Libero sed faucibus facilisis fermentum. Est nibh sed massa
                sodales.
              </p>
              <Button content={'Read more'} className={style.btn} />
            </div>
            <div
              className={style.salehome_imgright}
              style={{
                transform: `translateX(-${translateXPosition}%)`
              }}
            >
              <img src={imgRight} alt='#!' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaleHome
