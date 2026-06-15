import { Reveal } from "@/components/reveal"

const DEPARTMENTS = [
  { name: "Content & Hosting", desc: "Research, scripting, and leading the conversation." },
  { name: "Guest Relations", desc: "Finding, inviting, and preparing the right guests." },
  { name: "Creative", desc: "Visual identity, design, and storytelling." },
  { name: "Production", desc: "Recording, editing, and session logistics." },
  { name: "Marketing", desc: "Reach, growth, and community engagement." },
  { name: "Operations", desc: "Planning, coordination, and keeping things running." },
  { name: "Finance & Partnerships", desc: "Budgets, sponsorships, and collaborations." },
  { name: "People & Talent", desc: "Recruiting, onboarding, and team culture." },
]

export function Team() {
  return (
    <section id="team" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Our team
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Built By Students.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              The Coders Show is powered by a multidisciplinary student team focused on creating
              meaningful learning experiences.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map((dept, i) => (
            <Reveal key={dept.name} delay={(i % 4) * 60} className="group bg-card p-6">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{dept.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dept.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
