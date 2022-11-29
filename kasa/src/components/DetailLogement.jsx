import { useParams } from 'react-router-dom';
import products from '../datas/data.json';
import Cial from '../components/Vendeur';
import Rating from '../components/Rating'
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';
import Slider from '../components/Gallery';




export default function DetailLogement() {

      // Récupération du bon produit
  const { productId } = useParams();

  console.log("Hello", productId);
  const product = products.find((product) => product.id === productId);
//   console.log('L14', product); 

const { title, location, rating, host, equipments, description, pictures } = product;  

console.log('L17', product);


        return (
        // On retourne les éléments de la page produit
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
            <div className="fichelog__dropdown">
              <Collapse key = "zoneDesc" title="Description" content={description} />
              <Collapse key = "zoneEqu" title="Equipement" content={equipments} />
            </div>
          </div>
    )}




