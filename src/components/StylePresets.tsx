"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StylePresetsProps {
  onStyleSelect: (style: string) => void;
  selectedStyle: string;
  disabled?: boolean;
}

const styleCategories = [
  {
    category: "Photography",
    icon: "📸",
    styles: [
      {
        id: 'photorealistic',
        name: 'Photorealistic',
        description: 'Ultra-realistic, professional photography',
        gradient: 'from-blue-500 to-cyan-500',
        popular: true
      },
      {
        id: 'portrait',
        name: 'Portrait',
        description: 'Studio lighting, bokeh background',
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        id: 'cinematic',
        name: 'Cinematic',
        description: 'Movie-like, dramatic lighting',
        gradient: 'from-orange-500 to-red-500',
        popular: true
      },
      {
        id: 'macro',
        name: 'Macro',
        description: 'Extreme close-up, high detail',
        gradient: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    category: "Artistic",
    icon: "🎨",
    styles: [
      {
        id: 'artistic',
        name: 'Artistic',
        description: 'Creative, stylized, expressive',
        gradient: 'from-purple-500 to-pink-500',
        popular: true
      },
      {
        id: 'abstract',
        name: 'Abstract',
        description: 'Non-representational, modern',
        gradient: 'from-violet-500 to-purple-500'
      },
      {
        id: 'impressionist',
        name: 'Impressionist',
        description: 'Soft brush strokes, painterly',
        gradient: 'from-yellow-500 to-orange-500'
      },
      {
        id: 'surreal',
        name: 'Surreal',
        description: 'Dreamlike, fantastical, Dali-style',
        gradient: 'from-indigo-500 to-blue-500'
      }
    ]
  },
  {
    category: "Digital",
    icon: "💻",
    styles: [
      {
        id: 'digital-art',
        name: 'Digital Art',
        description: 'Modern digital illustration',
        gradient: 'from-cyan-500 to-blue-500',
        popular: true
      },
      {
        id: 'pixel-art',
        name: 'Pixel Art',
        description: '8-bit retro gaming style',
        gradient: 'from-green-500 to-teal-500'
      },
      {
        id: 'vector',
        name: 'Vector',
        description: 'Clean geometric, flat design',
        gradient: 'from-blue-500 to-indigo-500'
      },
      {
        id: 'neon',
        name: 'Neon',
        description: 'Glowing colors, cyberpunk',
        gradient: 'from-pink-500 to-violet-500',
        popular: true
      }
    ]
  },
  {
    category: "Classic",
    icon: "🏛️",
    styles: [
      {
        id: 'renaissance',
        name: 'Renaissance',
        description: 'Classical art, chiaroscuro',
        gradient: 'from-amber-500 to-yellow-500'
      },
      {
        id: 'baroque',
        name: 'Baroque',
        description: 'Dramatic lighting, ornate',
        gradient: 'from-orange-500 to-amber-500'
      },
      {
        id: 'oil-painting',
        name: 'Oil Painting',
        description: 'Rich textures, classical',
        gradient: 'from-red-500 to-orange-500'
      },
      {
        id: 'watercolor',
        name: 'Watercolor',
        description: 'Soft flowing colors, delicate',
        gradient: 'from-blue-400 to-cyan-400'
      }
    ]
  },
  {
    category: "Modern",
    icon: "🚀",
    styles: [
      {
        id: 'minimalist',
        name: 'Minimalist',
        description: 'Clean, simple, elegant',
        gradient: 'from-gray-500 to-slate-500',
        popular: true
      },
      {
        id: 'cyberpunk',
        name: 'Cyberpunk',
        description: 'Neon, futuristic, dystopian',
        gradient: 'from-green-500 to-teal-500',
        popular: true
      },
      {
        id: 'vaporwave',
        name: 'Vaporwave',
        description: '80s nostalgia, neon pink/blue',
        gradient: 'from-pink-400 to-purple-400'
      },
      {
        id: 'steampunk',
        name: 'Steampunk',
        description: 'Victorian industrial, brass gears',
        gradient: 'from-amber-600 to-orange-600'
      }
    ]
  },
  {
    category: "Themed",
    icon: "🌟",
    styles: [
      {
        id: 'fantasy',
        name: 'Fantasy',
        description: 'Magical, ethereal, mystical',
        gradient: 'from-indigo-500 to-purple-500',
        popular: true
      },
      {
        id: 'horror',
        name: 'Horror',
        description: 'Dark, spooky, gothic',
        gradient: 'from-red-600 to-black'
      },
      {
        id: 'anime',
        name: 'Anime',
        description: 'Japanese animation, cel-shaded',
        gradient: 'from-pink-400 to-rose-400'
      },
      {
        id: 'vintage',
        name: 'Vintage',
        description: 'Retro, aged, nostalgic',
        gradient: 'from-amber-500 to-orange-500'
      }
    ]
  }
];

const popularStyles = styleCategories
  .reduce((acc: any[], cat) => [...acc, ...cat.styles.filter(style => style.popular)], [])
  .slice(0, 8);

export default function StylePresets({ onStyleSelect, selectedStyle, disabled = false }: StylePresetsProps) {
  const [viewMode, setViewMode] = useState<'popular' | 'categories'>('popular');

  const getSelectedStyleInfo = () => {
    for (const category of styleCategories) {
      const style = category.styles.find(s => s.id === selectedStyle);
      if (style) {
        return { ...style, category: category.category, icon: category.icon };
      }
    }
    return null;
  };

  const selectedInfo = getSelectedStyleInfo();

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-lg">
            🎨
          </div>
          <div>
            <h4 className="text-white font-semibold">Style Presets</h4>
            <p className="text-gray-400 text-sm">Choose your artistic style</p>
          </div>
        </div>
        
        {selectedStyle && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onStyleSelect('')}
            disabled={disabled}
            className="text-xs border-white/20 hover:bg-white/10"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Selected Style Info */}
      {selectedInfo && (
        <Card className="p-4 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-orange-500/10 border-orange-400/30">
          <div className="flex items-center space-x-3">
            <div className="text-xl">{selectedInfo.icon}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h6 className="text-white font-semibold">{selectedInfo.name}</h6>
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-xs">
                  {selectedInfo.category}
                </Badge>
              </div>
              <p className="text-gray-300 text-sm">{selectedInfo.description}</p>
            </div>
          </div>
        </Card>
      )}

      {/* View Toggle */}
      <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'popular' | 'categories')} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/5">
          <TabsTrigger value="popular" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500">
            ⭐ Popular
          </TabsTrigger>
          <TabsTrigger value="categories" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500">
            📂 All Categories
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {popularStyles.map((style) => (
              <Card
                key={style.id}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300 p-0 group
                  ${selectedStyle === style.id 
                    ? 'ring-2 ring-orange-400 bg-gradient-to-br from-white/15 to-white/5 border-orange-400/50 shadow-lg shadow-orange-500/20' 
                    : 'bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 border-white/20 hover:border-white/30'
                  }
                  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                  hover:scale-[1.02] hover:-translate-y-1
                `}
                onClick={() => !disabled && onStyleSelect(style.id)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                {/* Content */}
                <div className="relative p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-white font-medium text-sm">{style.name}</h5>
                    <Badge className={`bg-gradient-to-r ${style.gradient} text-white border-0 text-xs`}>
                      HOT
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-xs leading-tight">{style.description}</p>
                </div>
                
                {/* Selection Indicator */}
                {selectedStyle === style.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          {styleCategories.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-2xl">{category.icon}</div>
                <h5 className="text-white font-medium text-lg">{category.category}</h5>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
              
              {/* Category Styles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {category.styles.map((style) => (
                  <Card
                    key={style.id}
                    className={`
                      relative overflow-hidden cursor-pointer transition-all duration-300 p-0 group
                      ${selectedStyle === style.id 
                        ? 'ring-2 ring-orange-400 bg-gradient-to-br from-white/15 to-white/5 border-orange-400/50 shadow-lg shadow-orange-500/20' 
                        : 'bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 border-white/20 hover:border-white/30'
                      }
                      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                      hover:scale-[1.02] hover:-translate-y-1
                    `}
                    onClick={() => !disabled && onStyleSelect(style.id)}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-15 group-hover:opacity-25 transition-opacity`} />
                    
                    {/* Content */}
                    <div className="relative p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <h6 className="text-white font-medium text-sm">{style.name}</h6>
                        {style.popular && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black border-0 text-xs">
                            ⭐
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs leading-tight">{style.description}</p>
                    </div>
                    
                    {/* Selection Indicator */}
                    {selectedStyle === style.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 transition-all duration-300" />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}