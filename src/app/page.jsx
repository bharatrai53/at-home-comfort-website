import { corePages } from "../seo/site";
import { HomePage } from "../views/HomePage";
import { pageMetadata } from "../seo/metadata";

export const metadata = pageMetadata(corePages["home"]);

export default function Page() { return <HomePage />; }
