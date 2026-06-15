import { ArrowUpRight } from "lucide-react"

const SOCIALS = [
  { label: "YouTube", href: "https://youtube.com/@thecodersshoww" },
  { label: "Instagram", href: "https://www.instagram.com/tcs.cgc" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/councilofcoders/" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="The Coders Show home">
              <img
                src="/images/tcs-logo.jpg"
                alt="The Coders Show logo"
                className="h-8 w-8 rounded-sm object-cover"
              />
              <span className="text-sm font-semibold tracking-tight">The Coders Show</span>
            </a>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              From Campus to Career
            </p>
          </div>

          <nav aria-label="Social media" className="flex flex-wrap gap-x-6 gap-y-2">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Coders Show. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
