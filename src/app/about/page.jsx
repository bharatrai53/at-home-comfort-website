import { corePages } from "../../seo/site";
import { AboutPage } from "../../views/AboutPage";
import { pageMetadata } from "../../seo/metadata";

export const metadata = pageMetadata(corePages["about"]);

export default function Page() { return <AboutPage />; }
