import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-auto border-t border-border">
      <div className="shell flex flex-col gap-8 py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
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
            className="text-link underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            rel="me noreferrer"
            className="text-link underline-offset-4 hover:underline"
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
