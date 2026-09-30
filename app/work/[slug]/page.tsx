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
    <main id="content" className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
      <Link
        href="/#work"
        className="font-mono text-xs tracking-wide text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        Selected work
      </Link>
      <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-6xl">
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
      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.key}>
            <h2 className="font-mono text-xs tracking-[0.18em] text-gold uppercase">
              {section.label}
            </h2>
            <div className="mt-3 flex max-w-2xl flex-col gap-4">
              {study[section.key].map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
        <section>
          <h2 className="font-mono text-xs tracking-[0.18em] text-gold uppercase">
            Stack
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <li
                key={item}
                className="border border-border px-2 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
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
