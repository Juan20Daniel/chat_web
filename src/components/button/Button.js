import React from 'react';
import './button.css';
import Spinner from '../spinner/Spinner';
const colors = {
  error:'color-error',
  confirm:'color-confirm',
  success:'color-success',
  cancel:'color-cancel'
}
export const Button = ({ type, value, btnColor, colorSpinner, action, isLoading }) => {
  const btnAction = () => {
    if(action) action();
  }
  return (
    <button type={type} className={`btn-submit ${colors[btnColor]}`} onClick={() => btnAction()}>
      {isLoading ? <Spinner size={20} color={colorSpinner} /> : value}
    </button>
  )
}
