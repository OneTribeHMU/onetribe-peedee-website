import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Sparkles, Users, BookOpen, Video, Award, School, CheckCircle, Rocket } from "lucide-react";

export default function AIHeroProgram() {

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
              <Sparkles className="inline h-5 w-5 mr-2" />
              AI Hero Generation Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Where Students Create Heroes<br />& Write Their Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empowering young storytellers through AI art generation, creative writing, and animation. 
              Students design heroes, craft narratives, and bring their stories to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#enroll">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-lg px-8">
                  <Rocket className="mr-2 h-5 w-5" />
                  Enroll Your Child
                </Button>
              </a>
              <a href="#schools">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <School className="mr-2 h-5 w-5" />
                  School Partnerships
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">85+</p>
                <p className="text-blue-200">Students Enrolled</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <School className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">2</p>
                <p className="text-blue-200">School Districts</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-blue-200">Student Engagement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50">
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
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-purple-50">
                <Badge className="mb-2 bg-purple-600 w-fit">Week 1</Badge>
                <CardTitle className="text-2xl">Foundation & Character Creation</CardTitle>
                <CardDescription className="text-base">Design your hero through hand drawing and AI transformation</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hand-draw original hero character with unique abilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Learn AI prompt engineering to transform drawings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Generate multiple AI variations of your hero</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Begin character backstory writing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 2 */}
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-blue-50">
                <Badge className="mb-2 bg-blue-600 w-fit">Week 2</Badge>
                <CardTitle className="text-2xl">Story Development & World Building</CardTitle>
                <CardDescription className="text-base">Create the world where your hero's adventure unfolds</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Draw character environments and settings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Generate background images with AI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Write adventure stories (age-appropriate length)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Learn story structure (beginning, middle, end)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 3 */}
            <Card className="border-2 border-teal-200 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-teal-50">
                <Badge className="mb-2 bg-teal-600 w-fit">Week 3</Badge>
                <CardTitle className="text-2xl">Animation & Voice</CardTitle>
                <CardDescription className="text-base">Bring your hero to life with movement and narration</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Animate characters using KlingAI technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Create simple movements (waving, walking, flying)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Record student narrations of their stories</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Animate backgrounds and create transitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Week 4 */}
            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-amber-50">
                <Badge className="mb-2 bg-amber-600 w-fit">Week 4</Badge>
                <CardTitle className="text-2xl">Production & Showcase</CardTitle>
                <CardDescription className="text-base">Complete your animated short and share with the world</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Edit and assemble final animated story</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Add titles, credits, and finishing touches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Practice presentation skills for showcase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Family viewing celebration event</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs for Every Age</h2>
            <p className="text-xl text-gray-600">
              Curriculum adapted to meet students where they are, from elementary through high school
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Elementary</CardTitle>
                <CardDescription>Grades 1-5</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Simple 3-sentence stories, basic character design, guided prompts</p>
                <p className="text-2xl font-bold text-purple-600">$100/month</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-purple-300">
              <CardHeader>
                <Badge className="mb-2 bg-purple-600">Most Popular</Badge>
                <CardTitle className="text-xl">Middle School</CardTitle>
                <CardDescription>Grades 6-8</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Short paragraphs, detailed characters, scene creation, narrative voice</p>
                <p className="text-2xl font-bold text-purple-600">$120/month</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">High School</CardTitle>
                <CardDescription>Grades 9-12</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Complex narratives, film production techniques, portfolio building</p>
                <p className="text-2xl font-bold text-purple-600">$140/month</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-teal-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl">Special Needs</CardTitle>
                <CardDescription>All Ages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Individualized support, adaptive technology, sensory-friendly approach</p>
                <p className="text-2xl font-bold text-teal-600">Custom</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Outcomes */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Outcomes</h2>
            <p className="text-xl text-gray-600">
              Aligned with academic standards while fostering creativity and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-purple-600 mb-3" />
                <CardTitle>Literacy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Character development & description</li>
                  <li>• Story structure & narrative voice</li>
                  <li>• Vocabulary expansion through prompts</li>
                  <li>• Writing, editing & revision process</li>
                  <li>• Public speaking & presentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-blue-600 mb-3" />
                <CardTitle>21st Century Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI literacy & prompt engineering</li>
                  <li>• Digital content creation</li>
                  <li>• Critical thinking & problem-solving</li>
                  <li>• Technology integration</li>
                  <li>• Portfolio documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200">
              <CardHeader>
                <Video className="h-12 w-12 text-teal-600 mb-3" />
                <CardTitle>Creative Expression</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visual design & composition</li>
                  <li>• Animation concepts & techniques</li>
                  <li>• Multimedia storytelling</li>
                  <li>• Personal voice & confidence</li>
                  <li>• Artistic experimentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hero Showcase Gallery */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500 text-white text-lg px-6 py-2">
              <Sparkles className="inline h-5 w-5 mr-2" />
              Student Creations
            </Badge>
            <h2 className="text-5xl font-bold mb-4">See What Students Create</h2>
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
              From imagination to AI-generated heroes — real student artwork from our program
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Hero 1 - Purple Tech Hero */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="/heroes/hero-purple-tech.jpg" 
                alt="Student-created AI hero with purple tech suit and energy powers"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Tech Guardian</h3>
                  <p className="text-blue-200">Student-created hero with energy manipulation powers</p>
                </div>
              </div>
            </div>

            {/* Hero 2 - Red Cape Hero */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="/heroes/hero-red-cape.jpg" 
                alt="Student-created AI hero with red and blue suit running with cape"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Speed Runner</h3>
                  <p className="text-blue-200">Student-created hero with super speed abilities</p>
                </div>
              </div>
            </div>

            {/* Hero 3 - Red Mask Hero */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="/heroes/hero-red-mask.jpg" 
                alt="Student-created AI hero with red mask and cape in action pose"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Crimson Defender</h3>
                  <p className="text-blue-200">Student-created hero protecting the city</p>
                </div>
              </div>
            </div>
          </div>

          {/* 1st Grader Progression Showcase */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-green-500 text-white text-lg px-6 py-2">
                <Sparkles className="inline h-5 w-5 mr-2" />
                1st Grader Success Story
              </Badge>
              <h3 className="text-4xl font-bold mb-4">From Hand-Drawn to Animated Hero</h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Watch a 1st grader's journey from crayon drawing to fully animated AI hero
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              {/* Original Drawing */}
              <Card className="bg-white/10 backdrop-blur border-white/20 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Step 1: Hand-Drawn Character</CardTitle>
                  <CardDescription className="text-blue-200">Original artwork by 1st grade student</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/ai-hero-student/original-drawing.jpg" 
                    alt="1st grader's original hand-drawn character"
                    className="w-full rounded-lg shadow-xl"
                  />
                </CardContent>
              </Card>

              {/* AI-Generated Hero */}
              <Card className="bg-white/10 backdrop-blur border-white/20 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Step 2: AI-Generated Hero</CardTitle>
                  <CardDescription className="text-blue-200">Transformed into stunning digital art</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/ai-hero-student/animated-hero.png" 
                    alt="1st grader's AI-generated animated hero"
                    className="w-full rounded-lg shadow-xl"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Video Showcase */}
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="bg-white/10 backdrop-blur border-white/20 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Step 3: Animated Story</CardTitle>
                  <CardDescription className="text-blue-200">Watch the hero come to life with animation</CardDescription>
                </CardHeader>
                <CardContent>
                  <video 
                    controls 
                    className="w-full rounded-lg shadow-xl"
                    poster="/ai-hero-student/animated-hero.png"
                  >
                    <source src="/ai-hero-student/progression-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="max-w-3xl mx-auto bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8">
                <p className="text-xl text-blue-100 mb-4">
                  <strong className="text-amber-400">These are real AI heroes created by students in our program!</strong>
                </p>
                <p className="text-lg text-blue-200">
                  Students start with hand-drawn characters, learn AI prompt engineering, and transform their artwork into stunning digital heroes. 
                  Then they write stories and animate their creations to life!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from schools and families experiencing the program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <School className="h-8 w-8 text-purple-600 mr-3" />
                  <div>
                    <p className="font-bold text-lg">Colleton Middle School</p>
                    <p className="text-sm text-gray-600">Walterboro, SC • 85 Students</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The AI Hero Generation Program has transformed how our students approach creative writing. 
                  They're more engaged, more confident, and producing work we never thought possible."
                </p>
                <p className="text-sm text-gray-600">— Current Pilot Program</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-teal-600 mr-3" />
                  <div>
                    <p className="font-bold text-lg">Timberland High School</p>
                    <p className="text-sm text-gray-600">Berkeley County, SC • SPED Workshop</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Our special needs students thrived in the 3-day workshop. The combination of hands-on art 
                  and AI technology provided multiple entry points for learning and expression."
                </p>
                <p className="text-sm text-gray-600">— 3-Day Intensive Workshop</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parent Enrollment Form */}
      <section id="enroll" className="py-16 px-6 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enroll Your Child</h2>
            <p className="text-xl text-gray-700">
              Join our next cohort and watch your child's creativity soar
            </p>
          </div>

          <Card className="border-2 border-purple-300">
            <CardContent className="p-8">
              <form action="https://formspree.io/f/myzlygnr" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New AI Hero Program Enrollment" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name *</label>
                    <Input
                      required
                      name="name"
                      placeholder="First and Last Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Grade Level *</label>
                    <Input
                      required
                      name="grade"
                      placeholder="e.g., 6th Grade"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Email *</label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      required
                      type="tel"
                      name="phone"
                      placeholder="(803) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Questions or Special Needs</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your child's interests, learning needs, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-lg">
                  <Rocket className="mr-2 h-5 w-5" />
                  Submit Enrollment Inquiry
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We'll contact you within 24 hours to discuss enrollment, pricing, and schedule options.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Partnership Form */}
      <section id="schools" className="py-16 px-6 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <School className="h-16 w-16 mx-auto mb-4 text-amber-400" />
            <h2 className="text-4xl font-bold mb-4">School & District Partnerships</h2>
            <p className="text-xl text-blue-100 mb-8">
              Bring the AI Hero Generation Program to your school or district. 
              Proven results with 85+ students across 2 districts.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Partnership Options:</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold text-amber-400 mb-2">Turnkey Program</p>
                    <p className="text-sm text-blue-100">We teach on-site</p>
                    <p className="text-lg font-bold text-white mt-2">$125-150/student</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold text-amber-400 mb-2">Teacher Training</p>
                    <p className="text-sm text-blue-100">We train your staff</p>
                    <p className="text-lg font-bold text-white mt-2">$2,500-5,000</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold text-amber-400 mb-2">District License</p>
                    <p className="text-sm text-blue-100">Unlimited schools</p>
                    <p className="text-lg font-bold text-white mt-2">$10,000-25,000</p>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/myzlygnr" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New AI Hero Program School Partnership Inquiry" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">School Name *</label>
                    <Input
                      required
                      name="schoolName"
                      placeholder="School or District Name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">District *</label>
                    <Input
                      required
                      name="district"
                      placeholder="School District"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Contact Name *</label>
                    <Input
                      required
                      name="contactName"
                      placeholder="Principal, Administrator, etc."
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Estimated Students</label>
                    <Input
                      name="students"
                      placeholder="e.g., 50-100"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="your@school.edu"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Phone *</label>
                    <Input
                      required
                      type="tel"
                      name="phone"
                      placeholder="(803) 555-1234"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Tell Us About Your Needs</label>
                  <Textarea
                    name="message"
                    placeholder="Grade levels, number of students, timeline, budget considerations, specific goals..."
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-lg">
                  <School className="mr-2 h-5 w-5" />
                  Request Partnership Information
                </Button>

                <p className="text-sm text-blue-200 text-center">
                  We'll send you our complete school partnership packet including curriculum details, 
                  pricing options, and case studies from our current pilot programs.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Empower Young Storytellers?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 85+ students already creating heroes and bringing their stories to life through AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                Schedule a Consultation
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

