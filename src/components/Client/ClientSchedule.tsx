"use client"
import GradientButton from "@/components/Common/Button"
import { openCalendly } from "@/utils"
import { usePostHog } from "posthog-js/react"

export default function ScheduleCallButton() {
  const posthog = usePostHog()
  function handleClick() {
    openCalendly
    posthog.capture("schedule_button_clicked")
  }

  return <GradientButton text="Schedule Call" handleClick={handleClick} />
}

export function ScheduleCallLink() {
  const posthog = usePostHog()
  function handleClick() {
    openCalendly
    posthog.capture("schedule_button_clicked")
  }

  return (
    <div
      className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
      onClick={handleClick}
    >
      Schedule Call
    </div>
  )
}
