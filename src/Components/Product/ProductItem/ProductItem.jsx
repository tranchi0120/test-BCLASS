import image from '@images/image.png'
import style from '../styles.module.scss'
import { useState } from 'react'
import ToastBox from '@components/Product/toastBox/ToastBox.jsx'
import { dataToastBox } from '@utils//constant.js'

const ProductItem = (props) => {
    const { name, price, images } = props
    const [isShow, setIsShow] = useState(false)
    const [img, setImg] = useState(images[0])

    const toggleHover = (show) => {
        setIsShow(show)
        setImg(show ? images[1] : images[0])
    }

    return (
        <div>
            <div className={style.productItem_main}>
                <div
                    className={style.productItem_img}
                    onMouseEnter={() => toggleHover(true)}
                    onMouseLeave={() => toggleHover(false)}
                >
                    <img src={img} alt="Product" />
                    <div className={style.toastBox}>
                        {isShow && dataToastBox.map((toastIcon, index) => (
                            <ToastBox key={index} type={toastIcon.type} href={toastIcon.href} />
                        ))}
                    </div>
                </div>
                <h2 className={style.productItem_name}>{name}</h2>
                <p className={style.productItem_price}>${price}</p>
            </div>
        </div>
    )
}

export default ProductItem
