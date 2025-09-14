"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ModelSelectorProps {
  selectedModel: string;
  onModelSelect: (model: string) => void;
  disabled?: boolean;
}

const modelCategories = [
  {
    category: "OpenAI",
    provider: "OpenAI",
    icon: "🤖",
    description: "ChatGPT's advanced image generation models",
    color: "from-green-400 to-emerald-500",
    models: [
      {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        description: 'Latest OpenAI model with superior quality and prompt adherence',
        badge: 'Premium',
        speed: '~15s',
        quality: '🔥 Ultra High',
        specialty: 'Photorealism',
        available: true
      },
      {
        id: 'dall-e-2',
        name: 'DALL-E 2',
        description: 'Reliable previous generation with consistent results',
        badge: 'Stable',
        speed: '~10s',
        quality: '⭐ High',
        specialty: 'General Purpose',
        available: true
      }
    ]
  },
  {
    category: "Google AI",
    provider: "Google",
    icon: "🧠",
    description: "Google's cutting-edge Imagen technology",
    color: "from-blue-400 to-purple-500",
    models: [
      {
        id: 'google/imagen-3.0-generate-001',
        name: 'Imagen 3.0',
        description: 'Google\'s latest with exceptional photorealistic rendering',
        badge: 'New',
        speed: '~12s',
        quality: '🔥 Ultra High',
        specialty: 'Photography',
        available: true
      },
      {
        id: 'google/imagen-2.0-generate-001',
        name: 'Imagen 2.0',
        description: 'Advanced model with excellent text integration',
        badge: 'Popular',
        speed: '~10s',
        quality: '⭐ High',
        specialty: 'Text + Images',
        available: true
      }
    ]
  },
  {
    category: "Replicate (FLUX)",
    provider: "FLUX",
    icon: "⚡",
    description: "Open-source state-of-the-art models",
    color: "from-pink-400 to-rose-500",
    models: [
      {
        id: 'replicate/black-forest-labs/flux-1.1-pro',
        name: 'FLUX 1.1 Pro',
        description: 'Ultra-high quality open-source model with stunning results',
        badge: 'Ultra HD',
        speed: '~11s',
        quality: '🔥 Ultra High',
        specialty: 'Artistic',
        available: true
      },
      {
        id: 'replicate/black-forest-labs/flux-dev',
        name: 'FLUX Dev',
        description: 'Development version optimized for fast generation',
        badge: 'Fast',
        speed: '~8s',
        quality: '⭐ High',
        specialty: 'Quick Iterations',
        available: true
      },
      {
        id: 'replicate/black-forest-labs/flux-schnell',
        name: 'FLUX Schnell',
        description: 'Fastest FLUX variant for rapid prototyping',
        badge: 'Lightning',
        speed: '~5s',
        quality: '✨ Good',
        specialty: 'Speed',
        available: true
      }
    ]
  },
  {
    category: "Stability AI",
    provider: "Stability",
    icon: "🎨",
    description: "Professional-grade Stable Diffusion models",
    color: "from-teal-400 to-cyan-500",
    models: [
      {
        id: 'stability-ai/stable-diffusion-3-medium',
        name: 'SD3 Medium',
        description: 'Latest Stability AI with improved composition and text',
        badge: 'Latest',
        speed: '~9s',
        quality: '⭐ High',
        specialty: 'Composition',
        available: true
      },
      {
        id: 'stability-ai/stable-diffusion-xl-base-1.0',
        name: 'SDXL Base',
        description: 'High-resolution model with detailed outputs',
        badge: 'HD',
        speed: '~13s',
        quality: '⭐ High',
        specialty: 'Resolution',
        available: true
      }
    ]
  }
];

export default function ModelSelector({ selectedModel, onModelSelect, disabled = false }: ModelSelectorProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const getSelectedModelInfo = () => {
    for (const category of modelCategories) {
      const model = category.models.find(m => m.id === selectedModel);
      if (model) {
        return { ...model, category: category.category, provider: category.provider, icon: category.icon };
      }
    }
    return null;
  };

  const selectedInfo = getSelectedModelInfo();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">AI Model Selection</h4>
            <p className="text-gray-400 text-sm">Choose your preferred AI model for generation</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="w-8 h-8 p-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="w-8 h-8 p-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Selected Model Info */}
      {selectedInfo && (
        <Card className="p-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border-purple-400/30">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">{selectedInfo.icon}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h6 className="text-white font-semibold">{selectedInfo.name}</h6>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs">
                  {selectedInfo.provider}
                </Badge>
              </div>
              <p className="text-gray-300 text-sm">{selectedInfo.description}</p>
              <div className="flex items-center space-x-4 mt-2 text-xs">
                <span className="text-gray-400">Speed: <span className="text-white">{selectedInfo.speed}</span></span>
                <span className="text-gray-400">Quality: <span className="text-white">{selectedInfo.quality}</span></span>
                <span className="text-gray-400">Best for: <span className="text-white">{selectedInfo.specialty}</span></span>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Models Grid/List */}
      <div className="space-y-6">
        {modelCategories.map((category) => (
          <div key={category.category}>
            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-lg`}>
                {category.icon}
              </div>
              <div>
                <h5 className="text-white font-medium">{category.category}</h5>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            </div>
            
            {/* Models */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-3' : 'space-y-3'}>
              {category.models.map((model) => (
                <Card
                  key={model.id}
                  className={`
                    relative overflow-hidden cursor-pointer transition-all duration-300 p-0 group
                    ${selectedModel === model.id 
                      ? 'ring-2 ring-purple-400 bg-gradient-to-br from-white/15 to-white/5 border-purple-400/50 shadow-lg shadow-purple-500/20' 
                      : 'bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 border-white/20 hover:border-white/30 hover:shadow-lg'
                    }
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    hover:scale-[1.02] hover:-translate-y-1
                  `}
                  onClick={() => !disabled && onModelSelect(model.id)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Content */}
                  <div className="relative p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h6 className="text-white font-semibold text-base">{model.name}</h6>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs px-2 py-1 bg-gradient-to-r ${category.color} text-white border-0`}
                          >
                            {model.badge}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">{model.description}</p>
                        
                        {/* Stats */}
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-blue-400">{model.speed}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span className="text-amber-400">{model.quality}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span className="text-green-400">{model.specialty}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Selection Indicator */}
                  {selectedModel === model.id && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Status Banner */}
      <Card className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-400/30">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div>
            <p className="text-green-400 font-medium text-sm">All Models Fully Operational</p>
            <p className="text-green-300/80 text-xs mt-1">Choose any model above - all are ready to generate stunning images!</p>
          </div>
        </div>
      </Card>
    </div>
  );
}