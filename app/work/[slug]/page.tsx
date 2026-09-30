import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  caseStudies,
  caseStudyUrl,
  getCaseStudy,
  site,
} from "@/lib/content"

type WorkPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) {
    return {}
  }

  const url = caseStudyUrl(study.slug)
  const description = study.card

  return {
    title: study.org,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: `${study.org}, Robert Fish`,
      description,
      images: [
        {
          url: `${site.origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Robert Fish, Full Stack Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.org}, Robert Fish`,
      description,
      images: [`${site.origin}/og.png`],
    },
  }
}

const sections = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "outcome", label: "Outcome" },
] as const

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) {
    notFound()
  }

  return (
    <main id="content" className="shell py-14 sm:py-20">
      <Link
        href="/#work"
        className="font-mono text-xs text-link underline-offset-4 hover:underline"
      >
        Selected work
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {study.org}
      </h1>
      <ul className="mt-4 flex flex-col gap-1">
        {study.tenures.map((tenure) => (
          <li
            key={`${tenure.title}-${tenure.dates}`}
            className="font-mono text-xs text-muted-foreground"
          >
            {tenure.title}, {tenure.dates}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col gap-4">
        {sections.map((section) => (
          <section
            key={section.key}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h2 className="font-mono text-xs tracking-wide text-muted-foreground">
              {section.label}
            </h2>
            <div className="mt-3 flex max-w-2xl flex-col gap-4">
              {study[section.key].map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-mono text-xs tracking-wide text-muted-foreground">
            Stack
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <p className="mt-14 font-mono text-xs text-muted-foreground">{site.name}</p>
    </main>
  )
}
