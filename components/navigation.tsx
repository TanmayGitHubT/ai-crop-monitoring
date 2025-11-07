"use client"

import { Leaf } from "lucide-react"

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage("home")}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CropGuard AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Dashboard", id: "dashboard" },
              { name: "Disease Detection", id: "detection" },
              { name: "Predictions", id: "predictions" },
              { name: "Alerts", id: "alerts" },
              { name: "Features", id: "features" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
