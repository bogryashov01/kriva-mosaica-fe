import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';
import { Carousel1, Carousel2, Carousel3, Carousel4, Carousel5, Carousel6 } from '../../assets';

import './carousel.css';

function CarouselBlock() {
  const { t } = useTranslation();
  return (
    <div className="carousle-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title uppercase end">{t('carousel-title1')}</h3>
            <h3 className="end">{t('carousel-text1')}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel6} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBlock;
