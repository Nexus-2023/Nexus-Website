import React from "react"
import ClientFade from "../Client/ClientFade"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientFade>
      <div className="justify-center items-center flex  z-10  md:px-16 px-0  mx-auto ">
        <div className="h-full  w-full flex  py-16  items-center  relative    border-x-2  border-t-2   border-[var(--page-border)]   flex-col  ">
          {children}
        </div>
      </div>
    </ClientFade>
  )
}

export default Container
