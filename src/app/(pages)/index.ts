import React from "react"
const LazyPartnersPage = React.lazy(() => import("./Partners"))
const LazyBackedByPage = React.lazy(() => import("./BackedBy"))
const LazyHomePage = React.lazy(() => import("./Home"))
const LazyDemoPage = React.lazy(() => import("./Demo"))
const LazyFeaturePage = React.lazy(() => import("./Features"))
const LazyTeamPage = React.lazy(() => import("./Team"))
const LazyWorkPage = React.lazy(() => import("./Work"))
const LazyYieldPage = React.lazy(() => import("./Yield"))

export {
  LazyBackedByPage,
  LazyPartnersPage,
  LazyDemoPage,
  LazyFeaturePage,
  LazyHomePage,
  LazyTeamPage,
  LazyWorkPage,
  LazyYieldPage,
}
