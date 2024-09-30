import image from '@images/image.png'
import style from '../style.module.scss'

const ProductItem = () => {

    return <div>
        <div className={style.productItem_img}>
            <img src={image} alt="#!" />
        </div>
        <h2 className={style.productItem_name}>10K Yellow Gold</h2>
        <p className={style.productItem_price}> $99.99</p>
    </div>
}

export default ProductItem
