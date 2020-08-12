import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({ label, type, id, name, value, maxLength, placeholder, disabled, onChange, ...props }) {
    const handlerInputChange = useCallback(e => {
        return onChange(e.target.value);
    }, [onChange]);

    return (
        <Container>
            <label>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={handlerInputChange}
                disabled={disabled}
            />
        </Container>
    );
}

Input.defaultProps = {
    maxLength: '',
    value: '',
    placeholder: '',
    disabled: false,
};

Input.propTypes = {
    maxLength: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: PropTypes.bool,
    placeholderAlt: PropTypes.string,
    onChange: PropTypes.func,
}

export default Input;