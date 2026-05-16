import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CareServicesPage } from "./pages/CareServicesPage";
import { VirtualTourPage } from "./pages/VirtualTourPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { FAQsPage } from "./pages/FAQsPage";
import { ScheduleTourPage } from "./pages/ScheduleTourPage";
import { localLandingRoutes } from "./pages/LocalLandingPage";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/care-and-services/" element={<CareServicesPage />} />
        <Route path="/virtual-tour/" element={<VirtualTourPage />} />
        <Route path="/admissions/" element={<AdmissionsPage />} />
        <Route path="/faqs/" element={<FAQsPage />} />
        <Route path="/schedule-a-tour/" element={<ScheduleTourPage />} />
        {localLandingRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
