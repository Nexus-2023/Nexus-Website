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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
 
    <div className=" h-[20vh] z-10  w-[50vw]  ">
      <Slider {...settings}> 
      
       <div className="p-4  w-full">
       <img src="/Images/AnnouncementPage/partnerIcon1.svg" width="200px" height="200px" alt="partner icon"  />
      </div>
      
      <div className="p-6  w-full">
       <img src="/Images/AnnouncementPage/Hashkey.svg" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className="p-4 w-full">
       <img src="/Images/AnnouncementPage/Shellboxes.png" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className="p-6   w-full">
       <img src="/Images/AnnouncementPage/stakely.svg" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className=" w-full  ml-12">
       <img src="/Images/AnnouncementPage/Zeeve.svg" width="140px" height="140px" alt="partner icon" />
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
 
    <div className=" h-[20vh] z-10  w-[50vw]  ">
      <Slider {...settings}> 
      
       <div className="p-4  w-full">
       <img src="/Images/AnnouncementPage/partnerIcon1.svg" width="200px" height="200px" alt="partner icon"  />
      </div>
      
      <div className="p-6  w-full">
       <img src="/Images/AnnouncementPage/Hashkey.svg" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className="p-4 w-full">
       <img src="/Images/AnnouncementPage/Shellboxes.png" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className="p-6   w-full">
       <img src="/Images/AnnouncementPage/stakely.svg" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className=" w-full  ml-12">
       <img src="/Images/AnnouncementPage/Zeeve.svg" width="140px" height="140px" alt="partner icon" />
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
 
    <div className=" h-[20vh] z-10  w-[50vw]  ">
      <Slider {...settings}> 
      
       <div className="p-4  w-full">
       <img src="/Images/AnnouncementPage/partnerIcon1.svg" width="200px" height="200px" alt="partner icon"  />
      </div>
      
      <div className="p-6  w-full">
       <img src="/Images/AnnouncementPage/Hashkey.svg" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className="p-4 w-full">
       <img src="/Images/AnnouncementPage/Shellboxes.png" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className="p-6   w-full">
       <img src="/Images/AnnouncementPage/stakely.svg" width="200px" height="200px" alt="partner icon" />
      </div>


      <div className=" w-full  ml-12">
       <img src="/Images/AnnouncementPage/Zeeve.svg" width="140px" height="140px" alt="partner icon" />
      </div>
      </Slider>
    </div>
  )
}
