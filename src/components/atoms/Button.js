import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick, ...props }) => (
  <button onClick={onClick} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
