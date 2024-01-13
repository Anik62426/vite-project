import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { mens_kurta } from '/vite-project/src/Data/mens_kurta';


const HomeSectionCarosel = ({data,sectionName}) =>{
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
const items = data.map((item) => <HomeSectionCard product={item}/>)

return(
 <div className='  px-4 lg:px-8 '>
    <h2 className='text-2xl font-extrabold text-gray-700 py-4 '>{sectionName}</h2>
    <div className='relative '>
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={3000}
    infinite
    responsive={responsive}  
    disableDotsControls
   />
   </div>
</div>

)}

export default HomeSectionCarosel;





