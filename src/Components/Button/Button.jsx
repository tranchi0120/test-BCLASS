import PropTypes from 'prop-types'

const Button = ({ content, className }) => {
  return (
    <div>
      <button className={className}>{content}</button>
    </div>
  )
}

Button.propTypes = {
  content: PropTypes.node.isRequired
}

export default Button
