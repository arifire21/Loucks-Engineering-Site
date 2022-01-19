import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { Typography } from '@material-ui/core';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
import Blu_Img from '../../images/blu-apt.jpg';
import Funky_Buddha_Img from '../../images/funkyb.png';
import Temp from '../../images/warehouse.jpg';

export default class extends React.Component {
  render() {
    return (
      <div className='carousel-container'>
        <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={100}
          totalSlides={5}
          isPlaying={true}
          playDirection='forward'
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <Typography align='center'>Blu Apartments, Marina Mile Blvd</Typography>
              <Image className='carousel-img' src={Blu_Img} alt='showcase-blu-apts' title='Blu Apartments, Marina Mile Blvd'/>
            </Slide>
            <Slide index={1}>
              <Typography align='center'>Oceanic, Pompano Pier</Typography>
              <Image className='carousel-img' src={Oceanic_Img} alt='showcase-img-oceanic' title='Oceanic, Pompano Pier'/>
            </Slide>
            <Slide index={2}>
              <Typography align='center'>Lucky Fish, Pompano Pier</Typography>
              <Image className='carousel-img' src={Lucky_Fish_Img} alt='showcase-img-lucky' title='Lucky Fish, Pompano Pier'/>
            </Slide>
            <Slide index={4}>
              <Typography align='center'>Funky Buddha Brewery, Oakland Park</Typography>
              <Image className='carousel-img' src={Funky_Buddha_Img} alt='showcase-img-funky-buddha' title='Funky Buddha Brewery, Oakland Park'/>
            </Slide>
            <Slide index={5}>
              <Typography align='center'>ImgName</Typography>
              <Image className='carousel-img' src={Temp} alt='###' title='###'/>
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