import React from 'react';

// Affichages des cartes appartements

const Cards = ({ image, title }) => {
  return (
    <div className="card">
      {' '}
      <img src={image} alt="" className="card__img" />{' '}
      <div className="card__overlay"></div>{' '}
      <h2 className="card__title"> {title}</h2>{' '}
    </div>
  );
};

export default Cards;
