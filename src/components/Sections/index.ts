import React from "react"
import { FundingPage } from "./Announcement"
const LazyPartnersPage = React.lazy(() => import("./Announcement"))
const LazyHomePage = React.lazy(() => import("./Home"))
const LazyDemoPage = React.lazy(() => import("./Demo"))
const LazyFeaturePage = React.lazy(() => import("./Features"))
const LazyTeamPage = React.lazy(() => import("./Team"))
const LazyWorkPage = React.lazy(() => import("./Work"))
const LazyYieldPage = React.lazy(() => import("./Yield"))

export {
  FundingPage,
  LazyPartnersPage,
  LazyDemoPage,
  LazyFeaturePage,
  LazyHomePage,
  LazyTeamPage,
  LazyWorkPage,
  LazyYieldPage,
}
