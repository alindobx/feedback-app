import PropTypes from 'prop-types'
import FeedbackContext from '../../../context/FeedbackContext';
import {useContext} from 'react'



export default function Button({ children, version, type, isDisabled}) {
    const { feedbackEdit } = useContext(FeedbackContext)
    const {color, backgroundColor} = feedbackEdit

return (
    <button type={type} style={feedbackEdit && {color,backgroundColor}} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
)

}


Button.defaultProps = {
    version : 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}