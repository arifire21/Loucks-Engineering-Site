import { Carousel } from 'react-bootstrap';
import { carouselData } from '../data/carousel_data';

export default function HomeCarousel() {
  return (
<Carousel fade variant="light">
  {carouselData.map((entry, index) =>
      <Carousel.Item key={index}>
      <img
        className="fluid rounded-custom d-block"
        src={entry.image}
        alt={index}
        width='700'
        height='500'
      />
      <Carousel.Caption>
        <h5>{entry.name}</h5>
        <p>{entry.location}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )}
</Carousel>
  );
}