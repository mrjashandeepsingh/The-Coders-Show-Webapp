"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "li" | "span"
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as "div"

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
