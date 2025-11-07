"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, AlertTriangle, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PredictionEngine() {
  const [predictions, setPredictions] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate real-time AI analysis
    const timer = setTimeout(() => {
      setPredictions({
        healthForecast: [
          { day: "Today", health: 87, predicted: 87 },
          { day: "Tomorrow", health: 85, predicted: 85 },
          { day: "+2 Days", health: 82, predicted: 82 },
          { day: "+3 Days", health: 79, predicted: 79 },
          { day: "+4 Days", health: 75, predicted: 75 },
          { day: "+5 Days", health: 72, predicted: 72 },
          { day: "+6 Days", health: 78, predicted: 78 },
          { day: "+7 Days", health: 82, predicted: 82 },
        ],
        yieldPrediction: [
          { week: "Week 1", yield: 92 },
          { week: "Week 2", yield: 94 },
          { week: "Week 3", yield: 96 },
          { week: "Week 4", yield: 94 },
          { week: "Week 5", yield: 91 },
          { week: "Week 6", yield: 89 },
          { week: "Week 7", yield: 87 },
          { week: "Week 8", yield: 85 },
        ],
        riskAnalysis: [
          {
            risk: "Fungal Disease",
            probability: 68,
            timeframe: "3-5 days",
            impact: "High",
            mitigations: ["Increase ventilation", "Apply preventive fungicide", "Monitor humidity levels"],
          },
          {
            risk: "Drought Stress",
            probability: 35,
            timeframe: "7-10 days",
            impact: "Medium",
            mitigations: ["Schedule irrigation", "Apply mulch", "Monitor soil moisture"],
          },
          {
            risk: "Pest Infestation",
            probability: 28,
            timeframe: "10-14 days",
            impact: "Medium",
            mitigations: ["Set traps", "Apply organic pesticides", "Regular scouting"],
          },
        ],
        realTimeMetrics: {
          healthScore: 87,
          trendDirection: "down",
          trendPercentage: 2.1,
          criticalAlert: true,
          alertMessage: "Fungal spores detected. Preventive action recommended.",
        },
      })
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="h-12 w-48 bg-muted rounded-lg animate-pulse" />
          <div className="h-80 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
    )
  }

  if (!predictions) return null

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">AI Prediction Engine</h1>
        <p className="text-muted-foreground">Real-time predictive analytics powered by machine learning</p>
      </div>

      {/* Real-time Metrics */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold text-primary">{predictions.realTimeMetrics.healthScore}</div>
                <p className="text-xs text-muted-foreground mt-1">out of 100</p>
              </div>
              <div className="text-right">
                <div
                  className={`text-lg font-bold ${predictions.realTimeMetrics.trendDirection === "up" ? "text-green-500" : "text-red-500"}`}
                >
                  {predictions.realTimeMetrics.trendDirection === "up" ? "+" : "-"}
                  {predictions.realTimeMetrics.trendPercentage}%
                </div>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Highest Risk Factor</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="text-2xl font-bold text-accent">{predictions.riskAnalysis[0].probability}%</div>
              <p className="text-sm text-foreground font-medium mt-1">{predictions.riskAnalysis[0].risk}</p>
              <p className="text-xs text-muted-foreground">{predictions.riskAnalysis[0].timeframe}</p>
            </div>
          </CardContent>
        </Card>

        <Card
          className={`border-2 ${predictions.realTimeMetrics.criticalAlert ? "border-destructive" : "border-border"}`}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Alert Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground font-medium">{predictions.realTimeMetrics.alertMessage}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prediction Charts */}
      <Tabs defaultValue="health" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="health">Health Forecast</TabsTrigger>
          <TabsTrigger value="yield">Yield Prediction</TabsTrigger>
        </TabsList>

        <TabsContent value="health">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>7-Day Health Forecast</CardTitle>
              <CardDescription>
                Predicted crop health score based on current conditions and weather patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={predictions.healthForecast}>
                  <defs>
                    <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#111827", border: "1px solid #1f2937" }} />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorHealth)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="yield">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>8-Week Yield Projection</CardTitle>
              <CardDescription>
                Estimated crop yield based on current growth trajectory and environmental factors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={predictions.yieldPrediction}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="week" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#111827", border: "1px solid #1f2937" }} />
                  <Line
                    type="monotone"
                    dataKey="yield"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ fill: "#06b6d4", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Risk Analysis */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Risk Analysis & Mitigation</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {predictions.riskAnalysis.map((risk, idx) => (
            <Card key={idx} className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{risk.risk}</CardTitle>
                    <CardDescription>{risk.timeframe}</CardDescription>
                  </div>
                  <Badge
                    variant={risk.probability > 50 ? "destructive" : risk.probability > 30 ? "default" : "secondary"}
                  >
                    {risk.probability}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Impact Level</p>
                  <p className={`text-sm font-bold ${risk.impact === "High" ? "text-red-500" : "text-orange-500"}`}>
                    {risk.impact}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Recommended Actions</p>
                  <ul className="space-y-1">
                    {risk.mitigations.map((mitigation, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Zap className="h-3 w-3 text-primary flex-shrink-0 mt-1" />
                        <span>{mitigation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
