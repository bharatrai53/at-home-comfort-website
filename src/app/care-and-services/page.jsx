import { corePages } from "../../seo/site";
import { CareServicesPage } from "../../views/CareServicesPage";
import { pageMetadata } from "../../seo/metadata";

export const metadata = pageMetadata(corePages["care-and-services"]);

export default function Page() { return <CareServicesPage />; }
