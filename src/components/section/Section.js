import React from 'react';
import './section.css';

const Section = ({children}) => {
  return (
    <section className='section'>
        {children}
    </section>
  )
}
export default Section;
