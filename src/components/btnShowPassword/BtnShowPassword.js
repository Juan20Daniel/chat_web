import React from 'react';
import iconShowPass from '../../assets/showPass.svg';
import iconNotShowPass from '../../assets/notShowPass.svg';
import './btnShowPassword.css';
export const BtnShowPassword = ({ visiblePass, showPass }) => {
  return (
    <button type="button" className='show-password' onClick={() => showPass()}>
      <img src={visiblePass === 'text' ? iconNotShowPass : iconShowPass } alt="Icono" className='icon-input' />
    </button>
  )
}
