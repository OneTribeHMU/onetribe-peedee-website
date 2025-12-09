import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, DollarSign, Sparkles, Palette, Film, Award } from "lucide-react";
import { useState } from "react";

export default function AIHeroGeneration() {
  const [enrollForm, setEnrollForm] = useState({
    studentName: "",
    gradeLevel: "",
    parentEmail: "",
    phone: "",
    questions: ""
  });

  const [partnerForm, setPartnerForm] = useState({
    schoolName: "",
    district: "",
    contactName: "",
    estimatedStudents: "",
    email: "",
    phone: "",
    needs: ""
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
            ✨ AI Hero Generation Program
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Where Students Create Heroes<br />
            & Write Their Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Empowering young storytellers through AI art generation, creative writing, and animation. 
            Students design heroes, craft narratives, and bring their stories to life with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#enroll">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Enroll Your Child
              </Button>
            </a>
            <a href="#partnerships">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg">
                School Partnerships
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-2 text-amber-400" />
                <div className="text-4xl font-bold mb-1">85+</div>
                <div className="text-blue-100">Students Enrolled</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 mx-auto mb-2 text-teal-400" />
                <div className="text-4xl font-bold mb-1">2</div>
                <div className="text-blue-100">School Districts</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Film className="w-12 h-12 mx-auto mb-2 text-purple-400" />
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-blue-100">Student Engagement</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-week cycle that combines traditional artmaking with AI technology, 
              developing literacy, creativity, and 21st-century skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Week 1 */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <Badge className="w-fit mb-2 bg-purple-500">Week 1</Badge>
                <CardTitle>Foundation & Character Creation</CardTitle>
                <CardDescription>Design your hero through hand drawing and AI transformation</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Hand-draw original hero character with unique abilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Learn AI prompt engineering to transform drawings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Generate multiple AI variations of your hero</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Begin character backstory writing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 2 */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <Badge className="w-fit mb-2 bg-blue-500">Week 2</Badge>
                <CardTitle>Story Development & World Building</CardTitle>
                <CardDescription>Create the world where your hero's adventure unfolds</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Draw character environments and settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Generate background images with AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Write adventure stories (age-appropriate length)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Learn story structure (beginning, middle, end)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 3 */}
            <Card className="border-2 border-teal-200">
              <CardHeader className="bg-teal-50">
                <Badge className="w-fit mb-2 bg-teal-500">Week 3</Badge>
                <CardTitle>Animation & Voice</CardTitle>
                <CardDescription>Bring your hero to life with movement and narration</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    <span>Animate characters using KlingAI technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    <span>Create simple movements (waving, walking, flying)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    <span>Record student narrations of their stories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    <span>Animate backgrounds and create transitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 4 */}
            <Card className="border-2 border-amber-200">
              <CardHeader className="bg-amber-50">
                <Badge className="w-fit mb-2 bg-amber-500">Week 4</Badge>
                <CardTitle>Production & Showcase</CardTitle>
                <CardDescription>Complete your animated short and share with the world</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Edit and assemble final animated story</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Add titles, credits, and finishing touches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Practice presentation skills for showcase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>Family viewing celebration event</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs for Every Age */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs for Every Age</h2>
            <p className="text-xl text-gray-600">
              Curriculum adapted to meet students where they are, from elementary through high school
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Elementary</CardTitle>
                <CardDescription>Grades 1-5</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Simple 3-sentence stories, basic character design, guided prompts
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-2">$100/month</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle>Middle School</CardTitle>
                <CardDescription>Grades 6-8</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Short paragraphs, detailed characters, scene creation, narrative voice
                </p>
                <div className="text-3xl font-bold text-teal-600 mb-2">$120/month</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>High School</CardTitle>
                <CardDescription>Grades 9-12</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Complex narratives, film production techniques, portfolio building
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">$140/month</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Needs</CardTitle>
                <CardDescription>All Ages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Individualized support, adaptive technology, sensory-friendly approach
                </p>
                <div className="text-3xl font-bold text-amber-600 mb-2">Custom</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Creations Gallery */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white">Student Creations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See What Students Create</h2>
            <p className="text-xl text-gray-600">
              From imagination to AI-generated heroes — real student artwork from our program
            </p>
          </div>

          {/* 1st Grader Success Story */}
          <Card className="border-2 border-green-200 bg-green-50/50 mb-12">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-2 bg-green-500 text-white">1st Grader Success Story</Badge>
              <CardTitle className="text-3xl">From Hand-Drawn to Animated Hero</CardTitle>
              <CardDescription className="text-lg">
                Watch a 1st grader's journey from crayon drawing to fully animated AI hero
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                    <img 
                      src="/images/student-work/1st-grader-drawing.jpg" 
                      alt="Hand-drawn character by 1st grader"
                      className="w-full h-64 object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Step 1: Hand-Drawn Character</h3>
                  <p className="text-gray-600">Original artwork by 1st grade student</p>
                </div>

                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                    <img 
                      src="/images/student-work/1st-grader-ai-hero.jpg" 
                      alt="AI-generated hero"
                      className="w-full h-64 object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Step 2: AI-Generated Hero</h3>
                  <p className="text-gray-600">Transformed into stunning digital art</p>
                </div>

                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                    <video 
                      controls 
                      className="w-full h-64 object-contain"
                      poster="/images/student-work/1st-grader-animation-poster.jpg"
                    >
                      <source src="/videos/1st-grader-hero-animation.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Step 3: Animated Story</h3>
                  <p className="text-gray-600">Watch the hero come to life with animation</p>
                </div>
              </div>

              <div className="mt-8 text-center bg-white rounded-lg p-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  ✨ These are real AI heroes created by students in our program!
                </p>
                <p className="text-gray-600">
                  Students start with hand-drawn characters, learn AI prompt engineering, and transform 
                  their artwork into stunning digital heroes. Then they write stories and animate their creations to life!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DONATION SECTION - RIGHT AFTER 1ST GRADER STORY */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-teal-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 shadow-xl bg-white/90 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Support the AI Hero Generation Program
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Help us bring creative AI education to more students! Your contribution supports 
                  materials, technology access, and scholarships for students who want to transform 
                  their hand-drawn heroes into animated stories.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-700">$25</div>
                  <div className="text-sm text-gray-600">Supplies for 1 student</div>
                </div>
                <div className="bg-teal-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-teal-700">$100</div>
                  <div className="text-sm text-gray-600">1 month tuition</div>
                </div>
                <div className="bg-amber-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-amber-700">$400</div>
                  <div className="text-sm text-gray-600">Full 4-week program</div>
                </div>
              </div>

              {/* Donation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://cash.app/$OneTribeHemp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Donate via CashApp
                  </Button>
                </a>

                <a 
                  href="https://PayPal.Me/OnetribeHMU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506L9.99 14.31h2.19c5.05 0 7.201-2.354 8.042-6.393z"/>
                    </svg>
                    Donate via PayPal
                  </Button>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  💜 Every contribution helps a student bring their hero to life
                </p>
                <p className="text-xs text-gray-500">
                  OneTribe is a community-supported educational initiative. Donations help cover materials, 
                  technology access, and scholarships for students in need.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-white" id="success-stories">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from schools and families experiencing the program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Colleton Middle School</CardTitle>
                <CardDescription>Walterboro, SC • 85 Students</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic mb-4">
                  "The AI Hero Generation Program has transformed how our students approach creative writing. 
                  They're more engaged, more confident, and producing work we never thought possible."
                </p>
                <p className="text-sm text-gray-500">— Current Pilot Program</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timberland High School</CardTitle>
                <CardDescription>Berkeley County, SC • SPED Workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic mb-4">
                  "Our special needs students thrived in the 3-day workshop. The combination of hands-on art 
                  and AI technology provided multiple entry points for learning and expression."
                </p>
                <p className="text-sm text-gray-500">— 3-Day Intensive Workshop</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 px-6 bg-gray-50" id="enroll">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enroll Your Child</h2>
            <p className="text-xl text-gray-600">
              Join our next cohort and watch your child's creativity soar
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Student Name *</label>
                  <Input 
                    value={enrollForm.studentName}
                    onChange={(e) => setEnrollForm({...enrollForm, studentName: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Grade Level *</label>
                  <Input 
                    value={enrollForm.gradeLevel}
                    onChange={(e) => setEnrollForm({...enrollForm, gradeLevel: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Parent Email *</label>
                  <Input 
                    type="email"
                    value={enrollForm.parentEmail}
                    onChange={(e) => setEnrollForm({...enrollForm, parentEmail: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input 
                    type="tel"
                    value={enrollForm.phone}
                    onChange={(e) => setEnrollForm({...enrollForm, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Questions or Special Needs</label>
                  <Textarea 
                    value={enrollForm.questions}
                    onChange={(e) => setEnrollForm({...enrollForm, questions: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Submit Enrollment Inquiry
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll contact you within 24 hours to discuss enrollment, pricing, and schedule options.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Partnerships */}
      <section className="py-16 px-6 bg-white" id="partnerships">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">School & District Partnerships</h2>
            <p className="text-xl text-gray-600 mb-8">
              Bring the AI Hero Generation Program to your school or district. Proven results with 85+ students across 2 districts.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Turnkey Program</CardTitle>
                  <CardDescription>We teach on-site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">$125-150/student</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teacher Training</CardTitle>
                  <CardDescription>We train your staff</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-teal-600 mb-2">$2,500-5,000</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>District License</CardTitle>
                  <CardDescription>Unlimited schools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-600 mb-2">$10,000-25,000</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">School Name *</label>
                    <Input 
                      value={partnerForm.schoolName}
                      onChange={(e) => setPartnerForm({...partnerForm, schoolName: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">District *</label>
                    <Input 
                      value={partnerForm.district}
                      onChange={(e) => setPartnerForm({...partnerForm, district: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Name *</label>
                    <Input 
                      value={partnerForm.contactName}
                      onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Students</label>
                    <Input 
                      value={partnerForm.estimatedStudents}
                      onChange={(e) => setPartnerForm({...partnerForm, estimatedStudents: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input 
                      type="tel"
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell Us About Your Needs</label>
                  <Textarea 
                    value={partnerForm.needs}
                    onChange={(e) => setPartnerForm({...partnerForm, needs: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                  Request Partnership Information
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll send you our complete school partnership packet including curriculum details, 
                  pricing options, and case studies from our current pilot programs.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Empower Young Storytellers?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 85+ students already creating heroes and bringing their stories to life through AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#enroll">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 text-lg">
                Schedule a Consultation
              </Button>
            </a>
            <a href="mailto:contact@onetribe.io">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
