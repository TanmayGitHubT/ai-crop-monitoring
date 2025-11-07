"use client"

import { ArrowRight, Zap } from "lucide-react"

export default function Hero({ setCurrentPage }) {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="ml-2 text-sm font-medium text-primary">AI-Powered Agricultural Innovation</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance">
            Monitor Crop Health with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Advanced AI
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Predict crop diseases before they strike. Real-time health monitoring, AI-powered diagnostics, and
            actionable insights for modern farmers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentPage("detection")}
              className="rounded-lg border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Try Detection
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { number: "10K+", label: "Farmers Using" },
            { number: "98.5%", label: "Accuracy Rate" },
            { number: "24/7", label: "Real-time Monitoring" },
          ].map((stat, i) => (
            <div key={i} className="rounded-lg border border-border bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
