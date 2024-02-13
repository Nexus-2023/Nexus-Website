import React from "react"
import { buttonCss } from "@/css"

import Partners from "../Partners"
import { Button } from "@mui/material"
export function AnnouncementPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10     px-16     mx-auto`}
    >
      <div className="h-full w-full relative border-2 border-[#0D1820] py-16  ">
        <div className="flex justify-center items-center   ">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[80%] bg-[#38598a2c] rounded-2xl blur-3xl  -z-20 " />
          <div className="flex flex-col space-y-10  justify-center items-center w-full  ">
            <h1 className=" text-5xl   font-semibold text-gray-50 mb-12 lg:-ml-16">
              Our Partners
            </h1>

            <Partners />

            <div className=" w-full h-full lg:px-16  flex flex-col    py-16     ">
              <h1 className=" text-yellow-500 text-lg mb-3">Announcements</h1>
              <h1 className="  font-medium text-2xl mb-4">
                Stay in the Loop: Latest News and Announcements
              </h1>

              {/* scroll */}

              <div className="    snap-mandatory  xl:px-28  py-16     justify-center   items-center    overflow-auto">
                {/* <div className="flex xl:flex-row flex-col   space-y-16 xl:space-y-0 justify-between items-center   "> */}
                <div className="flex   space-x-16    min-w-max    justify-between items-center   ">
                  {/* first item */}
                  <div className=" space-y-5 flex     lg:min-w-[30vw] min-w-[40vw] flex-col justify-start items-start  ">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut.
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>

                  {/* second */}
                  <div className=" space-y-5 flex    flex-col  lg:min-w-[30vw] min-w-[40vw]  justify-start items-start ">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut. vel sem leo ullamcorper pharetra.
                      Faucibus sit nec feugiat in eu ut. Lorem ipsum dolor sit
                      amet consectetur. Volutpat aliquam mauris vel sem leo Call
                      to Action
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>

                  {/* first third item */}
                  <div className=" space-y-5 flex  flex-col   lg:min-w-[25vw] min-w-[40vw]   justify-start items-start">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut.
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>

                  {/* first third item */}
                  <div className=" space-y-5 flex  flex-col  lg:min-w-[25vw] min-w-[40vw] justify-start items-start">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut.
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>

                  <div className=" space-y-5 flex  flex-col  lg:min-w-[25vw]  min-w-[40vw] justify-start items-start">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut.
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>

                  <div className=" space-y-5 flex  flex-col  lg:min-w-[25vw] min-w-[40vw] justify-start items-start">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut.
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>

                  <div className=" space-y-5 flex  flex-col  lg:min-w-[25vw] min-w-[40vw] justify-start items-start">
                    <h1 className="  font-medium text-blue-100 text-xl">
                      Received USD 60k grant
                    </h1>

                    <p className=" text-gray-400  w-full max-w-96">
                      Lorem ipsum dolor sit amet consectetur. Volutpat aliquam
                      mauris vel sem leo ullamcorper pharetra. Faucibus sit nec
                      feugiat in eu ut.
                    </p>

                    <Button sx={{ color: "#77C3F8" }}> Call to Action</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
