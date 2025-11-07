"use client"

import { useState } from "react"
import { Upload, Loader2, CheckCircle } from "lucide-react"

export default function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result)
        analyzeImage(event.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async (imageData) => {
    setLoading(true)
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setResult({
      disease: "Powdery Mildew",
      confidence: 92,
      severity: "High",
      recommendation: "Apply fungicide treatment immediately. Increase air circulation in the field.",
      affectedArea: "15%",
      treatmentOptions: [
        "Sulfur-based fungicide (Recommended)",
        "Organic neem oil treatment",
        "Biological control agents",
      ],
    })
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">AI Disease Detection</h1>
        <p className="text-muted-foreground">Upload a crop image for instant AI-powered disease analysis</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="rounded-lg border-2 border-dashed border-border bg-muted/20 p-8 text-center hover:bg-muted/30 transition-colors">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
            <label htmlFor="image-upload" className="cursor-pointer">
              {selectedImage ? (
                <div>
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Uploaded crop"
                    className="mx-auto mb-4 max-h-64 rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground">Click to change image</p>
                </div>
              ) : (
                <div>
                  <Upload className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <p className="mb-2 text-lg font-medium text-foreground">Upload Crop Image</p>
                  <p className="text-sm text-muted-foreground">Drag and drop or click to select</p>
                </div>
              )}
            </label>
          </div>
        </div>

        <div>
          {loading ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
              <p className="text-lg font-medium text-foreground">Analyzing Image...</p>
              <p className="text-sm text-muted-foreground">Using advanced AI models</p>
            </div>
          ) : result ? (
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{result.disease}</h2>
                    <p className="text-sm text-muted-foreground">Disease Identified</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-3xl font-bold text-primary">{result.confidence}%</div>
                    <p className="text-xs text-muted-foreground">Confidence</p>
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="text-xs font-medium text-muted-foreground">Severity</p>
                    <p className="mt-1 text-lg font-bold text-accent">{result.severity}</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="text-xs font-medium text-muted-foreground">Affected Area</p>
                    <p className="mt-1 text-lg font-bold text-secondary">{result.affectedArea}</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-muted/20 p-4">
                  <p className="text-sm font-medium text-foreground mb-2">Immediate Action Required</p>
                  <p className="text-sm text-muted-foreground">{result.recommendation}</p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold text-foreground">Treatment Options</h3>
                <div className="space-y-3">
                  {result.treatmentOptions.map((option, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-muted/20 p-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="text-muted-foreground">Upload an image to get started with AI analysis</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
