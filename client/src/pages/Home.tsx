import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AffiliateWidget from "@/components/AffiliateWidget";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Droplets, Leaf, Mail, Phone, ShoppingBag, Sparkles, Store, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="w-full border-b px-6 py-4 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/onetribe-amagi-logo.png"
              className="h-12 w-12 object-contain"
              alt="OneTribe Ama-Gi Logo"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-amber-700">OneTribe</span>
              <span className="text-xs text-gray-600 -mt-1">AMA-GI</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-green-700 font-medium">Home</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-700 hover:text-green-700 font-medium">Products</a>
            </Link>
            <Link href="/affiliate-products">
              <a className="text-gray-700 hover:text-purple-700 font-medium">Wellness Partners</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-700 hover:text-green-700 font-medium">Services</a>
            </Link>
            <Link href="/uhuru-academy">
              <a className="text-gray-700 hover:text-green-700 font-medium">Uhuru Academy</a>
            </Link>
            <Link href="/afrorobics">
              <a className="text-gray-700 hover:text-green-700 font-medium">AfroRobics</a>
            </Link>
            <Link href="/faq">
              <a className="text-gray-700 hover:text-green-700 font-medium">FAQ</a>
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
      <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-600 text-white text-sm px-4 py-1">
            Natural Wellness Marketplace
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to OneTribe
            <br />
            <span className="text-amber-700">Ama-Gi: Return to Freedom</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover curated wellness products from trusted brands committed to natural health, 
            sustainability, and holistic living. From farm-fresh teas to cold-pressed juices and beyond.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Products
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-amber-600 text-amber-700 hover:bg-amber-50">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Uhuru Academy 2026 Announcement */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2 animate-pulse">
            🎓 COMING 2026
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Uhuru Academy Low Country SC
          </h2>
          <p className="text-2xl mb-3 text-blue-100">
            Sankofa: Looking Back to Move Forward
          </p>
          <p className="text-lg mb-6 text-blue-200 max-w-2xl mx-auto">
            A revolutionary community school cultivating freedom through Culture, Agriculture, 
            Fine Arts, and Technology. First Summer Camp launches Summer 2026!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/uhuru-academy">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-lg px-8">
                Learn More & Join Our Community
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-300">
            📍 5-Acre Campus in Kingstree, SC | Founded by Curtis Heru Boyd
          </p>
        </div>
      </section>

      {/* Affiliate Products Widget */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Trusted Wellness Partners
            </h2>
            <p className="text-gray-600">
              10+ Years with Secret Energy • Products We Use Daily
            </p>
          </div>
          <AffiliateWidget featured={true} autoRotate={true} rotationInterval={6000} />
          <div className="text-center mt-6">
            <Link href="/affiliate-products">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View All Partner Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Brand Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-600 text-white">Flagship Brand</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pee Dee Aquaponics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our signature brand bringing you wild-harvested Sarsaparilla rhizome tea, 
              cold-pressed juices, and sustainably-grown wellness products from the Pee Dee region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="flex justify-center">
              <img 
                src="/images/brands/peedee-aquaponics-logo.png" 
                alt="Pee Dee Aquaponics Logo"
                className="w-80 h-80 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sustainably Grown, Naturally Potent
              </h3>
              <p className="text-gray-700 mb-4">
                Pee Dee Aquaponics represents our commitment to sustainable agriculture and natural wellness. 
                Using eco-friendly aquaponics systems, we grow nutrient-rich produce while conserving water 
                and eliminating chemical runoff.
              </p>
              <p className="text-gray-700 mb-6">
                Our signature product - wild-harvested Sarsaparilla rhizome tea - showcases our dedication 
                to preserving traditional herbal wisdom while applying modern sustainability practices.
              </p>
              <Link href="/products">
                <Button className="bg-green-700 hover:bg-green-800">
                  Explore Pee Dee Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Products from Pee Dee Aquaponics */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/images/products/sarsaparilla-package-hero.jpg" 
                  alt="Sarsaparilla Tea"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg">Sarsaparilla Rhizome Tea</CardTitle>
                <CardDescription>Wild-harvested, 100% natural</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-700 mb-3">$12.99</p>
                <Button className="w-full bg-green-700 hover:bg-green-800">View Product</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/images/products/pure-juicer-2.jpg" 
                  alt="Cold-Pressed Juices"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg">Cold-Pressed Juices</CardTitle>
                <CardDescription>Seasonal fruit blends</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-700 mb-3">$5.99</p>
                <Button className="w-full bg-green-700 hover:bg-green-800">View Product</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/images/products/rhizome-harvest.jpg" 
                  alt="Fresh Harvest"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg">Custom Blends</CardTitle>
                <CardDescription>Personalized wellness teas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-green-700 mb-3">Contact for pricing</p>
                <Button variant="outline" className="w-full border-green-700 text-green-700">Inquire</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OneTribe Values Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            The OneTribe Promise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every brand in our marketplace shares our commitment to quality, sustainability, and holistic wellness
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-700 mb-4" />
                <CardTitle>100% Natural</CardTitle>
                <CardDescription>
                  No artificial ingredients, preservatives, or additives. Just pure, farm-fresh goodness from trusted sources.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Sustainable Practices</CardTitle>
                <CardDescription>
                  All our brands prioritize eco-friendly methods, from aquaponics to organic farming and ethical sourcing.
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Beyond products, we bring wellness directly to your community
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
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">Book Now</Button>
                </a>
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
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">Get Quote</Button>
                </a>
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
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">Schedule Consultation</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Brands Teaser */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <Store className="h-16 w-16 text-purple-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Brands Coming Soon
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            OneTribe is growing! We're partnering with carefully selected wellness brands that share 
            our values of sustainability, natural ingredients, and holistic health. Stay tuned for 
            new products and services from trusted partners.
          </p>
          <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
            <Mail className="mr-2 h-5 w-5" />
            Join Our Newsletter
          </Button>
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
            <h3 className="text-white font-bold text-lg mb-4">OneTribe</h3>
            <p className="text-sm mb-4">
              A curated wellness marketplace featuring natural products from trusted brands committed to your health and the planet.
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
            <h4 className="text-white font-semibold mb-4">Shop Brands</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white">Pee Dee Aquaponics</a></li>
              <li><a href="/products#affiliate" className="hover:text-white">Partner Brands</a></li>
              <li className="text-gray-500">More brands coming soon</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-white">Mobile Juicing</a></li>
              <li><a href="/services" className="hover:text-white">Equipment Rental</a></li>
              <li><a href="/services" className="hover:text-white">Wellness Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/about" className="hover:text-white">About OneTribe</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 OneTribe. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Featuring Pee Dee Aquaponics and trusted wellness partners | Social: @OneTribe @PeeDeeAquaponics
          </p>
        </div>
      </footer>
    </div>
  );
}

