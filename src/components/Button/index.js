import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer } from './styles';

function Button({ type, text, onChange, ...porps }) {
    return (
        <ButtonContainer type={type} >{text}</ButtonContainer>
    )
}

Button.defaultProps = {
    type: 'submit'
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
}


export default Button;