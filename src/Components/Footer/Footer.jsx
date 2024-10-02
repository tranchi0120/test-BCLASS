import style from './style.module.scss'
import logoBanner from '@images/logoBanner.png'
import footerBanner from '@images/footer-banner.png'
import { menuFooter } from '@utils//constant.js'

const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.containerGlobal}>
        <div className={style.footer_main}>
          <div className={style.footer_logo}>
            <img src={logoBanner} alt='#!' />
          </div>
          <ul className={style.footer_menu}>
            {menuFooter.map((item) => (
              <li>{item.content}</li>
            ))}
          </ul>
          <p>Guaranteed safe ckeckout</p>
          <div className={style.footer_footerBanner}>
            <img src={footerBanner} alt='#!' />
          </div>
          <p>
            Copyright © 2024 XStore theme. Created by 8theme – WordPress
            WooCommerce themes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
