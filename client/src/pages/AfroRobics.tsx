import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Music, Zap, Users, Calendar, MapPin, Video, Youtube } from "lucide-react";
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
          </div>

          {/* Tuesday Livestream Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-2xl font-bold mb-2">🎥 Every Tuesday Evening</p>
            <p className="text-lg text-cyan-100">
              Join us LIVE for movement meditation • First stream starts in 2 days!
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
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-teal-200 bg-teal-50">
                <CardHeader className="text-center">
                  <MapPin className="h-10 w-10 text-teal-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Local Classes</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-sm">
                    Unlimited in-person classes in Kingstree, SC
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Tues/Thurs 6-7 PM<br/>Sat 10-11:30 AM
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardHeader className="text-center">
                  <Video className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Live Streaming</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-sm">
                    Join live every Tuesday evening via Zoom
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Interactive • Real-time<br/>Community connection
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader className="text-center">
                  <Youtube className="h-10 w-10 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">YouTube Archive</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 text-sm">
                    Access all recorded classes anytime
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Practice on your schedule<br/>Full library access
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-xl py-6">
                  <Calendar className="mr-2 h-6 w-6" />
                  Start Your Membership
                </Button>
              </a>
              <p className="text-center text-gray-600">
                Or contact us: <a href="mailto:Curtisheru@onetribe.io" className="text-teal-600 hover:underline font-semibold">Curtisheru@onetribe.io</a> | <a href="tel:+18032015723" className="text-teal-600 hover:underline font-semibold">(803) 201-5723</a>
              </p>
            </div>
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
                  Experience the energy of collective movement. AfroRobics builds bonds, 
                  celebrates diversity, and creates a supportive wellness tribe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The AfroRobics Method */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The AfroRobics Method
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-cyan-600">Step 1</Badge>
                <CardTitle className="text-2xl">Warm-Up & Intention Setting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Begin with gentle stretches and breathing exercises. Set your intention 
                  for the session and connect with the group energy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-teal-600">Step 2</Badge>
                <CardTitle className="text-2xl">Rhythmic Cardio Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Engage in high-energy dance sequences inspired by African movements. 
                  Build cardiovascular endurance while celebrating cultural expression.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-emerald-600">Step 3</Badge>
                <CardTitle className="text-2xl">Strength & Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Incorporate martial arts-inspired movements and bodyweight exercises. 
                  Develop functional strength, balance, and flexibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-amber-600">Step 4</Badge>
                <CardTitle className="text-2xl">Cool-Down & Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Close with guided meditation and gentle stretching. Reflect on your 
                  practice and carry the energy into your day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Transform Your Wellness
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Physical Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Improved cardiovascular health and endurance",
                  "Increased strength, flexibility, and coordination",
                  "Better posture and body awareness",
                  "Weight management and toning",
                  "Enhanced energy levels throughout the day"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">Mental & Spiritual Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduced stress and anxiety",
                  "Improved mental clarity and focus",
                  "Deeper connection to cultural heritage",
                  "Enhanced self-confidence and body positivity",
                  "Sense of community and belonging"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're ready to commit or want to try a single class, we have options for everyone
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Drop-In</CardTitle>
                <p className="text-4xl font-bold text-gray-900">$15</p>
                <p className="text-gray-600">per class</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Single class access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">No commitment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Try before you buy</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">Book Drop-In</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-4 border-teal-600 shadow-2xl relative">
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-6 py-2">
                BEST VALUE
              </Badge>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">Monthly Membership</CardTitle>
                <p className="text-5xl font-bold text-teal-700">$40</p>
                <p className="text-gray-600">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 font-semibold">Unlimited local classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 font-semibold">Live streaming access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 font-semibold">YouTube archive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 font-semibold">Discord community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700 font-semibold">Priority booking</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">
                    Start Membership
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Private Session</CardTitle>
                <p className="text-4xl font-bold text-gray-900">$75</p>
                <p className="text-gray-600">per session</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">One-on-one instruction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Personalized program</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Flexible scheduling</span>
                  </li>
                </ul>
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">Schedule Private</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Class Schedule
          </h2>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-teal-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Tuesday Evening</CardTitle>
                    <CardDescription className="text-base">6:00 PM - 7:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-red-600 text-white">LIVE STREAMING</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  In-person: Kingstree, SC
                </p>
                <p className="text-gray-700">
                  <Video className="inline h-4 w-4 mr-1" />
                  Online: Zoom link in Discord
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Thursday Evening</CardTitle>
                    <CardDescription className="text-base">6:00 PM - 7:00 PM</CardDescription>
                  </div>
                  <Badge className="bg-teal-600 text-white">LOCAL ONLY</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  In-person: Kingstree, SC
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Saturday Morning</CardTitle>
                    <CardDescription className="text-base">10:00 AM - 11:30 AM</CardDescription>
                  </div>
                  <Badge className="bg-amber-600 text-white">EXTENDED SESSION</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  In-person: Kingstree, SC
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Curtis */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Meet Your Instructor
          </h2>
          
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Curtis Heru Boyd</h3>
              <p className="text-teal-700 font-semibold mb-4">Founder & Lead Instructor</p>
              
              <p className="text-gray-700 mb-4">
                Curtis Heru Boyd created AfroRobics as a home-grown movement to reconnect people 
                with their bodies, heritage, and community. With a background in wellness coaching, 
                sustainable agriculture, and community education, Curtis brings a holistic approach 
                to fitness that honors tradition while embracing modern wellness practices.
              </p>
              
              <p className="text-gray-700 mb-6">
                As the founder of OneTribe Ama-Gi, Pee Dee Aquaponics, and Uhuru Academy, Curtis 
                is dedicated to creating spaces where people can achieve freedom through natural 
                wellness, movement, and education.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Session
                  </Button>
                </a>
                <a href="mailto:Curtisheru@onetribe.io">
                  <Button variant="outline">
                    Contact Curtis
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 via-cyan-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="text-xl mb-8">
            Experience the power of ancestral rhythms and community wellness. 
            Your first class starts with a simple conversation.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-xl px-8 py-6">
                <Calendar className="mr-2 h-6 w-6" />
                Start Your Journey
              </Button>
            </a>
            <a href="https://discord.gg/8CTbKaNd" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-xl px-8 py-6">
                <svg className="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </Button>
            </a>
          </div>

          <p className="text-cyan-100">
            Questions? Contact us: <a href="mailto:Curtisheru@onetribe.io" className="text-white hover:underline font-semibold">Curtisheru@onetribe.io</a> | <a href="tel:+18032015723" className="text-white hover:underline font-semibold">(803) 201-5723</a>
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 px-6 bg-white text-center">
        <Link href="/">
          <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50">
            ← Back to OneTribe Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

