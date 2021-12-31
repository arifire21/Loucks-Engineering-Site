import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
import { Typography } from '@material-ui/core';

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
              <Typography align='center'>ImgName</Typography>
              <Image className='carousel-img' src={Placeholder_Image} alt='showcase-img-1' title='showcase-img-1'/>
            </Slide>
            <Slide index={1}>
              <Typography align='center'>Oceanic at Pompano Pier</Typography>
              <Image className='carousel-img' src={Oceanic_Img} alt='showcase-img-oceanic' title='Oceanic at Pompano Pier'/>
            </Slide>
            <Slide index={2}>
              <Typography align='center'>Lucky Fish at Pompano Pier</Typography>
              <Image className='carousel-img' src={Lucky_Fish_Img} alt='showcase-img-lucky' title='Lucky Fish at Pompano Pier'/>
            </Slide>
          </Slider>

          <div className='btn-container'>
            <div className='single-btn'>
              <ButtonBack className='arrowbtn'>&lt;</ButtonBack>
            </div>
            <div className='single-btn'>
              <ButtonNext className='arrowbtn'>&gt;</ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}