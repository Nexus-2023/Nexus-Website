import React from "react"

const LazyEarnYeild = React.lazy(() => import("./EarnYeild"))
const LazySuperCharge = React.lazy(() => import("./SuperCharge"))
const LazyWhyNexus = React.lazy(() => import("./WhyNexus"))
const LazyGetStartedPage = React.lazy(() => import("./GetStarted"))
const LazyPartnersPage = React.lazy(() => import("./Partners"))
const LazyBackedByPage = React.lazy(() => import("./BackedBy"))
const LazyHomePage = React.lazy(() => import("./Home"))
const LazyDemoPage = React.lazy(() => import("./Demo"))
const LazyFeaturePage = React.lazy(() => import("./Features"))
const LazyTeamPage = React.lazy(() => import("./Team"))
const LazyWorkPage = React.lazy(() => import("./Work"))
const LazyYieldPage = React.lazy(() => import("./Yield"))

export {
  LazyEarnYeild,
  LazyWhyNexus,
  LazySuperCharge,
  LazyGetStartedPage,
  LazyBackedByPage,
  LazyPartnersPage,
  LazyDemoPage,
  LazyFeaturePage,
  LazyHomePage,
  LazyTeamPage,
  LazyWorkPage,
  LazyYieldPage,
}
