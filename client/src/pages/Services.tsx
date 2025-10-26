import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Leaf, Mail, Phone, ShoppingCart, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Services() {
  // Load Stripe script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="w-full border-b border-b-px-6 py-4 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img
                src="/app_logo.png"
                className="h-10 w-10 rounded-lg border-border bg-background object-cover"
                alt="OneTribe Logo"
              />
              <span className="text-2xl font-bold text-green-800">OneTribe</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-green-700 font-medium">Home</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-700 hover:text-green-700 font-medium">Products</a>
            </Link>
            <Link href="/services">
              <a className="text-green-700 font-bold">Services</a>
            </Link>
            <Link href="/faq">
              <a className="text-gray-700 hover:text-green-700 font-medium">FAQ</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Mobile Healing Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mobile Healing & Rejuvenation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional amethyst crystal therapy and vibrational healing brought directly to your home in Kingstree, SC
            </p>
          </div>
        </div>
      </section>

      {/* Featured Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-400 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Image */}
              <div className="relative">
                <img
                  src="/healing_session_product_thumbnail.png"
                  alt="$25 Introductory Healing Session"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transform rotate-12">
                  LIMITED OFFER!
                </div>
              </div>

              {/* Right: Details & Buy Button */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Introductory Mobile Healing Session
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  30-minute amethyst crystal therapy & vibrational healing in the comfort of your own home
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-bold text-green-600">$25</span>
                  <span className="text-2xl text-gray-400 line-through">$125</span>
                  <Badge className="bg-red-500 text-white">80% OFF</Badge>
                </div>

                <div className="bg-white rounded-lg p-4 mb-6 border-2 border-purple-200">
                  <p className="text-sm font-semibold text-purple-800 mb-2">
                    ⚡ FIRST 10 PEOPLE ONLY
                  </p>
                  <p className="text-sm text-gray-600">
                    This special introductory price is limited to the first 10 bookings. Don't miss out on this incredible opportunity to experience professional healing at an unbeatable price!
                  </p>
                </div>

                {/* Stripe Buy Button */}
                <div className="mb-6">
                  <script async src="https://js.stripe.com/v3/buy-button.js"></script>
                  <stripe-buy-button
                    buy-button-id="buy_btn_1SMALwBrqNYezDWLpVUSggHF"
                    publishable-key="pk_live_9n7ZHK9ktniMQT6Z3b5sckbr"
                  ></stripe-buy-button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  🔒 Secure payment powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What's Included in Your 30-Minute Session
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personal Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We discuss your wellness goals and set intentions for your healing journey
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Amethyst Mat Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  27-lb Ereada Amethyst Mat with far infrared rays, negative ions, PEMF, and red light therapy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vibrational Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Customized sound healing with tuning forks, bowls, and binaural tones
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Integration Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Guidance on integrating the healing into your daily life
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Healing Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Physical Healing */}
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800">Physical Healing</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Arthritis & joint pain relief</li>
                  <li>✓ Improved circulation</li>
                  <li>✓ Reduced inflammation</li>
                  <li>✓ Muscle tension release</li>
                  <li>✓ Enhanced immune function</li>
                  <li>✓ Faster injury recovery</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mental & Emotional */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-800">Mental & Emotional</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Deep stress relief</li>
                  <li>✓ Improved sleep quality</li>
                  <li>✓ Enhanced mental clarity</li>
                  <li>✓ Balanced mood</li>
                  <li>✓ Reduced anxiety</li>
                  <li>✓ Increased focus</li>
                </ul>
              </CardContent>
            </Card>

            {/* Energy & Spirit */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-xl text-purple-800">Energy & Spirit</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Sustained natural energy</li>
                  <li>✓ Deep grounding connection</li>
                  <li>✓ Enhanced intuition</li>
                  <li>✓ Spiritual alignment</li>
                  <li>✓ Chakra balancing</li>
                  <li>✓ Cellular rejuvenation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Area */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <CardTitle>Service Area</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  <strong>Kingstree, SC and surrounding communities</strong>
                </p>
                <p className="text-sm text-gray-600">
                  20-mile radius included. Additional travel fees may apply for locations beyond 20 miles.
                </p>
              </CardContent>
            </Card>

            {/* Available Times */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <CardTitle>Available Times</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">Weekday Evenings:</p>
                    <p className="text-gray-600">5:30-7:00 PM, 7:30-9:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Weekends:</p>
                    <p className="text-gray-600">9:00 AM-10:30 AM, 11:00 AM-12:30 PM, 2:00-3:30 PM, 4:00-5:30 PM, 6:00-7:30 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "At 84 years old with arthritis, I was skeptical. After one session with Brotha Curtis, I felt more relief and openness than I've experienced in years. The convenience of healing in my own home made all the difference."
                </p>
                <p className="font-semibold text-blue-800">— Elder Family Member</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic mb-4">
                  "The combination of the amethyst mat and Curtis's vibrational therapy created an experience I've never had before. I sleep better, have more energy, and feel truly grounded for the first time in my life."
                </p>
                <p className="font-semibold text-purple-800">— Wellness Client</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Service Packages Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Continue Your Healing Journey
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Love your introductory session? Explore our full service packages
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Foundation Session</CardTitle>
                <CardDescription>90 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600 mb-2">$125</p>
                <p className="text-sm text-gray-600">Perfect for first-timers & general wellness</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sovereign Path Session</CardTitle>
                <CardDescription>2 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600 mb-2">$175</p>
                <p className="text-sm text-gray-600">Deep healing & spiritual alignment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Family Healing Circle</CardTitle>
                <CardDescription>2.5 hours (2-4 people)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">$275</p>
                <p className="text-sm text-gray-600">Couples, families, elders</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-400">
              <CardHeader>
                <Badge className="mb-2 bg-green-500">Best Value</Badge>
                <CardTitle className="text-lg">Weekly Transformation</CardTitle>
                <CardDescription>4 sessions/month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600 mb-2">$450</p>
                <p className="text-sm text-gray-600">10% savings + priority booking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your $25 introductory session today - Limited to first 10 people!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:Curtisheru@onetribe.io" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <Mail className="w-5 h-5" />
              Curtisheru@onetribe.io
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">OneTribe</h3>
              <p className="text-gray-400 text-sm">
                Mobile Healing & Rejuvenation
              </p>
              <p className="text-gray-400 text-sm italic mt-2">
                "Ancient Wisdom • Modern Technology • Sovereign Transformation"
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/"><a className="text-gray-400 hover:text-white">Home</a></Link></li>
                <li><Link href="/products"><a className="text-gray-400 hover:text-white">Products</a></Link></li>
                <li><Link href="/services"><a className="text-gray-400 hover:text-white">Services</a></Link></li>
                <li><Link href="/faq"><a className="text-gray-400 hover:text-white">FAQ</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-400 text-sm mb-2">
                Email: Curtisheru@onetribe.io
              </p>
              <p className="text-gray-400 text-sm">
                Service Area: Kingstree, SC
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 OneTribe. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Individual results may vary. Services are not a substitute for medical care. Consult your healthcare provider for medical concerns.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

