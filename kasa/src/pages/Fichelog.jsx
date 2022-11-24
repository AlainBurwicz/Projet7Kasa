// useParams retourne un objet par paire (key/value) des paramètres dynamiques de l'URL actuelle
// qui ont été mis en correspondance par le <Route path>. Les routes enfants héritent de tous les paramètres dThumbnailse leurs routes parentes.

import { useParams, Navigate } from 'react-router-dom';
import products from '../datas/data.json';
// import Rating from '../components/Rating';
// import Cial from '../components/Vendeur';
// import Slider from '../components/Slideshow';
// import Tags from '../components/Tags';
// import Collapse from '../components/Collapse';
import DetailLogement from '../components/DetailLogement';




const Fichelog = () => {
  // Récupération du bon produit
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

//   const { title, location, rating, host, equipments, description, pictures } = product;





  return (
    <>
    {
    product ? (
      // Affichage de la fiche produit si id OK
    <DetailLogement  />


//   Si id erroné

    ) : <Navigate replace to="/Error"/>
            }
          
    </>
  ) 
};



export default Fichelog;