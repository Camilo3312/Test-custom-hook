import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../Ui/Button/Button';

import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="center_header">
        <nav className='nav_header'>
          <NavLink to='/contact'><Button style='btn_default' value='Contact' /></NavLink>
          <NavLink to='/'><Button style='btn_default' value='About' /></NavLink>
          <NavLink to='/'><Button style='btn_default' value='Help' /></NavLink>
        </nav>
      </div>
    </header>
  )
}
