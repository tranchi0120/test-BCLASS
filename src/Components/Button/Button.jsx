import PropTypes from 'prop-types'
import style from './Style.module.scss'

const Button = ({ content }) => {
    return (
        <div>
            <button className={style.btn}>{content}</button>
        </div>
    )
}

Button.propTypes = {
    content: PropTypes.node.isRequired
}

export default Button
