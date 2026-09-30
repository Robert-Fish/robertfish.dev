import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  caseStudies,
  caseStudyPath,
  experience,
  principles,
  sideProject,
  site,
} from "@/lib/content"

export default function HomePage() {
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-5 sm:px-6">
      <section className="pt-16 pb-20 sm:pt-24">
        <p className="font-mono text-xs tracking-[0.18em] text-gold uppercase">
          {site.location}
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-foreground italic sm:text-3xl">
          {site.positioning}
        </p>
        <p className="mt-4 max-w-xl text-muted-foreground">{site.line}</p>
        <p className="mt-8 max-w-2xl leading-relaxed text-foreground/90">
          {site.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            variant="outline"
            size="lg"
            render={<a href={site.linkedin} rel="me noreferrer" />}
          >
            LinkedIn
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="lg"
            render={<a href={site.github} rel="me noreferrer" />}
          >
            GitHub
          </Button>
        </div>
      </section>

      <Separator />

      <section id="work" className="rise py-16">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Selected work
        </h2>
        <div className="mt-10 flex flex-col">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className="border-t border-border py-8 last:border-b"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground">
                <Link
                  href={caseStudyPath(study.slug)}
                  className="underline-offset-4 hover:text-gold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {study.org}
                </Link>
              </h3>
              <ul className="mt-3 flex flex-col gap-1">
                {study.tenures.map((tenure) => (
                  <li
                    key={`${tenure.title}-${tenure.dates}`}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tenure.title}, {tenure.dates}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-2xl leading-relaxed text-foreground/90">
                {study.card}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-2 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={caseStudyPath(study.slug)}
                className="mt-5 inline-block text-sm text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Read the case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Separator />

      <section id="experience" className="rise py-16">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Experience
        </h2>
        <ol className="mt-8">
          {experience.map((item) => (
            <li
              key={`${item.org}-${item.title}-${item.dates}`}
              className="grid gap-1 border-t border-border py-5 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {item.dates}
              </p>
              <div>
                <p className="text-foreground">{item.title}</p>
                <p className="text-muted-foreground">{item.org}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
                {item.slug ? (
                  <Link
                    href={caseStudyPath(item.slug)}
                    className="mt-2 inline-block text-sm text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    Case study
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Separator />

      <section id="principles" className="rise py-16">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          How I work
        </h2>
        <ol className="mt-8 flex flex-col gap-8">
          {principles.map((principle) => (
            <li key={principle.title} className="max-w-2xl">
              <h3 className="font-serif text-2xl text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <Separator />

      <section id="building" className="rise py-16">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Currently building
        </h2>
        <article className="mt-6 max-w-xl border border-border bg-card px-5 py-5">
          <p className="font-mono text-xs text-muted-foreground">
            {sideProject.label}. {sideProject.status}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-foreground">
            {sideProject.name}
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {sideProject.summary}
          </p>
        </article>
      </section>
    </main>
  )
}
