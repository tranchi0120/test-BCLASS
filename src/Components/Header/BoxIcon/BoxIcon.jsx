import PropTypes from 'prop-types'
import fbIcon from '@icons/svgs/fbIcon.svg'
import ytbIcon from '@icons/svgs/ytbIcon.svg'
import ingIcon from '@icons/svgs/ingsIcon.svg'
import style from '../Styles.module.scss'

const BoxIcon = ({ type, href }) => {
    console.log(href)
    const getIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon
            case 'ytb':
                return ytbIcon
            case 'ins':
                return ingIcon
            default:
                return null
        }
    }

    return (
        <div className={style.boxIcon}>
            <img src={getIcon(type)} alt={type} />
        </div>
    )
}

BoxIcon.propTypes = {
    type: PropTypes.string.isRequired,
    href: PropTypes.string
}

export default BoxIcon
