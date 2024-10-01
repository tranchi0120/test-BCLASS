import shoppingCartIcon from '@icons/svgs/shopingCartIcon.svg'
import heartIcon  from '@icons/svgs/heartIcon.svg'
import reloadIcon from '@icons/svgs/reloadIcon.svg'
import eyeIcon from '@icons/svgs/eyeIcon.svg'
import style from '../styles.module.scss'

const ToastBox = ({type, href}) => {

    const onChangeIcon = type => {
        switch (type) {
            case 'shoppingCartIcon':
                return shoppingCartIcon
            case 'heartIcon':
                return heartIcon
            case 'reloadIcon':
                return reloadIcon
            case 'eyeIcon':
                return eyeIcon
            default:
                return null
        }
    }

    return (
        <div className={style.boxIcon}>
            <a href={href} >
                <img src={onChangeIcon(type)} alt={href} />
            </a>
        </div>
    )
}


export default ToastBox;