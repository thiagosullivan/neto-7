import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BannerOne from '../../assets/neto-banner-1.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerText, HeroSliderContainer } from './style';

function HeroSlider() {
  return (
    <HeroSliderContainer>
        <BannerText>
            <h1>
                Nilson<br></br>
                <span>Neto</span>
            </h1>
        </BannerText>
        <Carousel
            autoPlay
            infiniteLoop
            swipeable={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
        >
            <div>
                <img alt="" src="https://raw.githubusercontent.com/thiagosullivan/neto-7/main/assets/neto-banner-1.png" />
            </div>
            <div>
                <img alt="" src="https://raw.githubusercontent.com/thiagosullivan/neto-7/main/assets/neto-banner-1.png" />
            </div>
        </Carousel>
    </HeroSliderContainer>
  )
}

export default HeroSlider;