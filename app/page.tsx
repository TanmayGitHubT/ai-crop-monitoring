"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Dashboard from "@/components/dashboard"
import DiseaseDetection from "@/components/disease-detection"
import PredictionEngine from "@/components/prediction-engine"
import AlertsSystem from "@/components/alerts-system"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <Hero setCurrentPage={setCurrentPage} />}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "detection" && <DiseaseDetection />}
      {currentPage === "predictions" && <PredictionEngine />}
      {currentPage === "alerts" && <AlertsSystem />}
      {currentPage === "features" && <Features />}
    </div>
  )
}
