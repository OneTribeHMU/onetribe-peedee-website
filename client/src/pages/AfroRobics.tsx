import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Music, Zap, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function AfroRobics() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    alert(`Thanks for your interest! We'll contact you at ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-teal-700 to-emerald-800 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-amber-500 text-white text-lg px-8 py-3 animate-bounce">
            <Music className="inline h-6 w-6 mr-2" />
            Home-Grown Movement
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            AfroRobics
          </h1>
          
          <p className="text-3xl md:text-4xl mb-8 font-light text-cyan-100">
            Movement Meditation Through Ancestral Rhythms
          </p>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto text-cyan-50 leading-relaxed">
            Reconnect with your body, spirit, and community through a dynamic fusion of 
            African dance, martial arts, and mindful movement. AfroRobics is more than exercise—
            it's a celebration of culture, wellness, and freedom.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-xl px-8 py-6">
                <Calendar className="mr-2 h-6 w-6" />
                Book a Class
              </Button>
            </a>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-xl px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* What is AfroRobics */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What is AfroRobics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary fitness experience that honors African heritage while building 
              strength, flexibility, and community connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-cyan-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-2xl">Mind-Body Unity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Combine rhythmic movement with breath work and meditation. Each session 
                  integrates physical conditioning with mental clarity and emotional release.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Music className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle className="text-2xl">Ancestral Rhythms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Move to the pulse of African drums, contemporary beats, and live percussion. 
                  Music isn't just background—it's the heartbeat of every session.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle className="text-2xl">Community Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Build connections with others on the same wellness journey. AfroRobics 
                  creates a supportive tribe where everyone moves together.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The AfroRobics Method</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-900">🥁 Warm-Up: Drum Circle</h4>
                <p className="text-gray-700 mb-4">
                  Begin with grounding exercises and rhythmic breathing synchronized to live drumming.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-900">💃 Movement Flow</h4>
                <p className="text-gray-700 mb-4">
                  Dynamic sequences blending African dance, capoeira, and martial arts forms.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-900">⚡ Power Conditioning</h4>
                <p className="text-gray-700 mb-4">
                  Strength training disguised as dance—build muscle while having fun.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-900">🧘 Cool-Down Meditation</h4>
                <p className="text-gray-700 mb-4">
                  End with guided meditation and stretching to integrate the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Transform Your Wellness
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-amber-500 mb-3" />
                <CardTitle>Physical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Cardiovascular endurance and stamina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Full-body strength and muscle tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Improved flexibility and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Weight management and metabolism boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Better posture and body awareness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-red-500 mb-3" />
                <CardTitle>Mental & Spiritual Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Stress reduction and emotional release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Enhanced mental clarity and focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Cultural connection and identity affirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Community belonging and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Joy, confidence, and self-expression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Schedule & Pricing */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Join a Class
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-cyan-300">
              <CardHeader>
                <Badge className="mb-3 bg-cyan-600">Drop-In</Badge>
                <CardTitle className="text-3xl">$15</CardTitle>
                <CardDescription>Per Class</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Single session access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>All levels welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>No commitment</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Book Drop-In
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-300 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <Badge className="mb-3 bg-teal-600">Monthly</Badge>
                <CardTitle className="text-3xl">$50</CardTitle>
                <CardDescription>Per Month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Unlimited classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Community events access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Save $10/month</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Start Membership
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-300">
              <CardHeader>
                <Badge className="mb-3 bg-emerald-600">Private</Badge>
                <CardTitle className="text-3xl">$75</CardTitle>
                <CardDescription>Per Session</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>One-on-one instruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Customized program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Wellness coaching included</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Book Private Session
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-cyan-100 to-teal-100 border-2 border-teal-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-teal-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Current Schedule
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Tuesdays & Thursdays:</strong> 6:00 PM - 7:00 PM<br/>
                    <strong>Saturdays:</strong> 10:00 AM - 11:30 AM (Extended Session)<br/>
                    <strong>Location:</strong> Kingstree Community Center, SC
                  </p>
                  <p className="text-sm text-gray-600">
                    Private sessions available by appointment. We also offer group classes 
                    for schools, community centers, and corporate wellness programs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet the Instructor */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Curtis Heru Boyd
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Creator of AfroRobics and founder of OneTribe Ama-Gi. Curtis brings over 15 years 
            of experience in martial arts, African dance, and holistic wellness. His mission is 
            to help people reconnect with their bodies, culture, and community through movement.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            "AfroRobics isn't just about getting fit—it's about remembering who you are and 
            celebrating that with every move. When we dance together, we heal together."
          </p>
          <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Schedule a Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-900 to-cyan-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join the AfroRobics Movement
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Get class updates, wellness tips, and exclusive community events
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60"
            />
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600">
              Join Now
            </Button>
          </form>

          <p className="text-sm text-cyan-200 mt-4">
            Contact: <a href="mailto:Curtisheru@onetribe.io" className="underline">Curtisheru@onetribe.io</a> | (803) 201-5723
          </p>
        </div>
      </section>
    </div>
  );
}

