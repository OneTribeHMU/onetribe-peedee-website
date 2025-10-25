import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface AffiliateProduct {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  url: string;
  category: string;
  featured?: boolean;
  image?: string;
}

const affiliateProducts: AffiliateProduct[] = [
  {
    name: "Hydrolux Ultra",
    description: "Premium hydrogen water generator - CREATE YOUR OWN HYDROGENATED WATER with H2 Micro Clusters. Clinical research shows hydrogen can boost energetic potential and bring you into alignment.",
    price: "$299.00",
    originalPrice: "$349.00",
    url: "https://store.secretenergy.com/product/hydrolux-ultra/?ref=curtisheru",
    category: "Technology",
    featured: true,
  },
  {
    name: "Nano Gold",
    description: "Colloidal gold supplement for enhanced cognitive function and cellular vitality",
    price: "$49.00",
    url: "https://store.secretenergy.com/product/nano-gold/?ref=curtisheru",
    category: "Supplements",
  },
  {
    name: "Shilajit",
    description: "Ancient Himalayan resin packed with 85+ minerals and fulvic acid for energy and vitality",
    price: "$44.00 - $108.00",
    url: "https://store.secretenergy.com/product/shilajit/?ref=curtisheru",
    category: "Supplements",
  },
  {
    name: "Regeneration Salve",
    description: "Magnesium and Zeolite formula for muscle recovery and skin regeneration",
    price: "$50.00",
    url: "https://store.secretenergy.com/product/regeneration-salve-magnesium-and-zeolite-formula/?ref=curtisheru",
    category: "Supplements",
  },
  {
    name: "Molecular Hydrogen Bath Bomb",
    description: "Transform your bath into a hydrogen-rich healing experience",
    price: "$39.00",
    url: "https://store.secretenergy.com/product/molecular-hydrogen-bath-bomb/?ref=curtisheru",
    category: "Lifestyle",
  },
  {
    name: "Cosmic Clock | Ama-Gi Edition",
    description: "Sacred geometry timepiece for cosmic alignment and energy optimization",
    price: "$479.00",
    url: "https://store.secretenergy.com/product/cosmic-clock-ama-gi-edition/?ref=curtisheru",
    category: "Technology",
  },
  {
    name: "Cymatic Studio Pro",
    description: "Sound frequency technology for healing and meditation",
    price: "$49.00",
    url: "https://store.secretenergy.com/product/cymatic-studio-pro/?ref=curtisheru",
    category: "Technology",
  },
  {
    name: "Sovereignty Mentorship",
    description: "Advanced multidisciplinary mentorship for knowing Self",
    price: "$79.00/month",
    url: "https://store.secretenergy.com/product/sovereignty-mentorship/?ref=curtisheru",
    category: "Courses",
  },
];

interface AffiliateWidgetProps {
  featured?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number; // in milliseconds
}

export default function AffiliateWidget({ 
  featured = false, 
  autoRotate = true,
  rotationInterval = 5000 
}: AffiliateWidgetProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const displayProducts = featured 
    ? affiliateProducts.filter(p => p.featured)
    : affiliateProducts;

  useEffect(() => {
    if (!autoRotate || displayProducts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, displayProducts.length, rotationInterval]);

  const currentProduct = displayProducts[currentIndex];

  return (
    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <Badge className="mb-2 bg-purple-600">
              {currentProduct.featured ? "⭐ Featured Partner" : "Trusted Partner"}
            </Badge>
            <CardTitle className="text-2xl">{currentProduct.name}</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {currentProduct.category} • Secret Energy
            </CardDescription>
          </div>
          {displayProducts.length > 1 && (
            <div className="flex gap-1">
              {displayProducts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View product ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{currentProduct.description}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-bold text-purple-900">
            {currentProduct.price}
          </span>
          {currentProduct.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              {currentProduct.originalPrice}
            </span>
          )}
          {currentProduct.featured && (
            <Badge className="bg-amber-500">Highest Commission</Badge>
          )}
        </div>

        <a 
          href={currentProduct.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg">
            <ExternalLink className="mr-2 h-5 w-5" />
            View on Secret Energy
          </Button>
        </a>

        <p className="text-xs text-gray-500 mt-3 text-center">
          🤝 10+ Year Partnership with Secret Energy
        </p>
      </CardContent>
    </Card>
  );
}

// Compact version for sidebars
export function AffiliateWidgetCompact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % affiliateProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const product = affiliateProducts[currentIndex];

  return (
    <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg border-2 border-purple-300">
      <div className="flex items-center gap-2 mb-2">
        <Star className="h-4 w-4 text-purple-600" />
        <span className="text-xs font-semibold text-purple-900">
          TRUSTED PARTNER
        </span>
      </div>
      <h4 className="font-bold text-sm mb-1">{product.name}</h4>
      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-purple-900">{product.price}</span>
        <a 
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs">
            View <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </a>
      </div>
    </div>
  );
}

