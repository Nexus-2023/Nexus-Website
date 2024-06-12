import React from "react"

import Image from "next/image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
  }

  return (
    <div className=" h-[20vh] z-10  w-[60vw]  ">
      <Slider {...settings}>
        <div className="  w-full   flex flex-col  ">
          <div className="h-[87px] mt-4 ">
            <img
              src="/Images/AnnouncementPage/partnerIcon1.svg"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/hash.jpg"
              width="200px"
              height="200px"
              alt="partner icon"
              className=" rounded-lg"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col   ">
          <div className="h-[100px] mt-4 ml-2">
            <img
              src="/Images/AnnouncementPage/avail.svg"
              width="180px"
              height="180px"
              alt="partner icon"
              className=" rounded-lg"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] mt-3">
            <img
              src="/Images/AnnouncementPage/Shellboxes.png"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ml-4">
          <div className="h-[80px] mt-6">
            <img
              src="/Images/AnnouncementPage/stakely.svg"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col ml-8 ">
          <div className="h-[100px] ml-2 ">
            <img
              src="/Images/AnnouncementPage/Zeeve.svg"
              width="130px"
              height="130px"
              alt="partner icon"
            />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export function FunderSlider() {
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
  }

  return (
    <div className=" h-[20vh] z-10  w-[60vw]  ">
      <Slider {...settings}>
        <div className="  w-full   flex flex-col  ">
          <div className="h-[87px] mt-3  items-center justify-center flex">
            <img
              src="/Images/Funders/coin_T.png"
              width="160px"
              height="160px"
              alt="partner icon"
              className="   bg-contain rounded-xl"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] items-center justify-center flex  ml-4">
            <img
              src="/Images/Funders/hashWhite.png"
              width="180px"
              height="180px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] items-center justify-center flex ml-8 ">
            <img
              src="/Images/Funders/Mask_T.png"
              width="200px"
              height="200px"
              alt="partner icon"
              className="  rounded-xl  bg-contain"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ml-4">
          <div className="h-[80px] mt-3 items-center justify-center flex">
            <img
              src="/Images/Funders/orbit_T.png"
              width="180px"
              height="180px"
              alt="partner icon"
              className="  rounded-xl  bg-contain"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col      justify-center  ">
          <div className="h-[100px]   mt-2  items-center justify-center flex ml-2 ">
            <img
              src="/Images/Funders/Founderheads_Logo_White.png"
              width="160px"
              height="160px"
              alt="partner icon"
              className="   bg-contain"
            />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export function TabFunderSlider() {
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
  }

  return (
    <div className=" h-[20vh] z-10  w-[60vw]  ">
      <Slider {...settings}>
        <div className="  w-full   flex flex-col  ">
          <div className="h-[87px] mt-3  items-center justify-center flex">
            <img
              src="/Images/Funders/coin_T.png"
              width="160px"
              height="160px"
              alt="partner icon"
              className="   bg-contain rounded-xl"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] items-center justify-center flex  ml-4">
            <img
              src="/Images/Funders/hashWhite.png"
              width="180px"
              height="180px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] items-center justify-center flex ml-8 ">
            <img
              src="/Images/Funders/Mask_T.png"
              width="200px"
              height="200px"
              alt="partner icon"
              className="  rounded-xl  bg-contain"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ml-4">
          <div className="h-[80px] mt-3 items-center justify-center flex">
            <img
              src="/Images/Funders/orbit_T.png"
              width="180px"
              height="180px"
              alt="partner icon"
              className="  rounded-xl  bg-contain"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col      justify-center  ">
          <div className="h-[100px]   mt-2  items-center justify-center flex ml-2 ">
            <img
              src="/Images/Funders/Founderheads_Logo_White.png"
              width="160px"
              height="160px"
              alt="partner icon"
              className="   bg-contain"
            />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export function MobileFunderSlider() {
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
  }

  return (
    <div className=" h-[20vh] z-10  w-[60vw]  ">
      <Slider {...settings}>
        <div className="  w-full   flex flex-col  ">
          <div className="h-[87px] mt-3  items-center justify-center flex">
            <img
              src="/Images/Funders/coin_T.png"
              width="160px"
              height="160px"
              alt="partner icon"
              className="   bg-contain rounded-xl"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] items-center justify-center flex  ml-4">
            <img
              src="/Images/Funders/hashWhite.png"
              width="180px"
              height="180px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] items-center justify-center flex ml-8 ">
            <img
              src="/Images/Funders/Mask_T.png"
              width="200px"
              height="200px"
              alt="partner icon"
              className="  rounded-xl  bg-contain"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ml-4">
          <div className="h-[80px] mt-3 items-center justify-center flex">
            <img
              src="/Images/Funders/orbit_T.png"
              width="180px"
              height="180px"
              alt="partner icon"
              className="  rounded-xl  bg-contain"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col      justify-center  ">
          <div className="h-[100px]   mt-2  items-center justify-center flex ml-2 ">
            <img
              src="/Images/Funders/Founderheads_Logo_White.png"
              width="160px"
              height="160px"
              alt="partner icon"
              className="   bg-contain"
            />
          </div>
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
  }

  return (
    <div className=" h-[20vh] z-10  w-[60vw]  ">
      <Slider {...settings}>
        <div className="  w-full   flex flex-col  ">
          <div className="h-[87px] mt-3 ">
            <img
              src="/Images/AnnouncementPage/partnerIcon1.svg"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/hash.jpg"
              width="200px"
              height="200px"
              alt="partner icon"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/Shellboxes.png"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ml-4">
          <div className="h-[80px] mt-5">
            <img
              src="/Images/AnnouncementPage/stakely.svg"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col ml-8 ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/Zeeve.svg"
              width="130px"
              height="130px"
              alt="partner icon"
            />
          </div>
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
  }

  return (
    <div className=" h-[20vh] z-10  w-[40vw]  ">
      <Slider {...settings}>
        <div className="  w-full   flex flex-col  ">
          <div className="h-[87px] mt-3 ">
            <img
              src="/Images/AnnouncementPage/partnerIcon1.svg"
              width="200px"
              height="200px"
              alt="funder icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/hash.jpg"
              width="200px"
              height="200px"
              alt="partner icon"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/Shellboxes.png"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col  *:">
          <div className="h-[80px] mt-5">
            <img
              src="/Images/AnnouncementPage/stakely.svg"
              width="200px"
              height="200px"
              alt="partner icon"
            />
          </div>
        </div>

        <div className="  w-full   flex flex-col   ">
          <div className="h-[100px] ">
            <img
              src="/Images/AnnouncementPage/Zeeve.svg"
              width="130px"
              height="130px"
              alt="partner icon"
            />
          </div>
        </div>
      </Slider>
    </div>
  )
}
