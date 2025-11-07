"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Clock, Zap, Droplets, Thermometer, Bug, Leaf, X, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AlertsSystem() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "disease",
      severity: "high",
      title: "Powdery Mildew Alert",
      message: "Early signs of powdery mildew detected in Field A. Immediate fungicide treatment recommended.",
      field: "Field A",
      timeAgo: "1 hour ago",
      status: "active",
      action: "Apply Sulfur-based fungicide",
      icon: AlertCircle,
    },
    {
      id: 2,
      type: "water",
      severity: "medium",
      title: "Irrigation Required",
      message: "Soil moisture levels dropping. Irrigation needed in the next 24 hours.",
      field: "Field B",
      timeAgo: "3 hours ago",
      status: "active",
      action: "Schedule irrigation",
      icon: Droplets,
    },
    {
      id: 3,
      type: "pest",
      severity: "medium",
      title: "Pest Activity Detected",
      message: "Increased insect trap captures suggest pest pressure building.",
      field: "Field C",
      timeAgo: "5 hours ago",
      status: "acknowledged",
      action: "Deploy pest management protocol",
      icon: Bug,
    },
    {
      id: 4,
      type: "weather",
      severity: "low",
      title: "Weather Alert",
      message: "Rain expected tomorrow morning. Good for crop health.",
      field: "All Fields",
      timeAgo: "8 hours ago",
      status: "acknowledged",
      action: "No action needed",
      icon: Leaf,
    },
  ])

  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      priority: "urgent",
      title: "Apply Preventive Fungicide",
      description:
        "Based on current humidity levels and disease risk assessment, applying a preventive fungicide now will reduce infection risk by 75%.",
      benefit: "Prevent 75% of potential fungal infections",
      estimatedTime: "2-3 hours",
      cost: "Medium",
      fields: ["Field A"],
    },
    {
      id: 2,
      priority: "high",
      title: "Optimize Irrigation Schedule",
      description:
        "Current soil moisture trending downward. Adjust irrigation to prevent stress while maintaining yield potential.",
      benefit: "Maintain optimal soil moisture levels",
      estimatedTime: "1 hour setup",
      cost: "Low",
      fields: ["Field B", "Field D"],
    },
    {
      id: 3,
      priority: "high",
      title: "Increase Air Circulation",
      description: "Deploy fans or improve natural ventilation to reduce humidity and fungal disease pressure.",
      benefit: "Reduce humidity by 15-20%",
      estimatedTime: "Immediate",
      cost: "Low",
      fields: ["Field A"],
    },
    {
      id: 4,
      priority: "medium",
      title: "Scout for Additional Pests",
      description:
        "Conduct thorough field scouting to identify pest population and determine if additional control measures are needed.",
      benefit: "Early detection of pest hotspots",
      estimatedTime: "4-6 hours",
      cost: "Low",
      fields: ["Field C"],
    },
    {
      id: 5,
      priority: "medium",
      title: "Nutrient Application",
      description: "Soil analysis shows slight nitrogen deficiency. Apply balanced fertilizer to maintain vigor.",
      benefit: "Increase yield by 5-8%",
      estimatedTime: "2-3 hours",
      cost: "Medium",
      fields: ["Field B", "Field C"],
    },
  ])

  const handleDismissAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }

  const handleAcknowledgeAlert = (id) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, status: "acknowledged" } : alert)))
  }

  const severityColors = {
    high: "bg-red-500/10 border-red-500/30 text-red-700",
    medium: "bg-yellow-500/10 border-yellow-500/30 text-yellow-700",
    low: "bg-blue-500/10 border-blue-500/30 text-blue-700",
  }

  const priorityColors = {
    urgent: "text-red-500",
    high: "text-orange-500",
    medium: "text-yellow-500",
  }

  const getAlertIcon = (type) => {
    const icons = {
      disease: AlertCircle,
      water: Droplets,
      pest: Bug,
      weather: Leaf,
      temperature: Thermometer,
    }
    return icons[type] || AlertCircle
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Alerts & Recommendations</h1>
        <p className="text-muted-foreground">
          Intelligent alerts and actionable recommendations for optimal crop management
        </p>
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="alerts">
            Active Alerts
            <Badge variant="outline" className="ml-2">
              {alerts.filter((a) => a.status === "active").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="recommendations">
            Recommendations
            <Badge variant="outline" className="ml-2">
              {recommendations.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          {alerts.length === 0 ? (
            <Card className="border-border">
              <CardContent className="pt-12 pb-12 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-500" />
                <p className="text-lg font-medium text-foreground">All Systems Normal</p>
                <p className="text-sm text-muted-foreground mt-1">No active alerts at this time</p>
              </CardContent>
            </Card>
          ) : (
            alerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type)
              return (
                <Card key={alert.id} className={`border-2 transition-all ${severityColors[alert.severity]}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <AlertIcon
                          className={`h-6 w-6 flex-shrink-0 mt-0.5 ${
                            alert.severity === "high"
                              ? "text-red-500"
                              : alert.severity === "medium"
                                ? "text-yellow-500"
                                : "text-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{alert.title}</h3>
                            <Badge
                              variant={alert.status === "active" ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {alert.status === "active" ? "Active" : "Acknowledged"}
                            </Badge>
                          </div>
                          <p className="text-sm text-foreground/80 mb-2">{alert.message}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span>{alert.field}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {alert.timeAgo}
                            </div>
                          </div>
                          <div className="inline-block bg-black/20 px-3 py-1 rounded text-sm font-medium text-foreground">
                            {alert.action}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {alert.status === "active" && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleAcknowledgeAlert(alert.id)}
                            className="text-primary hover:bg-primary/10"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDismissAlert(alert.id)}
                          className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className={`h-5 w-5 ${priorityColors[rec.priority]}`} />
                        <CardTitle className="text-lg">{rec.title}</CardTitle>
                        <Badge
                          variant={
                            rec.priority === "urgent"
                              ? "destructive"
                              : rec.priority === "high"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription className="mt-2">{rec.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Expected Benefit</p>
                      <p className="text-sm font-semibold text-foreground">{rec.benefit}</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Est. Time</p>
                      <p className="text-sm font-semibold text-foreground">{rec.estimatedTime}</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Cost Impact</p>
                      <p className="text-sm font-semibold text-foreground">{rec.cost}</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Affected Fields</p>
                      <p className="text-sm font-semibold text-foreground">{rec.fields.length} Field(s)</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Fields</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.fields.map((field) => (
                        <Badge key={field} variant="outline">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <Button className="w-full bg-primary hover:bg-primary/90">Implement Recommendation</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">{alerts.filter((a) => a.status === "active").length}</div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Urgent Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-500">
              {recommendations.filter((r) => r.priority === "urgent").length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Potential Yield Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">+12.5%</div>
            <p className="text-xs text-muted-foreground mt-1">if all recommendations implemented</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Implementation Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-500">18-22h</div>
            <p className="text-xs text-muted-foreground mt-1">estimated for all recommendations</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
