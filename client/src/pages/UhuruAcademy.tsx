import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Leaf, Palette, Cpu, Calendar, Mail, MapPin, Users } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function UhuruAcademy() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xyzlygbr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Uhuru Academy Email Signup',
          email: email
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
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
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
            🎓 Coming 2026
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Uhuru Academy Low Country SC
          </h1>
          <p className="text-2xl mb-4 text-blue-100">
            Sankofa: Looking Back to Move Forward
          </p>
          <p className="text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
            Cultivating Freedom Through Culture, Agriculture, Fine Arts, and Technology
          </p>
          
          {/* Email Signup Form */}
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Join Our Community</CardTitle>
              <CardDescription className="text-blue-100 text-center">
                Be the first to know about our 2026 launch and summer camp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/90 text-gray-900"
                />
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 whitespace-nowrap">
                  {submitted ? "✓ Joined!" : "Join"}
                </Button>
              </form>
              <p className="text-xs text-blue-200 mt-2 text-center">
                🌟 First Summer Camp: Summer 2026
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Vision for Liberation Through Education
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Uhuru Academy Low Country SC (UALCSC), a visionary educational initiative 
              coming to Kingstree, South Carolina within the next 2-3 years. As a satellite campus 
              of our mother school in Hopkins, SC, UALCSC represents an educational renaissance 
              grounded in the Sankofa principle—retrieving what we've lost to advance confidently 
              into the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="/images/products/rhizome-harvest.jpg" 
                alt="Curtis Heru Boyd"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Founded by Curtis Heru Boyd
              </h3>
              <p className="text-gray-700 mb-4">
                Curtis Heru Boyd brings years of transformative educational experience to Uhuru Academy. 
                He has taught for several years across Williamsburg, Marion, Marlboro, and Richland counties 
                in South Carolina, as well as through edutainment groups like Book Beats and The Ethnomusicologist, 
                bringing life to education through music and griot tales. With specialized training in AI integration, 
                character development, and holistic wellness, Curtis has transformed the learning experiences 
                of thousands of students throughout his career.
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-600">
                "Education should liberate, not just inform. At Uhuru Academy, we're creating a 
                space where children connect with their cultural heritage while developing the 
                skills to transform their communities and the world."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Four Pillars of Learning
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A holistic educational framework that provides students with a comprehensive experience, 
              rooted in cultural heritage while equipped with skills to thrive in a rapidly evolving world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-10 w-10 text-purple-600" />
                  <CardTitle className="text-2xl">Culture</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Knowing Our Roots to Grow Our Future
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• African and diaspora history and contributions</li>
                  <li>• Indigenous knowledge systems and practices</li>
                  <li>• Cultural expression through language, ritual, and tradition</li>
                  <li>• Community values and collective responsibility</li>
                  <li>• Identity development and personal narrative</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="h-10 w-10 text-green-600" />
                  <CardTitle className="text-2xl">Agriculture</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Cultivating Sustainability and Self-Reliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sustainable farming practices and food sovereignty</li>
                  <li>• Seed saving and biodiversity preservation</li>
                  <li>• Nutritional science and wellness through natural foods</li>
                  <li>• Environmental stewardship and ecological principles</li>
                  <li>• Entrepreneurship through agricultural production</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="h-10 w-10 text-pink-600" />
                  <CardTitle className="text-2xl">Fine Arts</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Expressing Vision Through Creative Practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visual arts across multiple mediums and traditions</li>
                  <li>• Music, movement, and performance arts</li>
                  <li>• Digital and traditional storytelling</li>
                  <li>• Character creation and narrative development</li>
                  <li>• Cultural aesthetics and artistic traditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Cpu className="h-10 w-10 text-blue-600" />
                  <CardTitle className="text-2xl">Technology</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Harnessing Innovation with Conscious Purpose
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI tools for creative expression and problem-solving</li>
                  <li>• Digital literacy and ethical technology use</li>
                  <li>• Coding, robotics, and digital fabrication</li>
                  <li>• Appropriate technology for sustainable living</li>
                  <li>• Critical analysis of technological impacts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Future Home: 5 Acres in Kingstree, SC
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A living laboratory where education comes alive through integrated learning spaces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Learning Pavilions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible indoor/outdoor classrooms designed for integrated learning across all four pillars
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Agricultural Gardens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Student-maintained food forests, vegetable gardens, and experimental growing spaces
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Cultural Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Space for community gatherings, performances, and cultural celebrations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Technology Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Digital creation studio, maker space, and appropriate technology workshop
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 text-pink-600 mb-2" />
                <CardTitle>Art Studios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated spaces for visual arts, music, movement, and digital creation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Community Kitchen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Farm-to-table learning space for nutritional education and community meals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Path to Opening
            </h2>
            <p className="text-lg text-gray-700">
              Building a community before building walls
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="w-1 flex-1 bg-green-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2023-2024: Foundation</h3>
                <p className="text-gray-700">
                  Community interest meetings, pilot workshops, and educational philosophy development
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="w-1 flex-1 bg-blue-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2025: Community Building</h3>
                <p className="text-gray-700">
                  Parent-educator collaborative formation, curriculum development, and land planning
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-2xl">
                  🎓
                </div>
                <div className="w-1 flex-1 bg-amber-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2026: First Summer Camp!</h3>
                <p className="text-gray-700 font-semibold">
                  Our inaugural summer camp program launches, giving students their first taste of the Uhuru Academy experience
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                  2027
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2027-2028: Campus Launch</h3>
                <p className="text-gray-700">
                  Groundbreaking, facility construction, and inaugural class enrollment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of the Uhuru Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our community and help shape the future of liberatory education in the Low Country
          </p>
          
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Stay Connected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/90 text-gray-900"
                />
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-lg">
                  {submitted ? "✓ You're on the list!" : "Join Our Community"}
                </Button>
              </form>
              <div className="mt-4 text-sm text-blue-200">
                <p>📧 Get updates about:</p>
                <p>• Summer Camp 2026 registration</p>
                <p>• Campus development progress</p>
                <p>• Community events and workshops</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Curtis Heru Boyd
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn About Our Mother School
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

