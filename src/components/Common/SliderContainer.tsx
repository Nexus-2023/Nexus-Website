import React from "react"
import { BeatLoader } from "react-spinners"
import { Suspense } from "react"
import ClientFade from "@/components/Client/ClientFade"

export function SliderContainer({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`justify-center items-center flex  z-10     md:px-16       mx-auto`}
    >
      <div className="h-full w-full relative   border-x-2  border-t-2   border-[var(--page-border)] py-16   ">
        <ClientFade delay={500}>
          <div className="flex justify-center items-center   ">
            <div className="flex flex-col space-y-10  justify-center items-center w-full  ">
              <h1
                className=" lg:text-4xl text-4xl font-semibold text-gray-50 mb-12   justify-center items-center  text-center  "
                id="h1"
              >
                {heading}
              </h1>
            </div>
          </div>

          <div className="justify-center items-center flex  " id="slider">
            <Suspense fallback={<BeatLoader color="var(--loader)" size={20} />}>
              {children}
            </Suspense>
          </div>
        </ClientFade>
      </div>
    </div>
  )
}
