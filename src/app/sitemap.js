import { corePages, SITE_URL } from "../seo/site";
import { localPageConfigs } from "../data/localPages";

export const dynamic = "force-static";
export default function sitemap() {
  return [...Object.values(corePages), ...localPageConfigs].map(({ path }) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
