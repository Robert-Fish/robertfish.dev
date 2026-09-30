import Link from "next/link"

export default function NotFound() {
  return (
    <main id="content" className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-24 sm:px-6">
      <p className="font-mono text-xs tracking-[0.18em] text-gold uppercase">404</p>
      <h1 className="mt-3 font-serif text-4xl text-foreground">
        This page is not on the site.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The address does not match a page here.
      </p>
      <Link
        href="/"
        className="mt-8 text-gold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        Back to Robert Fish
      </Link>
    </main>
  )
}
