import React from 'react';

const Pagecentrale = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Pagecentrale;
