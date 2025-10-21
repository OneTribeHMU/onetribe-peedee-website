import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ExternalLink, Leaf, ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="w-full border-b px-6 py-4 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img
                src={APP_LOGO}
                className="h-10 w-10 rounded-lg border-border bg-background object-cover"
                alt="OneTribe Logo"
              />
              <span className="text-2xl font-bold text-green-800">{APP_TITLE}</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/"><a className="text-gray-700 hover:text-green-700 font-medium">Home</a></Link>
            <Link href="/products"><a className="text-green-700 font-bold">Products</a></Link>
            <Link href="/services"><a className="text-gray-700 hover:text-green-700 font-medium">Services</a></Link>
            <Link href="/blog"><a className="text-gray-700 hover:text-green-700 font-medium">Blog</a></Link>
            <Link href="/contact"><a className="text-gray-700 hover:text-green-700 font-medium">Contact</a></Link>
          </nav>

          <Button className="bg-green-700 hover:bg-green-800">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart (0)
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our range of natural, sustainably-grown wellness products
          </p>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="teas" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="teas">Teas</TabsTrigger>
              <TabsTrigger value="juices">Juices</TabsTrigger>
              <TabsTrigger value="affiliate">Affiliate</TabsTrigger>
            </TabsList>

            {/* Teas Tab */}
            <TabsContent value="teas">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                      <Leaf className="h-20 w-20 text-amber-700" />
                    </div>
                    <CardTitle>Sarsaparilla Tea - Original</CardTitle>
                    <CardDescription>Our signature herbal blend for vitality and wellness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Traditional Sarsaparilla root tea, known for its blood-purifying properties and rich, earthy flavor.
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">$12.99</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <Leaf className="h-20 w-20 text-green-700" />
                    </div>
                    <CardTitle>Sarsaparilla Tea - Mint Blend</CardTitle>
                    <CardDescription>Refreshing mint-infused variation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Our classic Sarsaparilla with a cooling mint twist, perfect for digestive support.
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">$13.99</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <Leaf className="h-20 w-20 text-purple-700" />
                    </div>
                    <CardTitle>Herbal Wellness Collection</CardTitle>
                    <CardDescription>Curated tea sampler pack</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Includes 5 varieties: Sarsaparilla, Mint Blend, Ginger Root, Chamomile, and Hibiscus.
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">$34.99</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Juices Tab */}
            <TabsContent value="juices">
              <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Seasonal Rotation Schedule</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-blue-800">Fall</p>
                    <p className="text-gray-700">Apple & Pear Blends</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Winter</p>
                    <p className="text-gray-700">Citrus Varieties</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Spring</p>
                    <p className="text-gray-700">Vegetable Juices</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">Summer</p>
                    <p className="text-gray-700">Berry Blends</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🍊</span>
                    </div>
                    <CardTitle>Citrus Sunrise</CardTitle>
                    <CardDescription>Orange, grapefruit, and lemon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Vitamin C powerhouse to boost immunity and energy. Currently in season!
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">$5.99</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🥬</span>
                    </div>
                    <CardTitle>Green Vitality</CardTitle>
                    <CardDescription>Kale, spinach, cucumber, apple</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Nutrient-dense green juice for detox and daily wellness support.
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">$6.99</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-2 border-green-500">
                  <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-t-lg">
                    CUSTOM BLEND
                  </div>
                  <CardHeader>
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🎨</span>
                    </div>
                    <CardTitle>Build Your Own</CardTitle>
                    <CardDescription>Choose your fruits and vegetables</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Bring your own ingredients or select from our fresh produce. $2-3 processing fee.
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">$3.00+</p>
                    <Button variant="outline" className="w-full border-green-700 text-green-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Affiliate Products Tab */}
            <TabsContent value="affiliate">
              <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-bold text-lg text-purple-900 mb-2">Trusted Wellness Partners</h3>
                <p className="text-gray-700">
                  We've partnered with Secretenergy.com and other trusted brands to bring you premium wellness products 
                  that align with our natural health philosophy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">⚡</span>
                    </div>
                    <CardTitle>Secret Energy Products</CardTitle>
                    <CardDescription>Premium energy and wellness supplements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore our curated selection of natural energy boosters and wellness supplements.
                    </p>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Collection
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🌿</span>
                    </div>
                    <CardTitle>Herbal Supplements</CardTitle>
                    <CardDescription>Natural health support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      High-quality herbal supplements from trusted manufacturers.
                    </p>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">🧘</span>
                    </div>
                    <CardTitle>Wellness Accessories</CardTitle>
                    <CardDescription>Tools for your health journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Yoga mats, essential oil diffusers, and more wellness essentials.
                    </p>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Browse All
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">&copy; 2025 OneTribe Pee Dee Aquaponics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

