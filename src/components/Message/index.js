import React from 'react';
import PropTypes from 'prop-types';

import { ContainerMessage } from './styles';

function Message({ type, message, ...props }) {
    return (
        <ContainerMessage className={type}>{message}</ContainerMessage>
    );
}

Message.defaultProps = {
    type: 'success'
};

Message.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'warning']),
    message: PropTypes.string.isRequired
}

export default Message;