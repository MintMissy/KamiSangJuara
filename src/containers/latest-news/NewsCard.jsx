import React from 'react';
import styles from './NewsCard.module.scss';

const NewsCard = (props) => {
  return (
    <div className={styles['news-card']}>
      <header className={styles['news-card-header']}>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
      </header>
      <hr className={styles['news-card-hr']} />
      <div className={styles['news-card-image']}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles['news-card-content']}>
        <p>{props.firstParagraph}</p>
        <p>{props.secondParagraph}</p>
      </div>
    </div>
  );
};

export default NewsCard;
