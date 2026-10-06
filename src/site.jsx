// Legacy barrel — imports from the original monolithic file have been
// split into focused modules. Re-export the public API for any remaining
// external consumers.
export { T, F } from "./tokens";
export { siteLinks, FAQ_DATA } from "./data";
export { SiteLayout } from "./components/layout/SiteLayout";
export { HomePage } from "./views/HomePage";
export { AboutPage } from "./views/AboutPage";
export { CareServicesPage } from "./views/CareServicesPage";
export { VirtualTourPage } from "./views/VirtualTourPage";
export { AdmissionsPage } from "./views/AdmissionsPage";
export { FAQsPage } from "./views/FAQsPage";
export { ScheduleTourPage } from "./views/ScheduleTourPage";
export { LocalLandingPage } from "./views/LocalLandingPage";
