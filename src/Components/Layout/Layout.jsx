import PropTypes from 'prop-types'
import Style from './Style.module.scss'

function MainLayOut({ children }) {
    return <main className={Style.container}>{children}</main>
}

MainLayOut.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayOut
