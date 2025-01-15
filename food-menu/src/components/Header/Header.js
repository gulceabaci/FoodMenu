import React from 'react'
import "./Header.scss";
import Navbar from './Navbar';
import SearchForm from './SearchForm';


function Header() {
  return (
    <header className='header'>
        <Navbar />
    </header>
  )
}

export default Header
