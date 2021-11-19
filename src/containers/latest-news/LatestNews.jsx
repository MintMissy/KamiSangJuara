import React from 'react';
import styles from './LatestNews.module.scss';
import NewsCard from './NewsCard';

import FirstCardImage from '../../assets/card-1.png';
import SecondCardImage from '../../assets/card-2.png';
import ThirdCardImage from '../../assets/card-3.png';

const LatestNews = () => {
  return (
    <div className={styles['latest-news']}>
      <div className={styles['latest-news-content']}>
        <h1>BERITA TERKINI</h1>
      </div>
      <div className={styles['latest-news-cards']}>
        <NewsCard
          title='Menggelar Wisuda Online'
          date='By Arman Syarif | June 29th, 2020'
          img={FirstCardImage}
          firstParagraph='Makassar - SMK Telkom Makassar wisuda online untuk 370 siswa angkatan ke-26(Senin, 29 Juni 2020)'
          secondParagraph='Acara rutin setiap penghujung tahun ajaran ini, untuk kali ini memang (...)'
        />
        <NewsCard
          title='Ujian Komprehensif II'
          date='By Arman Syarif | June 29th, 2020'
          img={SecondCardImage}
          firstParagraph='Makassar - SMK Telkom Makassar wisuda online untuk 370 siswa angkatan ke-26(Senin, 29 Juni 2020)'
          secondParagraph='Acara rutin setiap penghujung tahun ajaran ini, untuk kali ini memang (...)'
        />
        <NewsCard
          title='Halal Bi Halal Virtual'
          date='By Arman Syarif | June 29th, 2020'
          img={ThirdCardImage}
          firstParagraph='Makassar - SMK Telkom Makassar wisuda online untuk 370 siswa angkatan ke-26(Senin, 29 Juni 2020)'
          secondParagraph='Acara rutin setiap penghujung tahun ajaran ini, untuk kali ini memang (...)'
        />
      </div>
    </div>
  );
};

export default LatestNews;
