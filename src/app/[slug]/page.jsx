import { notFound } from "next/navigation";
import { localPageConfigs } from "../../data/localPages";
import { LocalLandingPage } from "../../views/LocalLandingPage";
import { pageMetadata } from "../../seo/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return localPageConfigs.map(({ path }) => ({ slug: path.replaceAll("/", "") }));
}
async function getConfig(params) {
  const { slug } = await params;
  const config = localPageConfigs.find(({ path }) => path === `/${slug}/`);
  if (!config) notFound();
  return config;
}
export async function generateMetadata({ params }) {
  return pageMetadata(await getConfig(params));
}
export default async function Page({ params }) {
  return <LocalLandingPage config={await getConfig(params)} />;
}
