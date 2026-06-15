import { Reveal } from "@/components/reveal"

const FOCUS = [
  {
    title: "Real Experiences",
    body: "Stories straight from people who have done the work, not generic advice from the internet.",
  },
  {
    title: "Real Challenges",
    body: "The obstacles, failures, and turning points that rarely make it into a polished profile.",
  },
  {
    title: "Real Careers",
    body: "How people actually moved from where they started to where they are today.",
  },
  {
    title: "Real Learning",
    body: "Concrete skills, decisions, and habits students can apply right away.",
  },
  {
    title: "Real Conversations",
    body: "Unscripted, honest dialogue, free of motivational filler and hype.",
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                About the show
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Why The Coders Show?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Most students learn about careers through social media, articles, and random
                advice. The Coders Show creates direct conversations with people who have already
                built careers, companies, products, and communities.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Our focus is not motivation. Our focus is what actually moves you forward.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {FOCUS.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 60}
                  className={`bg-card p-6 ${i === FOCUS.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
