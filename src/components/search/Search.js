import React from 'react';
import './search.css';
import iconSearch from '../../assets/iconSearch.svg';

const Search = () => {
  return (
    <div className='search'>
      <img className='icon-search' src={iconSearch} alt="Icono de buscar" />
      <input className='input-search' placeholder='Buscar' />
    </div>
  );
}
export default Search;
