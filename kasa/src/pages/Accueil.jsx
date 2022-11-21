import React from 'react';

import { Link } from 'react-router-dom';

// Image de la banière
import image from '../assets/banner.png';

// Data produits
import products from '../datas/data.json';

// Slogan marketing de l'API (Fiabilité, Respect, Sécurité et Service / Engagements de KASA)
import marketing from '../datas/mkgData';

// Header de la page avec l'image
import Pagecentrale from '../components/Pagecentrale';

// Carte (vignettes ou cards) des logement photo (image) + intitulé (title)
import Cards from '../components/Cards';

const slogan = marketing.slogan;

// Affichage des vignettes on retourne les datas

const Products = () => {
  return (
    <div className="accueil">
      <div className="accueil__banner">
        <Pagecentrale image={image} title={slogan} />
      </div>{' '}
      <section className="accueil__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Cards image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;