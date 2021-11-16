import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../assets/logo.png';
import { FaWindowClose, FaBars } from 'react-icons/fa';

function Menu({ onLinkClick }) {
  return (
    <>
      <li className={styles['navbar__link']} onClick={() => onLinkClick()}>
        <a href='#departments'>departments</a>
      </li>
      <li className={styles['navbar__link']} onClick={() => onLinkClick()}>
        <a href='#achievements'>achievements</a>
      </li>
      <li className={styles['navbar__link']} onClick={() => onLinkClick()}>
        <a href='#news'>news</a>
      </li>
      <li className={styles['navbar__link']} onClick={() => onLinkClick()}>
        join
      </li>
    </>
  );
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-header']}>
        <div className={styles['navbar-header__logo']}>
          <img src={Logo} alt='Logo' />
        </div>
        {toggleMenu ? (
          <FaWindowClose
            className={styles['navbar-header__toggle-icon']}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <FaBars
            className={styles['navbar-header__toggle-icon']}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
      </div>

      <ul className={styles['navbar-links']}>
        {<Menu onLinkClick={() => {}} />}
      </ul>

      {toggleMenu && (
        <ul className={styles['navbar-mobile-links']}>
          <Menu onLinkClick={() => setToggleMenu(false)} />
        </ul>
      )}
    </div>
  );
};

export default Navbar;
