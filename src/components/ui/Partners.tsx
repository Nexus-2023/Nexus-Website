import React from "react"

import Image from "next/image"
 
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { partnerData } from "@/constants/data"
import { PartnersCard } from "./Card"
export default function Partners() {
  return (
    <div
      className="flex   lg:flex-row flex-col  justify-center items-center lg:space-x-16  lg:space-y-0 space-y-20  w-full "
      id="partnersCard"
    >
      {partnerData.map((data, index) => (
        <PartnersCard
          key={index}
          text={data.text}
          width={data.width}
          height={data.height}
          src={data.src}
        />
      ))}
    </div>
  )
}

export function PartnerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
 
    <div className=" h-[20vh] z-10  w-[60vw]  ">
      <Slider {...settings}> 
      
       <div className="  w-full   flex flex-col  ">
        <div className="h-[87px] mt-3 ">

       <img src="/Images/AnnouncementPage/partnerIcon1.svg" width="200px" height="200px" alt="partner icon"  />
        </div>
       {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}

   <h3 className=" text-gray-400 text-xl  ">DVT partner </h3>
      </div>
      
      <div className="  w-full   flex flex-col  ">
        <div className="h-[100px] ">

       <img src="/Images/AnnouncementPage/hash.jpg" width="200px" height="200px" alt="partner icon" />
       {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}

</div>
<h3 className=" text-gray-400 text-xl ">Validator </h3>
      </div>


      <div className="  w-full   flex flex-col  ">
        <div className="h-[100px] ">

       <img src="/Images/AnnouncementPage/Shellboxes.png" width="200px" height="200px" alt="partner icon" />
       {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
       </div>
<h3 className=" text-gray-400 text-xl ">Audit Partner </h3>
      </div>


      <div className="  w-full   flex flex-col  ml-4">
        <div className="h-[80px] mt-5">

       <img src="/Images/AnnouncementPage/stakely.svg" width="200px" height="200px" alt="partner icon" />
       {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
       </div>
<h3 className=" text-gray-400 text-xl ">Validator </h3>
      </div>


      <div className="  w-full   flex flex-col ml-8 ">
        <div className="h-[100px] ">

       <img src="/Images/AnnouncementPage/Zeeve.svg" width="130px" height="130px" alt="partner icon" />
       {/* <div className="  h-[0.1rem]   min-h-max    max-w-36 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
       </div>
<h3 className=" text-gray-400 text-xl ">Raas </h3>
      </div>
      </Slider>
    </div>
  )
}

export function TabPartnerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
 
    <div className=" h-[20vh] z-10  w-[60vw]  ">
    <Slider {...settings}> 
    
     <div className="  w-full   flex flex-col  ">
      <div className="h-[87px] mt-3 ">

     <img src="/Images/AnnouncementPage/partnerIcon1.svg" width="200px" height="200px" alt="partner icon"  />
      </div>
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}

 <h3 className=" text-gray-400 text-xl  ">DVT partner </h3>
    </div>
    
    <div className="  w-full   flex flex-col  ">
      <div className="h-[100px] ">

     <img src="/Images/AnnouncementPage/hash.jpg" width="200px" height="200px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}

</div>
<h3 className=" text-gray-400 text-xl ">Validator </h3>
    </div>


    <div className="  w-full   flex flex-col  ">
      <div className="h-[100px] ">

     <img src="/Images/AnnouncementPage/Shellboxes.png" width="200px" height="200px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
     </div>
<h3 className=" text-gray-400 text-xl ">Audit Partner </h3>
    </div>


    <div className="  w-full   flex flex-col  ml-4">
      <div className="h-[80px] mt-5">

     <img src="/Images/AnnouncementPage/stakely.svg" width="200px" height="200px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
     </div>
<h3 className=" text-gray-400 text-xl ">Validator </h3>
    </div>


    <div className="  w-full   flex flex-col ml-8 ">
      <div className="h-[100px] ">

     <img src="/Images/AnnouncementPage/Zeeve.svg" width="130px" height="130px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max    max-w-36 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
     </div>
<h3 className=" text-gray-400 text-xl ">Raas </h3>
    </div>
    </Slider>
  </div>
  )
}


export function MobilePartnerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
 
    <div className=" h-[20vh] z-10  w-[40vw]  ">
    <Slider {...settings}> 
    
     <div className="  w-full   flex flex-col  ">
      <div className="h-[87px] mt-3 ">

     <img src="/Images/AnnouncementPage/partnerIcon1.svg" width="200px" height="200px" alt="partner icon"  />
      </div>
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}

 <h3 className=" text-gray-400 text-xl  ">DVT partner </h3>
    </div>
    
    <div className="  w-full   flex flex-col  ">
      <div className="h-[100px] ">

     <img src="/Images/AnnouncementPage/hash.jpg" width="200px" height="200px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}

</div>
<h3 className=" text-gray-400 text-xl ">Validator </h3>
    </div>


    <div className="  w-full   flex flex-col  ">
      <div className="h-[100px] ">

     <img src="/Images/AnnouncementPage/Shellboxes.png" width="200px" height="200px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
     </div>
<h3 className=" text-gray-400 text-xl ">Audit Partner </h3>
    </div>


    <div className="  w-full   flex flex-col  *:">
      <div className="h-[80px] mt-5">

     <img src="/Images/AnnouncementPage/stakely.svg" width="200px" height="200px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max w-full    max-w-60 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
     </div>
<h3 className=" text-gray-400 text-xl ">Validator </h3>
    </div>


    <div className="  w-full   flex flex-col   ">
      <div className="h-[100px] ">

     <img src="/Images/AnnouncementPage/Zeeve.svg" width="130px" height="130px" alt="partner icon" />
     {/* <div className="  h-[0.1rem]   min-h-max    max-w-36 bg-gradient-to-br  from-[var(--line-gradient-from)]   to-[var(--line-gradient-to)]  mb-4  mt-4" /> */}
     </div>
<h3 className=" text-gray-400 text-xl ">Raas </h3>
    </div>
    </Slider>
  </div>
  )
}
