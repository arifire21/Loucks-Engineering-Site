import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { Typography } from '@material-ui/core';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
import Blu_Img from '../../images/blu-apt.jpg';
import Funky_Buddha_Img from '../../images/funkyb.png';
import Mora_Grill_img from '../../images/mora-grill.jpg'
import Temp from '../../images/warehouse.jpg';

export default class extends React.Component {
  render() {
    return (
      <div className='carousel-container'>
        <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={100}
          totalSlides={6}
          isPlaying={true}
          playDirection='forward'
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              {/* <Typography align='center' variant='caption'>Blu Apartments, Marina Mile Blvd</Typography> */}
              <Image className='carousel-img' src={Blu_Img} alt='showcase-blu-apts' title='Blu Apartments, Marina Mile Blvd'/>
              <caption className='carousel-caption'>Blu Apartments, Marina Mile Blvd</caption>
            </Slide>
            <Slide index={1}>
              {/* <Typography align='center' variant='caption'>Oceanic, Pompano Pier</Typography> */}
              <Image className='carousel-img' src={Oceanic_Img} alt='showcase-img-oceanic' title='Oceanic, Pompano Pier'/>
              <caption className='carousel-caption'>Oceanic, Pompano Pier</caption>
            </Slide>
            <Slide index={2}>
              {/* <Typography align='center' variant='caption'>Lucky Fish, Pompano Pier</Typography> */}
              <Image className='carousel-img' src={Lucky_Fish_Img} alt='showcase-img-lucky' title='Lucky Fish, Pompano Pier'/>
              <caption className='carousel-caption'>Lucky Fish, Pompano Pier</caption>
            </Slide>
            <Slide index={3}>
              {/* <Typography align='center' variant='caption'>Funky Buddha Brewery, Oakland Park</Typography> */}
              <Image className='carousel-img' src={Funky_Buddha_Img} alt='showcase-img-funky-buddha' title='Funky Buddha Brewery, Oakland Park'/>
              <caption className='carousel-caption'>Funky Buddha Brewery, Oakland Park</caption>
            </Slide>
            <Slide index={4}>
              {/* <Typography align='center' variant='caption'>ImgName</Typography> */}
              <Image className='carousel-img' src={Temp} alt='###' title='###'/>
              <caption className='carousel-caption'>ImgName</caption>
            </Slide>
            <Slide index={5}>
              {/* <Typography align='center' variant='caption'>Mora Grill, Fort Lauderdale</Typography> */}
              <Image className='carousel-img' src={Mora_Grill_img} alt='showcase-mora-grill' title='Mora Grill, Pompano Beach'/>
              <caption className='carousel-caption'>Mora Grill, Fort Lauderdale</caption>
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