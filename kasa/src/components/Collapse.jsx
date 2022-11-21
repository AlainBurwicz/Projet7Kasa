import React from 'react';

// Possibilité de faire un ajustement de l'ouverture du collapse avec un hook usestate
// import React, { useState } from 'react';
// function Example() {
// ...
//   }

const Collapse = ({ title, content }) => {
  const isCollapse = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    // Animation de rotation de la flèche Haut / Bas

    if (!divText.classList.contains('show')) {
      divText.classList.add('show');
      arrow.classList.add('rotate');
    } else {
      divText.classList.remove('show');
      arrow.classList.remove('rotate');
    }
  };


  return (
    <div className="collapse ">
      <button type="button" className="collapse__button" onClick={isCollapse}>{title}

    {/* Collapse développement et réduction du contenu du bouton. Il est en mode réduit par défaut défini par l'opérateur mathématique "&lt" => (moins que) */}
    {/* Après le click la zone se développe */}
        <p className="collapse__arrow">&lt;</p>
      </button>
    
      <div className="collapse__content">
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
