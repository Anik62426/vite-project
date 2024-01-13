import React from "react";
import MainCarousel from "../../components/HomeCarosel/MainCarousel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from '/vite-project/src/Data/mens_kurta';

const Homepage = () =>{
    return(
        <div>
            <MainCarousel/>

          <div className="space-y-10 py-20 flex flex-col justify-center lg:px-5 ">
             <HomeSectionCarosel data={mens_kurta} sectionName={"Mens"}/>
             <HomeSectionCarosel data={mens_kurta} sectionName={"Mens"}/>
             <HomeSectionCarosel data={mens_kurta} sectionName={"Mens"}/>
             <HomeSectionCarosel data={mens_kurta} sectionName={"Mens"}/>
             <HomeSectionCarosel data={mens_kurta} sectionName={"Mens"}/>
             <HomeSectionCarosel data={mens_kurta} sectionName={"Mens"}/>
          
           </div>
        </div>
    )
}

export default Homepage;