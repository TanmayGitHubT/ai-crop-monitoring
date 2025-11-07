"use client"

import { Brain, TrendingUp, Shield, AlertCircle, Clock, BarChart3 } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art deep learning models trained on thousands of crop images.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast disease outbreaks before they occur based on environmental patterns.",
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Get actionable recommendations to prevent crop diseases and optimize yield.",
    },
    {
      icon: AlertCircle,
      title: "Real-time Alerts",
      description: "Instant notifications when potential issues are detected in your fields.",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your crops round the clock with automated systems.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reports and insights to guide your farming decisions.",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Powerful Features</h1>
        <p className="text-muted-foreground">Everything you need for modern crop health management</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <div
              key={i}
              className="rounded-lg border border-border bg-card/50 p-8 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 rounded-lg border border-border bg-gradient-to-r from-primary/10 to-secondary/10 p-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Transform Your Farming?</h2>
        <p className="mb-8 text-muted-foreground">
          Join thousands of farmers using CropGuard AI to improve yields and reduce losses.
        </p>
        <button className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          Start Your Free Trial
        </button>
      </div>
    </div>
  )
}
