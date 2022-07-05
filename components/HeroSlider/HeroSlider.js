import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BannerOne from '../../assets/neto-banner-1.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroSliderContainer } from './style';

function HeroSlider() {
  return (
    <HeroSliderContainer>
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
                <img alt="" src={BannerOne} />
            </div>
            <div>
                <img alt="" src="https://cdn-1.motorsport.com/images/amp/2jXLAyN6/s1000/lewis-hamilton-mercedes-w13-1.jpg" />
            </div>
        </Carousel>
    </HeroSliderContainer>
  )
}

export default HeroSlider;