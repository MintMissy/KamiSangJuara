import React from 'react';
import RoundItem from './RoundItem';
import styles from './UnlockDepartments.module.scss';
import ComputerIcon from '../../assets/computer-icon.png';
import EthernetIcon from '../../assets/ethernet-icon.png';
import HotelIcon from '../../assets/hotel-icon.png';
import NetworkIcon from '../../assets/network-icon.png';
import PlaneIcon from '../../assets/plane-icon.png';

const UnlockDepartments = () => {
  return (
    <div className={styles['unlock-departments']}>
      <div className={styles['unlock-departments-content']}>
        <h1>MEMBUKA 5 JURUSAN</h1>
        <p>
          SMK Telkom Makassar dengan tekad hendak membentuk insan berkarakter
          unggul dalam kerangka pencerdasan anak bangsa dan pembangunan
          peradaban bangsa membuka 5 kompetensi keahlian
        </p>
      </div>
      <div className={styles['unlock-departments-icons']}>
        <RoundItem
          src={ComputerIcon}
          alt='Computer'
          text='Teknik Komputer dan Jaringan'
        />
        <RoundItem
          src={EthernetIcon}
          alt='Ethernet'
          text='Teknik Transmisi Dan Komunikasi'
        />
        <RoundItem
          src={NetworkIcon}
          alt='Network'
          text='Teknik Jaringan Akses'
        />
        <RoundItem src={HotelIcon} alt='Hotel' text='Akomodasi Perhotelan' />
        <RoundItem src={PlaneIcon} alt='Plane' text='Perjalanan Wisata' />
      </div>
      <button className={'btn'}>SELENGKAPNYA </button>
    </div>
  );
};

export default UnlockDepartments;
