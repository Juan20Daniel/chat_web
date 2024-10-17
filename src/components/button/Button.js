import React from 'react';
import './button.css';
import Spinner from '../spinner/Spinner';
const colors = {
  error:'color-error',
  confirm:'color-confirm',
  success:'color-success',
  cancel:'color-cancel',
  normal:'color-normal'
}
const Button = ({ type, value, btnColor, colorSpinner, action, isLoading=false, disable=false }) => {
  const btnAction = () => {
    if(disable) return;
    if(action) action();
  }
  return (
    <button 
      type={type} 
      className={
        `btn-submit ${colors[btnColor]} ${disable && 'disable-btn'}`
      } 
      onClick={() => btnAction()}
    >
      {isLoading ? <Spinner size={20} color={colorSpinner} /> : value}
    </button>
  );
}
export default Button;