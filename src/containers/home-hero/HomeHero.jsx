import React from 'react';
import styles from './HomeHero.module.scss';

const HomeHero = () => {
  return (
    <div className={styles['home-hero']}>
      <div className={styles['home-hero-content']}>
        <h1>KAMI SANG JUARA</h1>
        <p>Sekolah Kejuruan terbaik di Indonesia Timur</p>
      </div>

      <button className={styles['home-hero-button']}>INFORMASI PPDB</button>
    </div>
  );
};

export default HomeHero;
