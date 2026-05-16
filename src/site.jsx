// Legacy barrel — imports from the original monolithic file have been
// split into focused modules. Re-export the public API for any remaining
// external consumers.
export { T, F } from "./tokens";
export { siteLinks, FAQ_DATA } from "./data";
export { SiteLayout } from "./components/layout/SiteLayout";
export { HomePage } from "./pages/HomePage";
export { AboutPage } from "./pages/AboutPage";
export { CareServicesPage } from "./pages/CareServicesPage";
export { VirtualTourPage } from "./pages/VirtualTourPage";
export { AdmissionsPage } from "./pages/AdmissionsPage";
export { FAQsPage } from "./pages/FAQsPage";
export { ScheduleTourPage } from "./pages/ScheduleTourPage";
export { localLandingRoutes } from "./pages/LocalLandingPage";
