import React from 'react';
import styles from './Achievements.module.scss';
import AchievementsImage from '../../assets/Achievements.png';
import StarImage from '../../assets/Star.png';

const Achievements = () => {
  return (
    <div className={styles['achievements']}>
      <div className={styles['achievements-content']}>
        <h1>PRESTASI KAMI</h1>
        <p>
          Banyak kompetisi di bidang IT dan non-IT yang banyak diraih oleh
          siswa-siswi SMK telkom Makassar. Segala prestasi tersebut sangat
          membanggakan sekolah dan menjadi bekal untuk meraih masa depan yang
          gemilang
        </p>

        <div className={styles['achievements-content__stared']}>
          <img src={StarImage} alt='' />
          <p>Menjadi terbaik diantara yang terbaik!</p>
        </div>
      </div>
      <div className={styles['achievements-image']}>
        <img src={AchievementsImage} alt='achievements' />
      </div>
    </div>
  );
};

export default Achievements;
