import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Shield, Users, BookOpen, Calendar, CheckCircle, School, Sparkles, Download } from "lucide-react";
import { useState } from "react";

export default function AIEthicsWorkshop() {
  const [inquiryForm, setInquiryForm] = useState({ 
    schoolName: "", 
    contactName: "", 
    email: "", 
    phone: "", 
    district: "", 
    students: "", 
    workshopType: "",
    message: "" 
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xwppbvvl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'New AI Ethics Workshop Inquiry',
          ...inquiryForm
        })
      });
      if (response.ok) {
        alert(`Thanks for your inquiry! We'll contact you at ${inquiryForm.email} with our AI Ethics Workshop information.`);
        setInquiryForm({ schoolName: "", contactName: "", email: "", phone: "", district: "", students: "", workshopType: "", message: "" });
      } else {
        alert('There was an error submitting the form. Please try again or email us directly.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please email us at Curtisheru@onetribe.io');
    }
  };

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
              AI as a Tool,<br />Not a Cheat Code
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empower your students and educators with the knowledge to use AI ethically and effectively. 
              A timely workshop for schools navigating the AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-lg px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Workshop
                </Button>
              </a>
              <a href="#download">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Free Resources
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <School className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">2</p>
                <p className="text-blue-200">School Districts Served</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">85+</p>
                <p className="text-blue-200">Students Empowered</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-blue-200">Ethical Prompt Templates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge Schools Are Facing</h2>
          <p className="text-xl text-gray-700 mb-8">
            AI tools like ChatGPT are everywhere, but most students don't know how to use them ethically. 
            Schools are scrambling to create policies, but students need practical guidance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">The "Cheat Code" Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Students use AI to complete assignments without learning, undermining their education 
                  and violating academic integrity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">The "Tool" Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Students learn to use AI as a learning partner—for brainstorming, understanding, 
                  and practicing—while still doing the thinking themselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Options */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Workshop Options</h2>
            <p className="text-xl text-gray-600">
              Flexible formats to meet your school's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Workshop */}
            <Card className="border-2 border-purple-300 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-purple-50">
                <Users className="h-12 w-12 text-purple-600 mb-3" />
                <CardTitle className="text-2xl">Student Workshop</CardTitle>
                <CardDescription className="text-base">45-60 minutes</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Interactive session teaching students to use AI ethically with hands-on practice using "Snack Prompts."
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>What is AI and how does it work?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tool vs. Cheat Code mindset</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>20+ ethical prompt templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Live practice session</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-purple-600">$1,500-2,500</p>
                <p className="text-sm text-gray-600">per school day</p>
              </CardContent>
            </Card>

            {/* Teacher Training */}
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-blue-50">
                <BookOpen className="h-12 w-12 text-blue-600 mb-3" />
                <CardTitle className="text-2xl">Teacher Training</CardTitle>
                <CardDescription className="text-base">90 minutes</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Professional development for educators on integrating AI ethically into their classrooms.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>AI tools overview for educators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Classroom integration strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Assessment & grading guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Digital resource library</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-blue-600">$2,000-3,500</p>
                <p className="text-sm text-gray-600">per session</p>
              </CardContent>
            </Card>

            {/* District Package */}
            <Card className="border-2 border-amber-300 hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardHeader className="bg-amber-100">
                <Badge className="mb-2 bg-amber-600 w-fit">Best Value</Badge>
                <School className="h-12 w-12 text-amber-600 mb-3" />
                <CardTitle className="text-2xl">District Package</CardTitle>
                <CardDescription className="text-base">Multiple schools</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive district-wide implementation with student workshops, teacher training, and policy consultation.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Student workshops (all schools)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Teacher training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>AI policy consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ongoing support & resources</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-amber-600">$5,000-10,000</p>
                <p className="text-sm text-gray-600">per district</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Snack Prompts Preview */}
      <section id="download" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Introducing "Snack Prompts"</h2>
            <p className="text-xl text-gray-600">
              Pre-built, ethical prompt templates that help students use AI as a learning tool
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle>The Learning Assistant</CardTitle>
                <CardDescription>Use when struggling with a new concept</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  I am [name], and my favorite [hobby/sport/activity] is [interest]. I'm struggling with [subject/formula/concept]. Can you break it down using analogies related to [my interest]?
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle>The Study Buddy</CardTitle>
                <CardDescription>Use to check your understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  I'm studying [topic] and I understand [what I know], but I'm confused about [specific question]. Can you explain it in a different way without giving me the answer?
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200">
              <CardHeader>
                <CardTitle>The Creative Brainstormer</CardTitle>
                <CardDescription>Use when you need new ideas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  I'm working on a [project type] about [topic]. I've already thought of [my ideas]. Can you suggest 3 more creative angles I haven't considered?
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle>The Self-Checker</CardTitle>
                <CardDescription>Use to review your work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  I solved this problem: [show your work]. Can you check if my reasoning is correct and point out any mistakes without telling me the final answer?
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Get the complete library of 20+ ethical AI prompts for your classroom!
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2 h-5 w-5" />
              Download Free Prompt Library
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-16 px-6 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book an AI Ethics Workshop</h2>
            <p className="text-xl text-gray-700">
              Let's empower your students and educators to use AI responsibly
            </p>
          </div>

          <Card className="border-2 border-purple-300">
            <CardContent className="p-8">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">School Name *</label>
                    <Input
                      required
                      value={inquiryForm.schoolName}
                      onChange={(e) => setInquiryForm({...inquiryForm, schoolName: e.target.value})}
                      placeholder="School or District Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">District *</label>
                    <Input
                      required
                      value={inquiryForm.district}
                      onChange={(e) => setInquiryForm({...inquiryForm, district: e.target.value})}
                      placeholder="School District"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Name *</label>
                    <Input
                      required
                      value={inquiryForm.contactName}
                      onChange={(e) => setInquiryForm({...inquiryForm, contactName: e.target.value})}
                      placeholder="Principal, Coordinator, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Workshop Type *</label>
                    <Input
                      required
                      value={inquiryForm.workshopType}
                      onChange={(e) => setInquiryForm({...inquiryForm, workshopType: e.target.value})}
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
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      placeholder="your@school.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <Input
                      required
                      type="tel"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                      placeholder="(803) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Number of Students/Teachers</label>
                  <Input
                    value={inquiryForm.students}
                    onChange={(e) => setInquiryForm({...inquiryForm, students: e.target.value})}
                    placeholder="e.g., 100 students or 20 teachers"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Needs</label>
                  <Textarea
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                Schedule a Call
              </Button>
            </a>
            <a href="mailto:Curtisheru@onetribe.io">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

