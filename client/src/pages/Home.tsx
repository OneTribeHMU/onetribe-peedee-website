import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Droplets, Leaf, Mail, Phone, ShoppingBag, Sparkles, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="w-full border-b px-6 py-4 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={APP_LOGO}
              className="h-10 w-10 rounded-lg border-border bg-background object-cover"
              alt="OneTribe Logo"
            />
            <span className="text-2xl font-bold text-green-800">{APP_TITLE}</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-green-700 font-medium">Home</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-700 hover:text-green-700 font-medium">Products</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-700 hover:text-green-700 font-medium">Services</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-700 hover:text-green-700 font-medium">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-green-700 font-medium">Contact</a>
            </Link>
          </nav>

          <Button className="bg-green-700 hover:bg-green-800">
            Shop Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            Fresh, Natural Wellness
            <br />
            <span className="text-green-700">From Farm to Cup</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the power of nature with our cold-pressed juices, artisanal Sarsaparilla tea, 
            and holistic wellness coaching. Grown sustainably through aquaponics in the Pee Dee region.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-lg px-8">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Products
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-green-700 text-green-700 hover:bg-green-50">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose OneTribe?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-700 mb-4" />
                <CardTitle>100% Natural</CardTitle>
                <CardDescription>
                  No artificial ingredients, preservatives, or additives. Just pure, farm-fresh goodness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Sustainable Aquaponics</CardTitle>
                <CardDescription>
                  Grown using eco-friendly aquaponics systems that conserve water and eliminate chemical runoff.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Wellness Focused</CardTitle>
                <CardDescription>
                  Every product is crafted to support your health journey with nutrient-rich, healing ingredients.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From mobile juicing to wellness coaching, we bring health and vitality to your community
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Droplets className="h-10 w-10 text-green-700 mb-3" />
                <CardTitle>Mobile Market Juicing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fresh juice while you wait! Bring your own fruit or choose from our custom blends. 
                  $3-5 per cup, with seasonal specials.
                </p>
                <Button variant="outline" className="w-full">Book Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-blue-700 mb-3" />
                <CardTitle>Equipment Rental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rent our professional juicing equipment for your farm stand or event. 
                  $50-75/day plus deposit.
                </p>
                <Button variant="outline" className="w-full">Get Quote</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-purple-700 mb-3" />
                <CardTitle>Wellness Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personalized guidance on nutrition, holistic health, and incorporating natural remedies 
                  into your lifestyle.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover our signature offerings and curated wellness products
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                  <Leaf className="h-16 w-16 text-amber-700" />
                </div>
                <CardTitle className="text-lg">Sarsaparilla Tea</CardTitle>
                <CardDescription>Our signature herbal blend</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-700 mb-3">$12.99</p>
                <Button className="w-full bg-green-700 hover:bg-green-800">Add to Cart</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <Droplets className="h-16 w-16 text-orange-700" />
                </div>
                <CardTitle className="text-lg">Cold-Pressed Juice</CardTitle>
                <CardDescription>Seasonal fruit blends</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-700 mb-3">$5.99</p>
                <Button className="w-full bg-green-700 hover:bg-green-800">Add to Cart</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                  <Leaf className="h-16 w-16 text-green-700" />
                </div>
                <CardTitle className="text-lg">Herbal Wellness Kit</CardTitle>
                <CardDescription>Curated tea collection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-700 mb-3">$34.99</p>
                <Button className="w-full bg-green-700 hover:bg-green-800">Add to Cart</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-purple-700" />
                </div>
                <CardTitle className="text-lg">Affiliate Products</CardTitle>
                <CardDescription>Trusted wellness brands</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Curated selection</p>
                <Button variant="outline" className="w-full">Browse All</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Wellness?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join the OneTribe community and experience the difference that natural, 
            sustainably-grown products can make in your life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-green-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">OneTribe Pee Dee Aquaponics</h3>
            <p className="text-sm mb-4">
              Bringing natural wellness and sustainable agriculture to the Pee Dee region.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:Curtisheru@onetribe.io" className="hover:text-white">
                  Curtisheru@onetribe.io
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:8032015723" className="hover:text-white">
                  (803) 201-5723
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white">All Products</a></li>
              <li><a href="/products/teas" className="hover:text-white">Teas</a></li>
              <li><a href="/products/juices" className="hover:text-white">Juices</a></li>
              <li><a href="/products/affiliate" className="hover:text-white">Affiliate Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/juicing" className="hover:text-white">Mobile Juicing</a></li>
              <li><a href="/services/rental" className="hover:text-white">Equipment Rental</a></li>
              <li><a href="/services/coaching" className="hover:text-white">Wellness Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 OneTribe Pee Dee Aquaponics. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Made with love in the Pee Dee region | Social: @PeeDeeAquaponics
          </p>
        </div>
      </footer>
    </div>
  );
}

