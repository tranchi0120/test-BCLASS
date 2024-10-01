import PropTypes from 'prop-types'
import style from '../Styles.module.scss'

const Menu = ({ context, href }) => {
    return (
        <>
            <a className={style.menu_Item} href={href}>
                {context}
            </a>
        </>
    )
}

Menu.propTypes = {
    context: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default Menu
