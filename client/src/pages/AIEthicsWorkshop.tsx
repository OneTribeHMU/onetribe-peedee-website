import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Shield, Users, BookOpen, Calendar, CheckCircle, School, Sparkles, Download } from "lucide-react";

export default function AIEthicsWorkshop() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
              <Shield className="inline h-5 w-5 mr-2" />
              AI Ethics Workshop
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI as a Tool, Not a Cheat Code
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Empower your students and educators with responsible AI use through engaging, age-appropriate workshops
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#booking">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-xl px-8 py-6">
                  <Calendar className="mr-2 h-6 w-6" />
                  Book a Workshop
                </Button>
              </a>
              <a href="#templates">
                <Button size="lg" variant="outline" className="text-xl px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="mr-2 h-6 w-6" />
                  Free Prompt Templates
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Challenge Every School Faces</h2>
            <p className="text-xl text-gray-700">
              AI tools are everywhere, but are students using them responsibly?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">❌ Academic Dishonesty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Students using ChatGPT to write entire essays without understanding the material</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">❌ Lack of Critical Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Over-reliance on AI preventing development of problem-solving skills</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">❌ Teacher Uncertainty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Educators unsure how to integrate AI ethically into their classrooms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Solution: AI Ethics Workshop</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A hands-on workshop that teaches students and educators how to use AI as a learning tool, not a replacement for thinking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-300">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <p>Learn the difference between AI assistance and AI dependency</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <p>Practice ethical prompt engineering for homework help</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <p>Understand when AI use crosses into academic dishonesty</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <p>Get free "Snack Prompt" templates for responsible AI use</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  For Educators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p>Develop clear AI use policies for your classroom</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p>Learn to detect AI-generated work vs. AI-assisted work</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p>Integrate AI tools into lessons ethically and effectively</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p>Receive ready-to-use prompt templates for students</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Structure */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Workshop Structure</h2>
            <p className="text-xl text-gray-700">Flexible formats to fit your school's needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">Student Workshop</CardTitle>
                <CardDescription>45-60 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Interactive AI ethics discussion</li>
                  <li>• Real-world scenarios and role-play</li>
                  <li>• Hands-on prompt template practice</li>
                  <li>• Q&A and commitment pledge</li>
                </ul>
                <p className="text-lg font-bold text-purple-700 mt-4">$1,500-2,500/school</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Teacher Training</CardTitle>
                <CardDescription>90 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI policy development workshop</li>
                  <li>• Detection strategies and tools</li>
                  <li>• Classroom integration best practices</li>
                  <li>• Template library and resources</li>
                </ul>
                <p className="text-lg font-bold text-blue-700 mt-4">$2,000-3,000/session</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-indigo-700">District-Wide Program</CardTitle>
                <CardDescription>Full-day or multi-day</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Admin briefing on AI policy</li>
                  <li>• Teacher training sessions</li>
                  <li>• Student workshops across schools</li>
                  <li>• Ongoing support and resources</li>
                </ul>
                <p className="text-lg font-bold text-indigo-700 mt-4">$5,000-10,000/district</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Snack Prompt Templates Section */}
      <section id="templates" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Sparkles className="inline h-10 w-10 text-amber-500 mr-2" />
              Free "Snack Prompt" Templates
            </h2>
            <p className="text-xl text-gray-700">
              Ethical AI prompts students can use for homework help without cheating
            </p>
          </div>

          <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Template:</h3>
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 mb-6">
                <p className="text-gray-800 font-mono text-sm">
                  "I am <span className="text-purple-600 font-bold">[Your Name]</span>. My favorite hobby/sport/activity is <span className="text-purple-600 font-bold">[Activity]</span>. I'm struggling with <span className="text-purple-600 font-bold">[Subject/Formula/Concept]</span>. Can you break it down to me with relevant analogies from <span className="text-purple-600 font-bold">[Your Interest]</span>?"
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                This template helps students get explanations in their own language without having AI do the work for them.
              </p>
              <p className="text-sm text-gray-600 italic">
                Workshop attendees receive 20+ templates for different subjects and learning scenarios!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book an AI Ethics Workshop</h2>
            <p className="text-xl text-gray-700">
              Fill out the form below and we'll contact you within 24 hours to discuss dates, pricing, and workshop details.
            </p>
          </div>

          <Card className="border-2 border-purple-300">
            <CardContent className="p-8">
              <form action="https://formspree.io/f/xjkjvbpj" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New AI Ethics Workshop Inquiry" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">School Name *</label>
                    <Input
                      required
                      name="schoolName"
                      placeholder="School or District Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">District *</label>
                    <Input
                      required
                      name="district"
                      placeholder="School District"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Name *</label>
                    <Input
                      required
                      name="contactName"
                      placeholder="Principal, Coordinator, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Workshop Type *</label>
                    <Input
                      required
                      name="workshopType"
                      placeholder="Student, Teacher, or District"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="your@school.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <Input
                      required
                      type="tel"
                      name="phone"
                      placeholder="(803) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Number of Students/Teachers</label>
                  <Input
                    name="students"
                    placeholder="e.g., 100 students or 20 teachers"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Needs</label>
                  <Textarea
                    name="message"
                    placeholder="Preferred dates, specific concerns about AI in your school, goals for the workshop..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Workshop Information
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We'll contact you within 24 hours to discuss dates, pricing, and workshop details.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Empower Your Students?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book an AI Ethics Workshop today and give your school the tools to navigate the AI revolution responsibly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#booking">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-xl px-8 py-6">
                <Calendar className="mr-2 h-6 w-6" />
                Schedule Your Workshop
              </Button>
            </a>
            <a href="mailto:Curtisheru@onetribe.io">
              <Button size="lg" variant="outline" className="text-xl px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Email Us Directly
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            AI Ethics Workshop by OneTribe | Curtis Heru Boyd
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Empowering the next generation to use AI responsibly
          </p>
        </div>
      </footer>
    </div>
  );
}

