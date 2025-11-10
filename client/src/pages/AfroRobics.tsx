import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Music, Zap, Users, Calendar, MapPin, Video, Coffee, Brain } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function AfroRobics() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xanaywak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'New AfroRobics Interest',
          email: email
        })
      });
      if (response.ok) {
        alert(`Thanks for your interest! We'll contact you at ${email}`);
        setEmail("");
      } else {
        alert('There was an error. Please try again or email us directly.');
      }
    } catch (error) {
      alert('There was an error. Please email us at Curtisheru@onetribe.io');
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-teal-700 to-emerald-800 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/logos/afrorobics-logo.png" 
              alt="AfroRobics Logo"
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Livestream Announcement */}
          <Badge className="mb-6 bg-red-600 text-white text-lg px-8 py-3 animate-pulse">
            <Video className="inline h-6 w-6 mr-2" />
            LIVE STREAMING STARTS THIS TUESDAY!
          </Badge>
          
          <p className="text-3xl md:text-4xl mb-8 font-light text-cyan-100">
            Movement Meditation Through Ancestral Rhythms
          </p>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto text-cyan-50 leading-relaxed">
            Reconnect with your body, spirit, and community through a dynamic fusion of 
            African dance, martial arts, and mindful movement. AfroRobics is more than exercise—
            it's a celebration of culture, wellness, and freedom.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-xl px-8 py-6">
                <Calendar className="mr-2 h-6 w-6" />
                Book a Class
              </Button>
            </a>
            <a href="https://discord.gg/8CTbKaNd" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-xl px-8 py-6">
                <svg className="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </Button>
            </a>
            <a href="https://www.instagram.com/afrorobics" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-8 py-6">
                <svg className="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @afrorobics
              </Button>
            </a>
          </div>

          {/* Tuesday Livestream Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-2xl font-bold mb-2">🎥 Every Tuesday Evening</p>
            <p className="text-lg text-cyan-100">
              Join us LIVE for movement meditation • 6:00-7:15 PM
            </p>
            <p className="text-sm text-cyan-200 mt-2">
              Get the Zoom link in our Discord community
            </p>
          </div>
        </div>
      </section>

      {/* Featured Membership Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-teal-200">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-teal-600 text-white text-lg px-6 py-2">
                FEATURED MEMBERSHIP
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                $40<span className="text-3xl text-gray-600">/month</span>
              </h2>
              <p className="text-2xl text-teal-700 font-semibold mb-2">
                Unlimited Access to Everything
              </p>
              <p className="text-gray-600">Save $20/month compared to drop-ins</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-teal-200 bg-teal-50">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-teal-600 mb-2" />
                  <CardTitle className="text-xl">Local Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Unlimited in-person classes at Williamsburg County Recreation Center</p>
                  <p className="text-sm text-teal-700 font-semibold mt-2">Tuesdays 6:00-7:15 PM</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <Video className="h-12 w-12 text-indigo-600 mb-2" />
                  <CardTitle className="text-xl">Live Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Join every Tuesday via Zoom from anywhere</p>
                  <p className="text-sm text-indigo-700 font-semibold mt-2">Starts This Week!</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <svg className="h-12 w-12 text-red-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <CardTitle className="text-xl">YouTube Archive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Access all recorded classes anytime, anywhere</p>
                  <p className="text-sm text-red-700 font-semibold mt-2">Members Only</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-xl px-12 py-6 mb-4">
                  Start Your Membership
                </Button>
              </a>
              <p className="text-gray-600">
                Contact: <a href="mailto:Curtisheru@onetribe.io" className="text-teal-600 hover:underline">Curtisheru@onetribe.io</a> | 
                <a href="tel:+18032015723" className="text-teal-600 hover:underline ml-2">(803) 201-5723</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is AfroRobics */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is AfroRobics?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary fitness experience that honors African heritage while building 
              strength, flexibility, and community connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="h-16 w-16 text-red-600 mb-4" />
                <CardTitle className="text-2xl">Mind-Body Unity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Combine rhythmic movement with breath work and meditation. Each session integrates 
                  physical conditioning with mental clarity and emotional release.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Music className="h-16 w-16 text-amber-600 mb-4" />
                <CardTitle className="text-2xl">Ancestral Rhythms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Move to the pulse of African drums, contemporary beats, and live percussion. 
                  Music isn't just background—it's the heartbeat of every session.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-teal-600 mb-4" />
                <CardTitle className="text-2xl">Community Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Build connections with others on the same wellness journey. AfroRobics creates 
                  a supportive tribe where everyone moves together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The AfroRobics Method */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">The AfroRobics Method</h2>
          
          <div className="space-y-6">
            {/* Tea Time */}
            <Card className="border-2 border-green-300 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Coffee className="h-12 w-12 text-green-700" />
                  <div>
                    <CardTitle className="text-2xl text-green-800">Tea Time</CardTitle>
                    <CardDescription className="text-base">Drink Freshly Harvested Herbal Tea by Brotha Curtis</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Begin your journey with wild-harvested Sarsaparilla rhizome tea. This grounding ritual 
                  offers time to connect with the community, chat, and often enjoy a mini concert featuring 
                  Curtis on the saxophone. The tea's natural benefits prepare your body and mind for movement.
                </p>
              </CardContent>
            </Card>

            {/* Guided Meditation */}
            <Card className="border-2 border-purple-300 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Brain className="h-12 w-12 text-purple-700" />
                  <div>
                    <CardTitle className="text-2xl text-purple-800">Guided Meditation</CardTitle>
                    <CardDescription className="text-base">8 Minutes of Centering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Transition from the social tea time into focused presence. Through guided visualization 
                  and breathwork, we center our energy, set intentions for the session, and create mental 
                  space for the movement ahead. This meditation bridges the outer world and inner awareness.
                </p>
              </CardContent>
            </Card>

            {/* Warm-Up */}
            <Card className="border-2 border-blue-300 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">🥁</span>
                  <div>
                    <CardTitle className="text-2xl text-blue-800">Warm-Up</CardTitle>
                    <CardDescription className="text-base">Grounding & Rhythmic Breathing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Begin with grounding exercises and rhythmic breathing synchronized with the group. 
                  The drum circle awakens your body's natural rhythm and prepares muscles for movement.
                </p>
              </CardContent>
            </Card>

            {/* Movement Flow */}
            <Card className="border-2 border-pink-300 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">💃</span>
                  <div>
                    <CardTitle className="text-2xl text-pink-800">Movement Flow</CardTitle>
                    <CardDescription className="text-base">Dynamic Sequences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Dynamic sequences blending African dance, capoeira, and martial arts forms. 
                  Flow through movements that honor ancestral traditions while building strength and flexibility.
                </p>
              </CardContent>
            </Card>

            {/* Power Conditioning */}
            <Card className="border-2 border-orange-300 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">⚡</span>
                  <div>
                    <CardTitle className="text-2xl text-orange-800">Power Conditioning</CardTitle>
                    <CardDescription className="text-base">Strength Training Disguised as Dance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Build muscle while having fun! This section combines resistance training with rhythmic 
                  movement, making strength work feel like celebration.
                </p>
              </CardContent>
            </Card>

            {/* Cool-Down */}
            <Card className="border-2 border-indigo-300 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">🧘</span>
                  <div>
                    <CardTitle className="text-2xl text-indigo-800">Cool-Down Meditation</CardTitle>
                    <CardDescription className="text-base">Integration & Stretching</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  End with guided meditation and stretching to integrate the experience. Honor the work 
                  you've done and carry the energy forward into your day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Transform Your Wellness</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <Zap className="h-16 w-16 text-green-600 mb-4" />
                <CardTitle className="text-3xl text-green-800">Physical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Cardiovascular endurance and stamina</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Full-body strength and muscle tone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Improved flexibility and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Weight management and metabolism boost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Better posture and body awareness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <Heart className="h-16 w-16 text-purple-600 mb-4" />
                <CardTitle className="text-3xl text-purple-800">Mental & Spiritual Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Stress reduction and emotional release</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Enhanced mental clarity and focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Cultural connection and identity affirmation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Community belonging and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Joy, confidence, and self-expression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Join a Class</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Drop-In In-Person */}
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Drop-In (In-Person)</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $10
                  <span className="text-xl text-gray-600 font-normal">/class</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Single session access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>All levels welcome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No commitment</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" variant="outline">Book Drop-In</Button>
                </a>
              </CardContent>
            </Card>

            {/* Drop-In Online */}
            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Drop-In (Online)</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $15
                  <span className="text-xl text-gray-600 font-normal">/class</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Single Zoom session</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Join from anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>No commitment</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Book Online Class</Button>
                </a>
              </CardContent>
            </Card>

            {/* Monthly - Most Popular */}
            <Card className="border-4 border-teal-400 hover:shadow-2xl transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1">
                BEST VALUE
              </Badge>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl">Monthly</CardTitle>
                <div className="text-4xl font-bold text-teal-700 mt-4">
                  $40
                  <span className="text-xl text-gray-600 font-normal">/month</span>
                </div>
                <p className="text-sm text-teal-700 font-semibold">Save $20/month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Unlimited local classes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Live Zoom streaming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>YouTube archive access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Community events</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Start Membership</Button>
                </a>
              </CardContent>
            </Card>

            {/* Private Session */}
            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow md:col-start-2">
              <CardHeader>
                <CardTitle className="text-2xl">Private</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $65
                  <span className="text-xl text-gray-600 font-normal">/session</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>One-on-one instruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Customized program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Wellness coaching included</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Private Session</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Current Schedule</h3>
          
          <Card className="border-2 border-teal-200 bg-teal-50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">Tuesdays: 6:00 PM - 7:15 PM</p>
                    <Badge className="mt-2 bg-red-600 text-white">LIVE STREAMING</Badge>
                    <Badge className="mt-2 ml-2 bg-teal-600 text-white">IN-PERSON</Badge>
                    <p className="text-gray-700 mt-2">Extended session upon bookings</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-teal-200">
                  <MapPin className="h-8 w-8 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold text-gray-900">Williamsburg County Recreation Center</p>
                    <p className="text-gray-700">Kingstree, SC</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-gray-700 text-center">
                  Private sessions available by appointment. We also offer group classes for schools, 
                  community centers, and corporate wellness programs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet Curtis Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Curtis Heru Boyd</h2>
          
          <Card className="border-2 border-amber-200">
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Creator of AfroRobics and founder of OneTribe Ama-Gi. Curtis brings over 15 years of 
                experience in martial arts, African dance, and holistic wellness. His mission is to help 
                people reconnect with their bodies, culture, and community through movement.
              </p>
              
              <blockquote className="border-l-4 border-amber-500 pl-6 py-4 mb-6 bg-white rounded-r-lg">
                <p className="text-xl italic text-gray-800">
                  "AfroRobics isn't just about getting fit—it's about remembering who you are and 
                  celebrating that with every move. When we dance together, we heal together."
                </p>
                <footer className="text-gray-600 mt-2">— Curtis Heru Boyd</footer>
              </blockquote>

              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Session
                  </Button>
                </a>
                <a href="mailto:Curtisheru@onetribe.io">
                  <Button size="lg" variant="outline">
                    Contact Curtis
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Join the AfroRobics Movement</h2>
          <p className="text-2xl mb-12 text-cyan-100">
            Transform your body, reconnect with your culture, and build lasting community
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 text-xl px-12 py-6">
                <Calendar className="mr-2 h-6 w-6" />
                Start Your Journey
              </Button>
            </a>
            <a href="https://discord.gg/8CTbKaNd" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-xl px-12 py-6">
                <svg className="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </Button>
            </a>
          </div>

          <div className="mt-12 text-cyan-100">
            <p className="text-lg">
              Contact: <a href="mailto:Curtisheru@onetribe.io" className="underline hover:text-white">Curtisheru@onetribe.io</a> | 
              <a href="tel:+18032015723" className="underline hover:text-white ml-2">(803) 201-5723</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

