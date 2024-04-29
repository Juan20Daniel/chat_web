import React from 'react';
import './inputgroup.css';
import { BtnShowPassword } from '../btnShowPassword/BtnShowPassword';
import { useInfoNavigator } from '../../hooks/useInfoNavigator';
import { InputGruopViewModel } from './InputGroupViewModel';
export const InputGroup = ({ type, placeholder, camp, getValue, exp, verifyPaswords, children }) => {
  const { visiblePass, showPass, checkValue } = InputGruopViewModel(camp, getValue, exp, verifyPaswords);
  const { isEdge } = useInfoNavigator();
  return (
    <div className={`input-group ${(type ==='password' && !isEdge) && 'pass'} ${camp.status}`} >
      <div className='icon-input'>
        {children}
      </div>
      <input
        type={type === 'password' ? visiblePass : type} 
        placeholder={placeholder}
        className='input-text'
        value={camp.valueCamp}
        onKeyUp={checkValue}
        onBlur={checkValue}
        onChange={(e) => getValue({...camp, valueCamp:e.target.value})}
      />
      {(type ==='password' && !isEdge) &&
        <BtnShowPassword visiblePass={visiblePass} showPass={showPass} />
      }
    </div>
  )
}
