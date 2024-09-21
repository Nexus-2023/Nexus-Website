import React from "react"

export function Heading({ text }: { text: string }) {
  return (
    <h1
      className="lg:text-7xl sm:text-5xl text-4xl font-semibold bg-clip-text backdrop-blur  py-2 text-transparent text-center   "
      style={{
        backgroundImage: "linear-gradient(to bottom, white 44%, #0095FF 100%)",
      }}
    >
      {text}
    </h1>
  )
}

export function SubHeading({ text }: { text: string }) {
  return <p className=" text-gray-400 lg:text-3xl  z-10">{text}</p>
}

export const PageHeading = ({ text }: { text: string }) => {
  return (
    <h1 className="lg:text-4xl font-medium  sm:text-2xl text-xl text-wrap text-center my-6">
      {text}
    </h1>
  )
}

export const PageSubHeading = ({ text }: { text: string }) => {
  return (
    <div className="sm:text-lg text-md text-gray-500 xl:max-w-[50vw]  sm:max-w-[60vw] max-w-[90vw] text-wrap text-center">
      <p>{text}</p>
    </div>
  )
}
