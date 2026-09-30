import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    <main id="content">
      <section className="relative overflow-hidden">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="shell relative pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            {site.location}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {site.positioning}
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">{site.line}</p>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-10 rounded-lg px-4"
              render={<a href={site.linkedin} rel="me noreferrer" />}
            >
              LinkedIn
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-10 rounded-lg px-4"
              render={<a href={site.github} rel="me noreferrer" />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <section id="work" className="rise">
        <div className="shell py-16 sm:py-20">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Selected work
          </h2>
          <div className="mt-8 grid gap-4">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong hover:bg-card-hover"
              >
                <p className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  <Link
                    href={caseStudyPath(study.slug)}
                    className="hover:text-link"
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
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {study.card}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={caseStudyPath(study.slug)}
                  className="mt-5 inline-block text-sm text-link underline-offset-4 hover:underline"
                >
                  Read the case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="rise">
        <div className="shell py-16 sm:py-20">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
          <ol className="mt-8 overflow-hidden rounded-xl border border-border">
            {experience.map((item) => (
              <li
                key={`${item.org}-${item.title}-${item.dates}`}
                className="grid gap-1 border-b border-border px-5 py-5 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs text-muted-foreground">
                  {item.dates}
                </p>
                <div>
                  <p className="font-medium tracking-tight text-foreground">
                    {item.title}
                  </p>
                  <p className="text-muted-foreground">{item.org}</p>
                  {item.detail ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  ) : null}
                  {item.slug ? (
                    <Link
                      href={caseStudyPath(item.slug)}
                      className="mt-2 inline-block text-sm text-link underline-offset-4 hover:underline"
                    >
                      Case study
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="principles" className="rise">
        <div className="shell py-16 sm:py-20">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            How I work
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="building" className="rise">
        <div className="shell py-16 sm:py-20">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Currently building
          </h2>
          <article className="mt-8 max-w-xl rounded-xl border border-border bg-card p-6">
            <p className="font-mono text-xs text-muted-foreground">
              {sideProject.label}. {sideProject.status}
            </p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground">
              {sideProject.name}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {sideProject.summary}
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
