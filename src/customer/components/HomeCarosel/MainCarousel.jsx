import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () =>{

    const items = mainCarouselData.map( (items)=> <img className='cursor-pointer ' 
    role='Presentation'src={items.image} alt = "home"/>)

    return(
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />
    )
}

export default MainCarousel;

