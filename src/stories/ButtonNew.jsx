import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const ButtonNew = ({ primary, size, label, ...props }) => {
    const mode = primary ? 'btn__user-primary' : 'btn__user-secondary';
    return (
        <button type="button" className={['btn', `btn__${size}`, mode].join(' ')} {...props}>
            {label}
        </button>
    );
};

ButtonNew.propTypes = {
    primary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

ButtonNew.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};

export default ButtonNew;
