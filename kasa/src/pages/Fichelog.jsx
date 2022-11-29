// useParams retourne un objet par paire (key/value) des paramètres dynamiques de l'URL actuelle
// qui ont été mis en correspondance par le <Route path>. Les routes enfants héritent de tous les paramètres dThumbnailse leurs routes parentes.

import { useParams, Navigate } from 'react-router-dom';
import products from '../datas/data.json';
import DetailLogement from '../components/DetailLogement';




const Fichelog = () => {
  // Récupération du bon produit
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);






  return (
    // Les balises vides, permettent de grouper une liste d’enfants sans ajouter de nœud supplémentaire au DOM.
    // A noter cette syntaxe n’accepte ni clés ni attributs.
    <>
    {
    product ? (
      // Affichage de la fiche produit si id OK
    <DetailLogement  />


//   Si id erroné renvoi sur la page d'erreur.

    ) : <Navigate replace to="/Error"/>
            }
          
    </>
  ) 
};



export default Fichelog;