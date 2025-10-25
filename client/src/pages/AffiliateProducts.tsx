import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const affiliateProducts = [
  {
    name: "Hydrolux Ultra",
    description: "Premium hydrogen water generator - CREATE YOUR OWN HYDROGENATED WATER with H2 Micro Clusters up to PREMIUM GRADE. Clinical research shows hydrogen has a strong track record for healing and teaching the body how to function at its highest potential.",
    price: "$299.00",
    originalPrice: "$349.00",
    url: "https://store.secretenergy.com/product/hydrolux-ultra/?ref=curtisheru",
    category: "Technology",
    featured: true,
    image: "/images/products/hydrolux-ultra.png",
    benefits: [
      "Produces molecular hydrogen for optimal cellular health",
      "Supports energy production and mental clarity",
      "Anti-inflammatory and antioxidant properties",
      "Easy to use - just add water",
    ],
  },
  {
    name: "Hydrolux Go",
    description: "Portable inhalation cap and nasal cannula for hydrogen therapy on the go",
    price: "Contact for pricing",
    url: "https://store.secretenergy.com/product/hydrolux-go-inhalation-cap-and-nasal-cannula/?ref=curtisheru",
    category: "Technology",
    featured: true,
  },
  {
    name: "Nano Gold",
    description: "Colloidal gold supplement for enhanced cognitive function, cellular vitality, and spiritual alignment",
    price: "$49.00",
    url: "https://store.secretenergy.com/product/nano-gold/?ref=curtisheru",
    category: "Supplements",
  },
  {
    name: "Shilajit Mountain Gold",
    description: "Ancient Himalayan resin packed with 85+ minerals and fulvic acid for sustained energy and vitality",
    price: "$44.00 - $108.00",
    url: "https://store.secretenergy.com/product/shilajit/?ref=curtisheru",
    category: "Supplements",
    image: "/images/products/shilajit.png",
  },
  {
    name: "Regeneration Salve",
    description: "Medical-grade Magnesium Sulfate Salve for soft tissue restoration, muscle pain relief, and joint discomfort",
    price: "$50.00",
    url: "https://store.secretenergy.com/product/regeneration-salve-magnesium-and-zeolite-formula/?ref=curtisheru",
    category: "Supplements",
    image: "/images/products/regeneration-salve.png",
  },
  {
    name: "Molecular Hydrogen Bath Bomb",
    description: "Transform your bath into a hydrogen-rich healing experience for full-body wellness",
    price: "$39.00",
    url: "https://store.secretenergy.com/product/molecular-hydrogen-bath-bomb/?ref=curtisheru",
    category: "Lifestyle",
  },
  {
    name: "Jing",
    description: "Tibetan OM formula for deep vitality and life force energy",
    price: "Contact for pricing",
    url: "https://store.secretenergy.com/product/jing/?ref=curtisheru",
    category: "Supplements",
  },
  {
    name: "Digest-xym",
    description: "Powerful digestive enzyme formula for optimal nutrient absorption",
    price: "Contact for pricing",
    url: "https://store.secretenergy.com/product/digest-xym/?ref=curtisheru",
    category: "Supplements",
  },
  {
    name: "Cosmic Clock | Ama-Gi Edition",
    description: "Sacred geometry timepiece for cosmic alignment and energy optimization throughout your day",
    price: "$479.00",
    url: "https://store.secretenergy.com/product/cosmic-clock-ama-gi-edition/?ref=curtisheru",
    category: "Technology",
  },
  {
    name: "Vector Equilibrium",
    description: "Sacred geometry structure based on Buckminster Fuller's work - the fundamental form of balance in the universe",
    price: "$584.25",
    url: "https://store.secretenergy.com/product/vector-equilibrium/?ref=curtisheru",
    category: "Technology",
  },
  {
    name: "Cymatic Studio Pro",
    description: "Sound frequency technology for healing, meditation, and consciousness expansion",
    price: "$49.00",
    url: "https://store.secretenergy.com/product/cymatic-studio-pro/?ref=curtisheru",
    category: "Technology",
  },
  {
    name: "Sovereignty Mentorship",
    description: "Advanced multidisciplinary mentorship for the greatest mission of your existence: knowing Self",
    price: "$79.00/month",
    url: "https://store.secretenergy.com/product/sovereignty-mentorship/?ref=curtisheru",
    category: "Courses",
  },
];

const categories = ["All", "Technology", "Supplements", "Lifestyle", "Courses"];

export default function AffiliateProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? affiliateProducts
    : affiliateProducts.filter(p => p.category === selectedCategory);

  const featuredProduct = affiliateProducts.find(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
            <Star className="inline h-5 w-5 mr-2" />
            Trusted Partner Products
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Secret Energy Wellness Products
          </h1>
          <p className="text-xl mb-4 text-blue-100">
            10+ Years of Partnership • Superhuman Elements for Conscious Living
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            We've personally used and trusted Secret Energy products for over a decade. 
            These are the tools that support our wellness journey and we're proud to share them with you.
          </p>
        </div>
      </section>

      {/* Featured Product - Hydrolux */}
      {featuredProduct && (
        <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-3 bg-amber-500 text-white text-lg px-6 py-2 animate-pulse">
                <Sparkles className="inline h-5 w-5 mr-2" />
                FEATURED - Highest Commission
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {featuredProduct.name}
              </h2>
              <p className="text-lg text-gray-600">
                Our #1 Recommended Wellness Technology
              </p>
            </div>

            <Card className="border-4 border-amber-400 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    {featuredProduct.image && (
                      <div className="mb-6 flex justify-center">
                        <img 
                          src={featuredProduct.image} 
                          alt={featuredProduct.name}
                          className="w-full max-w-md h-64 object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4 text-purple-900">
                      Why We Love Hydrolux Ultra
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {featuredProduct.description}
                    </p>
                    
                    {featuredProduct.benefits && (
                      <div className="mb-6">
                        <h4 className="font-bold text-lg mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {featuredProduct.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">✓</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-700">
                        <strong>Curtis's Note:</strong> "I've been using hydrogen water daily for years. 
                        The Hydrolux Ultra is the best investment I've made in my health. The energy 
                        boost and mental clarity are undeniable."
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl font-bold text-purple-900">
                          {featuredProduct.price}
                        </span>
                        {featuredProduct.originalPrice && (
                          <span className="text-2xl text-gray-500 line-through">
                            {featuredProduct.originalPrice}
                          </span>
                        )}
                      </div>
                      <Badge className="mb-4 bg-green-600">Save $50</Badge>
                      
                      <a 
                        href={featuredProduct.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-xl py-6">
                          <ExternalLink className="mr-2 h-6 w-6" />
                          Get Hydrolux Ultra
                        </Button>
                      </a>

                      <p className="text-xs text-gray-500 mt-4 text-center">
                        Purchases through our link support OneTribe's mission
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 justify-center flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  {product.image && (
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-contain rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-purple-100 text-purple-900">
                      {product.category}
                    </Badge>
                    {product.featured && (
                      <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Product
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Info */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why We Partner with Secret Energy</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">10+ Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Over a decade of trust and proven results
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personally Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Every product we recommend, we use ourselves
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conscious Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Aligned values for superhuman wellness
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              <strong>Full Transparency:</strong> When you purchase through our affiliate links, 
              we receive a commission at no extra cost to you. This support helps us continue 
              our mission with OneTribe, Pee Dee Aquaponics, and Uhuru Academy.
            </p>
            <p className="text-sm text-gray-600">
              Questions? Contact Curtis Heru Boyd: <br/>
              <a href="mailto:Curtisheru@onetribe.io" className="text-purple-600 hover:underline">
                Curtisheru@onetribe.io
              </a> | (803) 201-5723
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

