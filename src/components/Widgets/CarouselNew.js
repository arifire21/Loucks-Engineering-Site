import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';

export default class extends React.Component {
  render() {
    return (
      <div className='carousel-container'>
        <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={100}
          totalSlides={3}
          isPlaying={true}
          playDirection='forward'
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              {/* todo replace "img-#" with actual project name */}
              <Image className='carousel-img' src={Placeholder_Image} alt='showcase-img-1' title='showcase-img-1'/>
              <p>img1</p>
            </Slide>
            <Slide index={1}>
              <Image className='carousel-img' src={Oceanic_Img} alt='showcase-img-oceanic' title='Oceanic at Pompano Pier'/>
              <p>Oceanic at Pompano Pier</p>
            </Slide>
            <Slide index={2}>
              <Image className='carousel-img' src={Lucky_Fish_Img} alt='showcase-img-lucky' title='Lucky Fish at Pompano Pier'/>
            </Slide>
          </Slider>
          <div className='btn-container'>
            <ButtonBack className='arrowbtn'>&lt;</ButtonBack>
            {/* <DotGroup className='arrowbtn'/> */}
            <ButtonNext className='arrowbtn'>&gt;</ButtonNext>
        </div>
        </CarouselProvider>
      </div>
    );
  }
}