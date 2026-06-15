import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              A student-led technology talk show
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Real Conversations. Real Careers. Real Learning.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Coders Show is a student-led technology talk show that brings students closer to
              developers, founders, researchers, designers, and industry professionals through
              authentic conversations and practical insights.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 font-mono text-sm uppercase tracking-widest text-foreground">
              From Campus to Career
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#format"
                className="inline-flex h-11 items-center justify-center rounded-sm bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore The Show
              </a>
              <a
                href="#join"
                className="inline-flex h-11 items-center justify-center rounded-sm border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Join The Team
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
              <img
                src="/images/tcs-poster.jpg"
                alt="The Coders Show poster — Talking Tech, Careers & Code. Season 2026. From Campus to Career."
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
