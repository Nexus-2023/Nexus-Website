import React from "react"

const GradientButton = ({
  handleClick,
  text,
}: {
  handleClick: () => void
  text: string
}) => {
  return (
    <button
      className="backdrop-blur mt-2 rounded-3xl  bg-gradient-to-t   from-[var(--scedule-call-from-gradient)]  to-[var(--scedule-call-to-gradient)]  hover:from-[var(--scedule-call-hover-from-gradient)] hover:to-[var(--scedule-call-hover-to-gradient)]    transition  ease-in-out duration-500  hover:scale-110     text-black  font-semibold px-6 py-3 border-2 border-[var(--page-border)]"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default GradientButton
