import { corePages } from "../../seo/site";
import { VirtualTourPage } from "../../views/VirtualTourPage";
import { pageMetadata } from "../../seo/metadata";

export const metadata = pageMetadata(corePages["virtual-tour"]);

export default function Page() { return <VirtualTourPage />; }
