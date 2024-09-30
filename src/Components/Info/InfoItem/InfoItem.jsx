import deliveryIcon from '@icons/svgs/deliveryIcon.svg'
import payments from '@icons/svgs/paymentIcon.svg'
import shopping from '@icons/svgs/shoppingIcon.svg'
import chat from '@icons/svgs/chatIcon.svg'
import PropTypes from 'prop-types'

import style from '../style.module.scss'

const InfoItem = ({ type, title, content }) => {
    const handleChangeIcon = (type) => {
        switch (type) {
            case 'delivery':
                return deliveryIcon
            case 'payments':
                return payments
            case 'shopping':
                return shopping
            case 'chat':
                return chat
        }
    }

    return (
        <div>
            <div className={style.containerInforItem}>
                <div>
                    <img src={handleChangeIcon(type)} alt='#!' />
                </div>
                <div className={style.containerContent}>
                    <h2 className={style.containerContent_title}>{title}</h2>
                    <p className={style.containerContent_content}>{content}</p>
                </div>
            </div>
        </div>
    )
}

InfoItem.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

export default InfoItem
