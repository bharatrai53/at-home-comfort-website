import { corePages } from "../../seo/site";
import { AdmissionsPage } from "../../views/AdmissionsPage";
import { pageMetadata } from "../../seo/metadata";

export const metadata = pageMetadata(corePages["admissions"]);

export default function Page() { return <AdmissionsPage />; }
