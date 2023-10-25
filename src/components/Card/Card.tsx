import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <a href={link} className={styles.card} style={{ textDecoration: 'none', color: 'inherit' }}>
      <h3 className={styles['card-title']}>{title}</h3>
      <p className={styles['card-description']}>{description}</p>
    </a>
  );
}

export default Card;