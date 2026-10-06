import { NotFoundPage } from "../views/NotFoundPage";
import { pageMetadata } from "../seo/metadata";

export const metadata = pageMetadata({"title": "Page Not Found | At Home Comfort Assisted Living", "description": "The page you're looking for doesn't exist. Return to the At Home Comfort Assisted Living homepage.", "path": "/404"});
metadata.robots = { index: false, follow: false };

export default function Page() { return <NotFoundPage />; }
