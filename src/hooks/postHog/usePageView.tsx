import { useEffect } from "react"
import { usePostHog } from "posthog-js/react"

export function usePageViewTracking(pageName: string) {
  const posthog = usePostHog()
  useEffect(() => {
    posthog.capture("pageview", { page_name: pageName })
    console.log("page event captured ", pageName)
  }, [posthog, pageName])
}
