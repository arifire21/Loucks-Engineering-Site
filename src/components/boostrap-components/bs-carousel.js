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
      className="fluid rounded-3 d-block"
      src={Oceanic_Img}
      alt="First slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="fluid rounded-3 d-block"
      src={Blu_Img}
      alt="Second slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <Image src={Mora_Grill_img} fluid='true' rounded='true'/> */}
    <img
      className="fluid rounded-3 d-block"
      src={Mora_Grill_img}
      alt="Third slide"
      width='700'
      height='500'
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}