import React from 'react';

import etoilerouge from '../assets/starRouge.svg';
import etoilegrise from '../assets/starGrise.svg';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Boucle servant à afficher l'etoile selon l'évaluation*/}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={etoilerouge}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={etoilegrise}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;
