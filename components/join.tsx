import { Reveal } from "@/components/reveal"

const PROCESS = [
  { step: "Application", desc: "Tell us who you are and where you want to contribute." },
  { step: "Orientation", desc: "Get to know the vision, the team, and how we work." },
  { step: "Assignment", desc: "A small, real task to explore your interests." },
  { step: "Interview", desc: "A genuine conversation, not an interrogation." },
  { step: "Selection", desc: "Join the team and start building with us." },
]

export function Join() {
  return (
    <section id="join" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-background/60">
              Join the movement
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Help Build The Future Of Student Learning.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-background/70">
              We are looking for students who want to create, lead, organize, design, produce,
              market, and grow something meaningful.
            </p>
          </Reveal>
        </div>

        {/* recruitment process */}
        <div className="mt-14">
          <ol className="grid gap-px overflow-hidden rounded-lg border border-background/15 bg-background/15 sm:grid-cols-5">
            {PROCESS.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 60}
                className="bg-foreground p-5"
              >
                <span className="font-mono text-xs text-background/50">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold tracking-tight">{item.step}</h3>
                <p className="mt-2 text-xs leading-relaxed text-background/60">{item.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://forms.gle/W9K1WYcpUCUzLPPn8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-background px-6 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Apply Now
            </a>
            <a
              href="https://chat.whatsapp.com/INWnYlDgoyjJzXCR0x39GC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-sm border border-background/30 px-6 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Join Community
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
