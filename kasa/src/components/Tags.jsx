import React from 'react';

// Affichage des tags Type / Localisation...

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <p className="tag__text">{getTag}</p>
    </div>
  );
};

export default Tags;
