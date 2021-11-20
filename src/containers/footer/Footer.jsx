import React from 'react';
import styles from './Footer.module.scss';
import FacebookIcon from '../../assets/icon-fb.png';
import InstagramIcon from '../../assets/icon-instagram.png';
import TwitterIcon from '../../assets/icon-twitter.png';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-content']}>
        © Copyright 2019 | SMK Telkom Makassar | Powered by Carakde.id
      </div>
      <div className={styles['footer-socials']}>
        <img src={FacebookIcon} alt='Facebook' />
        <img src={InstagramIcon} alt='Instagram' />
        <img src={TwitterIcon} alt='Twitter' />
      </div>
    </div>
  );
};
export default Footer;
