import React from 'react';

// l'Utilisation du hook usestate permet d'utiliser l'état et d'autre fonctionnalités React sans écrire de classe

import { useState } from 'react';

import flecheGauche from '../assets/arrowLeft.svg';
import flecheDroite from '../assets/arrowRight.svg';

const Slideshow = ({ slides }) => {
  // Etat à Zéro
  const [current, setCurrent] = useState(0); // tableau current : objet actuel / setCurrent : ensemble
  const length = slides.length; // Lenght représente le nombre d'éléments dans ce tableau

  // Diapo suivante  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Diapo Précédente

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {/* On mappe la valeur courante à traiter */}
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              // index de l'élément qui est traité
              index === current
                ? 'slide slider__active-picture'
                : 'slide slider__inactive-picture'
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* Obtenir le bouton s'il y a plus d'une image */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={flecheGauche} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={flecheDroite} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slideshow;
