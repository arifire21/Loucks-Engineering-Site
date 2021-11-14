import {useState} from 'react'
import 'slick-carousel/slick/slick';
import Slider from 'react-slick';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Image from './images/examplebuilding.png';
// import Oceanic_Img from './images/oceanic.jpg';
// import Lucky_Fish_Img from './images/lucky_fish.jpg';

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
          imageSrc: 'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          title: 'img1',
          description: 'desc',
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'img2',
            description: 'desc',
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'img3',
            description: 'desc',
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'img4',
            description: 'desc',
        },
    ]   // end card list

    return (
        <div className='content'>

            <div className='controls'>
                <button onCLick={sliderRef?.slickPrev}>
                <ArrowLeftIcon />
                </button>
                <button onCLick={sliderRef?.slickNext}>
                <ArrowRightIcon />
                </button>
            </div>

          <Slider ref={setSliderRef} {...sliderSettings}>
            {imgCards.map((card, index) => (
              <div key={index}>
                <h2>{card.title}</h2>
                <img alt={card.title} src={card.imageSrc} width="100" height="100" />
                <p>{card.description}</p>
                {/* <button className='btn'>Buy Now</button> */}
              </div>
            ))}
          </Slider>
        </div>
    )
}