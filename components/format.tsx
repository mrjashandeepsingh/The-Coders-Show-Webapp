import { Reveal } from "@/components/reveal"

const TIMELINE = [
  { title: "Guest Story", desc: "How they began and the path that shaped them." },
  { title: "Technical Discussion", desc: "The craft, tools, and decisions behind the work." },
  { title: "Career Insights", desc: "What actually matters when building a career." },
  { title: "Reality Check", desc: "Honest truths about the industry, no sugar-coating." },
  { title: "Audience Questions", desc: "Students ask, guests answer directly." },
  { title: "Rapid Fire", desc: "Quick, unfiltered takes on everything." },
  { title: "Final Advice", desc: "One thing to carry from campus to career." },
]

const SEGMENTS = [
  "Reality Check",
  "Resume Surgery",
  "Portfolio Breakdown",
  "Tech Myth Busters",
  "Build or Kill",
  "Career Roast",
]

export function Format() {
  return (
    <section id="format" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Show format
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            What Happens In A Session?
          </h2>
        </Reveal>

        {/* timeline */}
        <div className="mt-12">
          <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-7">
            {TIMELINE.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 50} className="bg-card p-5">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 h-px w-full bg-border" />
                <h3 className="mt-3 text-sm font-semibold leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* signature segments */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-lg font-semibold tracking-tight">Signature Segments</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Recurring formats designed to turn conversation into something students can act on.
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {SEGMENTS.map((segment, i) => (
              <Reveal key={segment} delay={i * 50} as="span">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {segment}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
