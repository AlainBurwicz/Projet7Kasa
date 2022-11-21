import React from 'react';

const Vendeur = ({ host }) => {
  const isHostSplited = host.name.split(' ');
  const [name, lastname] = isHostSplited;

  return (
    <div className="vendeur">
      <div className="vendeur__name">
        <p className="vendeur__firstname">{name.trim()}</p>
        <p className="vendeur__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="vendeur__picture" />
    </div>
  );
};

export default Vendeur;
