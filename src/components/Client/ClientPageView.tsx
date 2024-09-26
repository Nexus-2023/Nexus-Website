"use client"
import React from "react"
import { usePageViewTracking } from "@/hooks/postHog/usePageView"
const ClientPageView = ({ pageName }: { pageName: string }) => {
  usePageViewTracking(pageName)
  return (
    <>
      <div className="opacity-0" />
    </>
  )
}

export default ClientPageView
