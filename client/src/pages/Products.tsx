import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Leaf, ShoppingCart, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

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
              {/* Featured Product - Sarsaparilla */}
              <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-amber-600">Featured Product</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Wild-Harvested Sarsaparilla Rhizome Tea
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Experience the timeless charm of our Sarsaparilla Fresh Brew Tea, made from 
                      <strong> 100% wild-harvested Sarsaparilla rhizome</strong> - not root! This unique 
                      approach preserves the most potent nutrients and healing properties.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Key Benefits:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Detox & Purify:</strong> Supports liver health and body cleansing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Energize & Revitalize:</strong> Boost your energy levels naturally</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Balance & Nourish:</strong> Support hormonal balance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Digestive Harmony:</strong> Aid digestion and gut health</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Rich in Nutrients:</h3>
                        <p className="text-sm text-gray-600">
                          <strong>Vitamins:</strong> A, C, D, E, K, and B-complex (B1, B2, B3, B5, B6, B7, B9, B12)
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Minerals:</strong> Iron, zinc, selenium, manganese, copper, iodine, 
                          molybdenum, cobalt, chromium, and fluorine
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Organs Benefited:</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                          <div>• Liver (detoxification)</div>
                          <div>• Kidneys (toxin elimination)</div>
                          <div>• Skin (clarity & health)</div>
                          <div>• Joints (anti-inflammatory)</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center">
                      <div>
                        <p className="text-3xl font-bold text-green-700">$12.99</p>
                        <p className="text-sm text-gray-600">Per package</p>
                      </div>
                      <Link href="/contact">
                        <Button size="lg" className="bg-green-700 hover:bg-green-800 w-full">
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Order Now
                        </Button>
                      </Link>
                      <a href="mailto:Curtisheru@onetribe.io" className="text-sm text-green-700 hover:underline text-center block">
                        Bulk orders? Contact us
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="/images/products/sarsaparilla-package-hero.jpg" 
                      alt="Curtis holding Sarsaparilla Tea package"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                    <img 
                      src="/images/products/sarsaparilla-label.jpg" 
                      alt="Sarsaparilla Tea package with full label"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                    <img 
                      src="/images/products/sarsaparilla-chips.jpg" 
                      alt="Sarsaparilla rhizome chips"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                    <img 
                      src="/images/products/sarsaparilla-display.jpg" 
                      alt="Sarsaparilla tea display with kettle"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Brewing Instructions */}
                <div className="mt-8 pt-8 border-t border-amber-300">
                  <h3 className="font-bold text-gray-900 mb-4">Brewing Instructions:</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-700 mb-2">1. Measure</div>
                      <p className="text-gray-600">Use 2-3 chip-size pieces per cup of water</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-700 mb-2">2. Boil & Add</div>
                      <p className="text-gray-600">Bring water to boil, add rhizome chips</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-700 mb-2">3. Simmer</div>
                      <p className="text-gray-600">Reduce heat, simmer 10-15 minutes</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-bold text-green-700 mb-2">4. Strain & Enjoy</div>
                      <p className="text-gray-600">Pour through strainer, savor the wellness</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Storage:</strong> Keep in cool, dry place. Use within 6 months for peak freshness.
                  </p>
                </div>

                {/* Harvest Story */}
                <div className="mt-8 pt-8 border-t border-amber-300">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className="font-bold text-gray-900 mb-3">Sustainably Foraged, Naturally Potent</h3>
                      <p className="text-gray-700 mb-3">
                        Our Sarsaparilla is wild-harvested by hand from the pristine forests of the Pee Dee region. 
                        We use the <strong>rhizome</strong> - the underground stem that stores the plant's most 
                        concentrated nutrients - making our tea uniquely powerful compared to root-based alternatives.
                      </p>
                      <p className="text-gray-700">
                        Each harvest is done with respect for the ecosystem, ensuring the plant can regenerate 
                        and continue thriving for future generations.
                      </p>
                    </div>
                    <img 
                      src="/images/products/rhizome-harvest.jpg" 
                      alt="Fresh Sarsaparilla rhizome harvest"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Other Tea Products */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <Leaf className="h-20 w-20 text-green-700" />
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
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <Leaf className="h-20 w-20 text-purple-700" />
                    </div>
                    <CardTitle>Custom Tea Blends</CardTitle>
                    <CardDescription>Personalized herbal combinations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Work with us to create a custom tea blend tailored to your wellness goals.
                    </p>
                    <p className="text-xl font-bold text-green-700 mb-3">Contact for pricing</p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-green-700 text-green-700">
                        <Mail className="mr-2 h-4 w-4" />
                        Inquire
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <Badge className="mb-2 bg-amber-600 w-fit">Wholesale Available</Badge>
                    <CardTitle>Bulk Orders</CardTitle>
                    <CardDescription>For retailers & wellness centers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Interested in carrying our Sarsaparilla tea in your store? We offer wholesale pricing.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-green-700 text-green-700">
                        <Mail className="mr-2 h-4 w-4" />
                        Get Wholesale Info
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Juices Tab */}
            <TabsContent value="juices">
              {/* Juicer Equipment Showcase */}
              <div className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Professional Cold-Press Juicing
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      We use the PURE Juicer - a commercial-grade cold-press system that preserves 
                      maximum nutrients, enzymes, and flavor. No heat, no oxidation, just pure liquid wellness.
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Retains 95%+ of vitamins and minerals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>No added sugar, water, or preservatives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Fresh juice made while you wait</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Bring your own fruit or choose our blends</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="/images/products/pure-juicer-1.jpg" 
                      alt="PURE Juicer cold-press system"
                      className="rounded-lg shadow-lg w-full h-64 object-cover col-span-2"
                    />
                    <img 
                      src="/images/products/pure-juicer-2.jpg" 
                      alt="PURE Juicer with fresh juice"
                      className="rounded-lg shadow-lg w-full h-48 object-cover col-span-2"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Seasonal Rotation Schedule</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-blue-800">🍂 Fall</p>
                    <p className="text-gray-700">Apple & Pear Blends</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">❄️ Winter</p>
                    <p className="text-gray-700">Citrus Varieties</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">🌸 Spring</p>
                    <p className="text-gray-700">Vegetable Juices</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">☀️ Summer</p>
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
                    <Link href="/contact">
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Order Now
                      </Button>
                    </Link>
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
                    <Link href="/contact">
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Order Now
                      </Button>
                    </Link>
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
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-green-700 text-green-700">
                        Learn More
                      </Button>
                    </Link>
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
                  that align with our natural health philosophy. Products marked with our recommendation have been 
                  personally tested and approved.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="mb-2 bg-purple-600 w-fit">10+ Years Partnership</Badge>
                    <div className="aspect-square bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl">⚡</span>
                    </div>
                    <CardTitle>Secret Energy Products</CardTitle>
                    <CardDescription>Premium energy and wellness supplements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore our curated selection of natural energy boosters and wellness supplements from our 
                      trusted decade-long partner.
                    </p>
                    <Link href="/affiliate-products">
                      <Button className="w-full bg-purple-700 hover:bg-purple-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Collection
                      </Button>
                    </Link>
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
                      High-quality herbal supplements from trusted manufacturers, carefully selected for purity and potency.
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
                      Yoga mats, essential oil diffusers, and more wellness essentials to support your holistic lifestyle.
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

      {/* Contact CTA */}
      <section className="py-12 px-6 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Products?</h2>
          <p className="text-xl mb-6 text-green-100">
            We're here to help you find the perfect wellness solution
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:Curtisheru@onetribe.io">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
            <a href="tel:8032015723">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600">
                <Phone className="mr-2 h-5 w-5" />
                Call (803) 201-5723
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">OneTribe Ama-Gi</h3>
            <p className="text-sm mb-4">
              Bringing natural wellness and sustainable agriculture to the community.
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
              <li><a href="/products#teas" className="hover:text-white">Sarsaparilla Tea</a></li>
              <li><a href="/products#juices" className="hover:text-white">Fresh Juices</a></li>
              <li><a href="/products#affiliate" className="hover:text-white">Affiliate Products</a></li>
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
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 OneTribe Ama-Gi. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Made with love | Pee Dee Aquaponics products available
          </p>
        </div>
      </footer>
    </div>
  );
}

