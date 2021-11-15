import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import Logo from '../../assets/logo.png';
import { FaWindowClose, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div classes={classes['navbar']}>
      <div className='navbar-header'>
        <div className={classes['navbar-header__logo']}>
          <img src={Logo} alt='Logo' />
        </div>
        {toggleMenu ? <FaWindowClose /> : <FaBars />}
      </div>

      <ul className={classes['navbar-links']}>
        <li className={classes['navbar__link']}>
          <a href='#departments'>departments</a>
        </li>
        <li className={classes['navbar__link']}>
          <a href='#achievements'>achievements</a>
        </li>
        <li className={classes['navbar__link']}>
          <a href='#news'>news</a>
        </li>
        <li className={classes['navbar__link']}>JOIN</li>
      </ul>
    </div>
  );
};

export default Navbar;
