import Carousel from 'antd';
import {carouselData} from '../data/carousel_data';

export default function HomeCarousel(){
    return(
        <Carousel arrows autoplay={{ dotDuration: true }} autoplaySpeed={5000} infinite>
          {carouselData.map((entry, index) =>
              <div key={index}>
              <img
                src={entry.image.src}
                alt={index}
                width='700'
                height='500'
              />
              <div>
                <h5>{entry.name}</h5>
                <p>{entry.location}</p>
              </div>
            </div>
          )}
        </Carousel>
    )
}