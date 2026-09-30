import type { MetadataRoute } from "next"
import { caseStudies, caseStudyUrl, site } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.canonical,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: caseStudyUrl(study.slug),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ]
}
