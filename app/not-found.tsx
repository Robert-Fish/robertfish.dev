import Link from "next/link"

export default function NotFound() {
  return (
    <main id="content" className="shell flex flex-1 flex-col py-24">
      <p className="font-mono text-xs tracking-wide text-muted-foreground">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
        This page is not on the site.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The address does not match a page here.
      </p>
      <Link
        href="/"
        className="mt-8 text-link underline-offset-4 hover:underline"
      >
        Back to Robert Fish
      </Link>
    </main>
  )
}
