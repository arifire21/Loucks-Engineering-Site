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
<Carousel fade variant="dark">
  <Carousel.Item>
    <img
      className="fluid rounded-3 d-block w-100"
      src={Oceanic_Img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fluid rounded-3 d-block w-100"
      src={Blu_Img}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <Image src={Mora_Grill_img} fluid='true' rounded='true'/> */}
    <img
      className="fluid rounded-3 d-block w-100"
      src={Mora_Grill_img}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}