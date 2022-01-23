import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName, onClick, className } = props;
  return (
    <div className="button">
      <button onClick={onClick} className={className}>
        {buttonName}{' '}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
