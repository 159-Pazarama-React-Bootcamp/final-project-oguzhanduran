import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function InputField(props) {
  /*Biz aşağıda değişken olan değerleri (type, placeholder, label) destructuring yöntemiyle propstan alıp farklı componentlerde farklı isim ve şekillerle kullanmak adına düzenledik */

  const { label, type, placeholder, value, onChange } = props;

  return (
    <div className="field-container">
      <span className="field-title">{label}</span>
      <div>
        <input
          value={value}
          onChange={onChange}
          className="field-input"
          type={type}
          placeholder={placeholder}
        />
        {type === 'password' && <span className="field-password">Forgot Password?</span>}
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputField;
