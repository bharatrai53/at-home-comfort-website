import { corePages } from "../../seo/site";
import { ScheduleTourPage } from "../../views/ScheduleTourPage";
import { pageMetadata } from "../../seo/metadata";

export const metadata = pageMetadata(corePages["schedule-a-tour"]);

export default function Page() { return <ScheduleTourPage />; }
