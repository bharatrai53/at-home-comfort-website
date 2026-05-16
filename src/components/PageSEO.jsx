import SEO from "./SEO";
import { buildBreadcrumbSchema, buildFaqSchema } from "../seo/schema";

export function PageSEO({ title, description, path, image, faqs, crumbs, extraSchema = [] }) {
  const schemas = [buildBreadcrumbSchema(crumbs), ...extraSchema];
  if (faqs?.length) {
    schemas.push(buildFaqSchema(faqs));
  }

  return (
    <SEO title={title} description={description} pathname={path} image={image} jsonLd={schemas} />
  );
}
