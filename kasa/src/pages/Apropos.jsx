import Banner from '../components/Banner';
// import dataMkg from '../datas/mkgData';
// import Collapse from '../components/Collapse';
import Collapse from '../components/Collapse';
import imageBanner from '../assets/aproposBannerDsk.png';

const Apropos=()=> {
  // Basculement pour afficher le contenu dans une liste déroulante par rapport au titre

  // const content=(title)=> {
  //   switch (title) {
  //     case 'fiabilite':
  //       return dataMkg.fiabilite;
  //     case 'respect':
  //       return dataMkg.respect;
  //     case 'service':
  //       return dataMkg.service;
  //     case 'securite':
  //       return dataMkg.securite;
  //     default:
  //       console.log('default');
  //     break;
  //   }
  // }

  // ;

  return (

    <>
    <div className="apropos">
    <Banner image={imageBanner} />
        <Collapse key="Dropdown_1" titre="Fiabilité" type="large">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </Collapse>

        <Collapse key="Dropdown_2" titre="Respect" type="large">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse key="Dropdown_3" titre="Service" type="large">
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Collapse>
        <Collapse key="Dropdown_4" titre="Sécurité" type="large">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
    
    </div>
    
</>

    // <div className="apropos">
    //   <Banner image={imageBanner} />
    //   <div className="apropos__dropdowns">
    //     <Collapse title="Fiabilité" content={content('fiabilite')} />
    //     <Collapse title="Respect" content={content('respect')} />
    //     <Collapse title="Service" content={content('service')} />
    //     <Collapse title="Sécurité" content={content('securite')} />
    //   </div>
    // </div>
    )
}

export default Apropos;