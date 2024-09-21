"use client"
import GradientButton from "@/components/Common/Button"
import { openCalendly } from "@/utils"

export default function ScheduleCallButton() {
  return <GradientButton text="Schedule Call" handleClick={openCalendly} />
}

export function ScheduleCallLink() {
  return (
    <div
      className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
      onClick={openCalendly}
    >
      Schedule Call
    </div>
  )
}
