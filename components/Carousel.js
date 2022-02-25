import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './Banner';

const Carousel = ({ carouselData }) => {
  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    className: 'w-full',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (carouselData.list.length === 1) {
    return <Banner bannersData={carouselData.list[0]} />
  }
  return (
    <Slider {...settings} className="md:w-full py-5 container md:container md:mx-auto">
      {carouselData.list?.map((data) => (
        <img src={data.imageURL} key={data.catId} className="w-full max-h-60 object-center md:h-full md:w-full md:max-h-96 md:object-center md:rounded-xl" />
      ))}
    </Slider>
  )
}

export default Carousel;