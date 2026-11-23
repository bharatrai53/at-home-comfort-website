import SEO from "./SEO";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "../seo/schema";

export function PageSEO({ title, description, path, image, faqs, crumbs, extraSchema = [] }) {
  const schemas = [buildWebPageSchema({ title, description, path, image }), buildBreadcrumbSchema(crumbs), ...extraSchema];
  if (faqs?.length) {
    schemas.push(buildFaqSchema(faqs));
  }

  return (
    <SEO title={title} description={description} pathname={path} image={image} jsonLd={schemas} />
  );
}
