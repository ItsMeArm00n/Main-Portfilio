"use client"

import { Card } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Publications</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Research papers and technical publications</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="glass glass-hover p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
            <div className="flex items-start space-x-6">
              <div className="p-4 glass rounded-xl group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  AQIntel: Machine Learning-Based Air Quality Index Prediction
                </h3>
                <p className="text-white/75 leading-relaxed">
                  This paper presents AQIntel, a machine learning web app that predicts global Air Quality Index (AQI) using Indian CPCB standards. It employs RandomForestClassifier and RandomForestRegressor , trained on pollutant and meteorological data (PM2.5, PM10, NO2, SO2, CO, O3). The project demonstrates AI’s potential for environmental monitoring, with future scope in deep learning and live sensor integration.
                </p>
                <a
                  href="https://zenodo.org/records/17316093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                >
                  View Publication
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-white/60 text-lg italic">More coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
