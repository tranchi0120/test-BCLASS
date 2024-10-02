import Button from '@components/Button/Button'
import style from './styles.module.scss'

const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      <h1 className={style.banner_title}>XStore Marseille04 Demo</h1>
      <p className={style.banner_content}>
        Make yours celebrations even more special this years with beautiful.
      </p>
      <Button content={'Go to shop'} className={style.btn} />
    </div>
  )
}

export default Banner
