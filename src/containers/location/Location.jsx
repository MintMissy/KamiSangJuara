import React from 'react';
import styles from './Location.module.scss';
import Logo from '../../assets/logo.png';
import LocationImg from '../../assets/location.png';

const Location = () => {
  return (
    <div className={styles['location']}>
      <div className={styles['location-content']}>
        <div className={styles['location-content__logo']}>
          <img src={Logo} alt='Logo' />
        </div>
        <p>
          Dengan tekad hendak membentuk insan berkarakter unggul dalam kerangka
          pencerdasan anak bangsa dan pembangunan peradaban bangsa
        </p>
        <address>
          Alamat : Jl. A.P Pettarani No. Gn Sari, Rappocini, Kota Makassar,
          Sulawesi Selatan 90222
        </address>
      </div>
      <div className={styles['location-image']}>
        <img src={LocationImg} alt='' />
      </div>
    </div>
  );
};

export default Location;
