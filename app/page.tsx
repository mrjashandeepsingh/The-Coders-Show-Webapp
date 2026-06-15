import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Format } from "@/components/format"
import { Team } from "@/components/team"
import { Join } from "@/components/join"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Format />
        <Team />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
