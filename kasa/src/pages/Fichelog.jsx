// useParams retourne un objet par paire (key/value) des paramètres dynamiques de l'URL actuelle
// qui ont été mis en correspondance par le <Route path>. Les routes enfants héritent de tous les paramètres dThumbnailse leurs routes parentes.
import { useParams, Navigate } from 'react-router-dom';
import products from '../datas/data.json';
import Rating from '../components/Rating';
import Cial from '../components/Vendeur';
import Slider from '../components/Slideshow';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';



const Fichelog = () => {
  // Récupération du bon produit
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const { title, location, rating, host, equipments, description, pictures } = product;





  return (
    <>
    {
    product ? (
    <div className="fichelog">
      <Slider slides={pictures} />
      <div className="fichelog__content">
        <div className="fichelog__informations">
          <h1 className="fichelog__title">{title}</h1>
          <p className="fichelog__location">{location}</p>
          <div className="fichelog__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="fichelog__rating-and-host">
          <Rating rating={rating} />
          <Cial host={host} />
        </div>
      </div>
      <div className="fichelog__dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipement" content={equipments} />
      </div>
    </div>
    // console.log("BURK",product):
    ) : <Navigate replace to="/Error"/>
            }
          
    </>
  ) 
};



export default Fichelog;
