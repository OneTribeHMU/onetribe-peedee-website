import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Heart, Sparkles, Download, Calendar, Phone, Mail } from "lucide-react";

export default function WellnessCoach() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-500 text-white text-lg px-6 py-2">
              <Heart className="inline h-5 w-5 mr-2" />
              Holistic Wellness Coaching
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Mind, Body & Spirit
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto mb-8">
              Personalized wellness coaching combining movement, mindfulness, and mobile healing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-lg px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </a>
              <a href="#pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  View Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wellness Coaching Sessions</h2>
            <p className="text-xl text-gray-600">
              Personalized one-on-one sessions tailored to your wellness goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Free Consultation */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-500">Free</Badge>
                <CardTitle className="text-2xl">15-Minute Consultation</CardTitle>
                <CardDescription>Get to know each other and discuss your wellness goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-purple-600 mb-4">$0</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Initial assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Goal setting discussion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Program recommendations</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Free Call
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 30-Minute Session */}
            <Card className="border-2 border-rose-400 shadow-lg transform scale-105">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-rose-500">Most Popular</Badge>
                <CardTitle className="text-2xl">30-Minute Session</CardTitle>
                <CardDescription>Focused coaching on specific wellness challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-rose-600 mb-4">$45</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Personalized guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Action plan development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Follow-up resources</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book 30-Min Session
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 60-Minute Session */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-500">Deep Dive</Badge>
                <CardTitle className="text-2xl">60-Minute Session</CardTitle>
                <CardDescription>Comprehensive wellness coaching and planning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-purple-600 mb-4">$85</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>In-depth assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customized wellness plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ongoing support materials</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book 60-Min Session
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Wellness - Amethyst Mat */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
              <Sparkles className="inline h-5 w-5 mr-2" />
              Limited Time Offer
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Mobile Wellness Service</h2>
            <p className="text-2xl text-purple-100 max-w-3xl mx-auto">
              Experience the healing power of Amethyst crystal therapy in the comfort of your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img 
                src="/wellness/amethyst-mat-promo.png" 
                alt="$25 Introductory Offer - 30-Minute Mobile Healing Session with Amethyst Mat"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-4xl font-bold mb-6">$25 Introductory Offer</h3>
              <p className="text-xl text-purple-100 mb-6">
                30-Minute Mobile Healing Session
              </p>
              <p className="text-lg text-purple-200 mb-8">
                Limited to the first 10 people! Experience deep relaxation and healing with our professional-grade 
                Amethyst crystal mat. I bring the wellness experience directly to you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">✓</span>
                  <span className="text-lg">Far infrared heat therapy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">✓</span>
                  <span className="text-lg">Amethyst crystal energy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">✓</span>
                  <span className="text-lg">Stress relief & deep relaxation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">✓</span>
                  <span className="text-lg">Mobile service - I come to you!</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-lg px-8">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book $25 Session
                  </Button>
                </a>
                <a href="/wellness/mobile-healing-guide.pdf" download>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                    <Download className="mr-2 h-5 w-5" />
                    Download Guide
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your free 15-minute consultation today and discover how personalized wellness coaching can transform your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="mailto:Curtisheru@onetribe.io">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                Curtisheru@onetribe.io
              </Button>
            </a>
            <a href="tel:+18032015723">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                (803) 201-5723
              </Button>
            </a>
          </div>

          <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-lg px-12">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

