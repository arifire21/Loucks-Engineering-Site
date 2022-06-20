import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
import Blu_Img from '../../images/blu-apt.jpg';
import Funky_Buddha_Img from '../../images/funkyb.png';
import Mora_Grill_img from '../../images/mora-grill.jpg'
import Temp from '../../images/warehouse.jpg';

import { Carousel, Image } from 'react-bootstrap';

export default function BootstrapCarousel() {
  return (
<Carousel fade variant="light">
  <Carousel.Item>
    <img
      className="fluid rounded-custom d-block"
      src={Oceanic_Img}
      alt="First slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>Oceanic</h5>
      <p>Pompano Pier</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fluid rounded-custom d-block"
      src={Lucky_Fish_Img}
      alt="Second slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>Lucky Fish</h5>
      <p>Pompano Pier</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fluid rounded-custom d-block"
      src={Blu_Img}
      alt="Third slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>Blu Apartments</h5>
      <p>Marina Mile Blvd, Fort Lauderdale</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fluid rounded-custom d-block"
      src={Mora_Grill_img}
      alt="Fourth slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>Mora Grill</h5>
      <p>Pomano Beach</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}