import {useState} from 'react'
import 'slick-carousel/slick/slick';
import Slider from 'react-slick';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
  }

  const imgCards = [
      {
        imageSrc: Image,
        title: 'img1',
        description: 'desc',
      },
      {
          imageSrc: Oceanic_Img,
          title: 'img2',
          description: 'desc',
      },
      {
          imageSrc: Lucky_Fish_Img,
          title: 'img3',
          description: 'desc',
      },
      {
          imageSrc: Image,
          title: 'img4',
          description: 'desc',
      },
  ]   // end card list

  return (
      <div className='content'>

        <button onCLick={sliderRef?.slickPrev} className='arrowbtn'>
          <ArrowLeftIcon />
        </button>
        <button onCLick={sliderRef?.sliderNext} className='arrowbtn'>
          <ArrowRightIcon />
        </button>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {imgCards.map((card, index) => (
            <div key={index}>
              <h2>{card.title}</h2>
              <img alt={card.title} src={card.imageSrc} width="100" height="100" />
              <p>{card.description}</p>
            </div>
          ))}
        </Slider>
      </div>
  )
}