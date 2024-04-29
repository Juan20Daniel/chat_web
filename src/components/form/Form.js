import React from 'react';
import './form.css';
export const Form = ({ submit, title, desc, children }) => {
  return (
    <form className='form' onSubmit={submit}>
      <h1 className='title'>{title}</h1>
      <p className='desc'>{desc}</p>
      {children}
    </form>
  )
}