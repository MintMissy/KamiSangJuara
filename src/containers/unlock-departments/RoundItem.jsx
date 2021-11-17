import React from 'react';
import styles from './RoundItem.module.scss';

const RoundItem = ({ src, alt, text }) => {
  return (
    <div className={styles['round-item']}>
      <div className={styles['round-item__image']}>
        <img src={src} alt={alt} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default RoundItem;
