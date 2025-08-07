import {Carousel} from 'antd';
import {carouselData} from '../data/carousel_data';
import styles from '@/styles/carousel.module.scss'

function initTabIndex() {
  document.querySelectorAll('.slick-dots li button').forEach((dot) => {
    dot.tabIndex = "-1";
  });
}

export default function HomeCarousel(){
    return(
        <Carousel onInit={initTabIndex} className={styles.caroWrapper} arrows dots dotPosition='top' autoplay={{ dotDuration: true }} autoplaySpeed={4500} infinite>
          {carouselData.map((entry, index) =>
              <div key={index}>
                <img className={styles.caroImage}
                  src={entry.image.src}
                  alt={index}
                  width='600'
                  height='300'
                />
                <div className={styles.caption}>
                  <p className={styles.entryName}>{entry.name}</p>
                  <p>{entry.location}</p>
                </div>
            </div>
          )}
        </Carousel>
    )
}