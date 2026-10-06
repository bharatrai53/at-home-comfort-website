import { corePages } from "../../seo/site";
import { FAQsPage } from "../../views/FAQsPage";
import { pageMetadata } from "../../seo/metadata";

export const metadata = pageMetadata(corePages["faqs"]);

export default function Page() { return <FAQsPage />; }
