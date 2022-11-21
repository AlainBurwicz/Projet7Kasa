import Banner from '../components/Banner';
import dataMkg from '../datas/mkgData';
import Collapse from '../components/Collapse';
import imageBanner from '../assets/aproposBannerDsk.png';

const Apropos = () => {
  // Basculement pour afficher le contenu dans une liste déroulante par rapport au titre

  const content = (title) => {
    switch (title) {
      case 'fiabilite':
        return dataMkg.fiabilite;
      case 'respect':
        return dataMkg.respect;
      case 'service':
        return dataMkg.service;
      case 'securite':
        return dataMkg.securite;
      default:
        console.log('default');
        break;
    }
  };

  return (
    <div className="apropos">
      <Banner image={imageBanner} />
      <div className="apropos__dropdowns">
        <Collapse title="Fiabilité" content={content('fiabilite')} />
        <Collapse title="Respect" content={content('respect')} />
        <Collapse title="Service" content={content('service')} />
        <Collapse title="Sécurité" content={content('securite')} />
      </div>
    </div>
  );
};

export default Apropos;
