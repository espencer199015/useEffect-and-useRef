import React from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      {card ? (
        <div>
          <span className={styles.number-letter}>{card.value}</span>
          <span className={styles.shape}>{card.suit}</span>
        </div>
      ) : (
        <p>No card to display</p>
      )}
    </div>
  );
};

export default Card;