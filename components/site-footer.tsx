import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-14 sm:px-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Contact
          </h2>
          <p className="max-w-xl text-muted-foreground">
            {site.location}. LinkedIn and GitHub are the way to reach Robert.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href={site.linkedin}
            rel="me noreferrer"
            className="text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            rel="me noreferrer"
            className="text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            GitHub
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {site.name}. {site.location}.
        </p>
      </div>
    </footer>
  )
}
