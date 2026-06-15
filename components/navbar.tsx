"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Format", href: "#format" },
  { label: "Team", href: "#team" },
  { label: "Join Us", href: "#join" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="The Coders Show home">
          <img
            src="/images/tcs-logo.jpg"
            alt="The Coders Show logo"
            className="h-8 w-8 rounded-sm object-cover"
          />
          <span className="text-sm font-semibold tracking-tight">The Coders Show</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://chat.whatsapp.com/INWnYlDgoyjJzXCR0x39GC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-sm bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Join Community
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://chat.whatsapp.com/INWnYlDgoyjJzXCR0x39GC"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-sm bg-foreground px-4 text-sm font-medium text-background"
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
