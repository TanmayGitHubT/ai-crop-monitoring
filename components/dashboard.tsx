"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { AlertCircle, Droplets, Sun, Wind } from "lucide-react"

export default function Dashboard() {
  const healthData = [
    { name: "Mon", health: 85 },
    { name: "Tue", health: 88 },
    { name: "Wed", health: 82 },
    { name: "Thu", health: 90 },
    { name: "Fri", health: 87 },
    { name: "Sat", health: 89 },
    { name: "Sun", health: 91 },
  ]

  const diseaseData = [
    { name: "Healthy", value: 72 },
    { name: "At Risk", value: 20 },
    { name: "Infected", value: 8 },
  ]

  const COLORS = ["#10b981", "#f59e0b", "#ef4444"]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Crop Health Dashboard</h1>
        <p className="text-muted-foreground">Real-time monitoring of your fields</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          { icon: Sun, label: "Field Temperature", value: "28°C", color: "text-orange-400" },
          { icon: Droplets, label: "Soil Moisture", value: "65%", color: "text-cyan-400" },
          { icon: Wind, label: "Air Humidity", value: "72%", color: "text-blue-400" },
          { icon: AlertCircle, label: "Health Score", value: "8.7/10", color: "text-green-400" },
        ].map((metric, i) => {
          const Icon = metric.icon
          return (
            <div key={i} className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                <Icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            </div>
          )
        })}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Health Trend (7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={healthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: "#111827", border: "1px solid #1f2937" }} />
              <Line type="monotone" dataKey="health" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Field Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={diseaseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {diseaseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#111827", border: "1px solid #1f2937" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2 text-sm">
            {diseaseData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-muted-foreground">{item.name}</span>
                <span className="font-semibold text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Recent Alerts</h2>
        <div className="space-y-3">
          {[
            { type: "warning", message: "Powdery mildew detected in Field A", time: "2 hours ago" },
            { type: "info", message: "Irrigation recommended for Field B", time: "4 hours ago" },
            { type: "success", message: "Field C - All systems normal", time: "6 hours ago" },
          ].map((alert, i) => (
            <div key={i} className="flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4">
              <div
                className={`mt-1 h-3 w-3 rounded-full ${
                  alert.type === "warning" ? "bg-accent" : alert.type === "info" ? "bg-secondary" : "bg-primary"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
