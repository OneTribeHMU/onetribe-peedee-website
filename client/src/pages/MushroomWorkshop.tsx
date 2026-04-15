import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Leaf,
  DollarSign,
  BookOpen,
  ChefHat,
  Package,
  ExternalLink,
  Phone,
  Mail,
} from "lucide-react";

export default function MushroomWorkshop() {
  const sessions = [
    {
      number: 1,
      date: "Friday, May 23, 2025",
      title: "Foundations of Mycology",
      topics: [
        "Mushroom biology & life cycle",
        "Species identification (Oyster, Shiitake, Lion's Mane)",
        "Substrate preparation — straw & hardwood logs",
        "Sanitation & contamination prevention",
      ],
    },
    {
      number: 2,
      date: "Thursday, June 5, 2025",
      title: "Inoculation & Cultivation",
      topics: [
        "Grain-to-grain spawn transfer techniques",
        "Inoculating straw buckets & logs",
        "Fruiting chamber setup & environmental controls",
        "Humidity, temperature & light management",
      ],
    },
    {
      number: 3,
      date: "Wednesday, June 18, 2025",
      title: "Harvest, Processing & Sales",
      topics: [
        "Harvesting best practices for maximum yield",
        "Drying, storing & processing mushrooms",
        "Making medicinal tinctures",
        "Pricing & selling at farmers markets and restaurants",
      ],
    },
  ];

  const included = [
    { icon: BookOpen, label: "9 Hours of Expert Instruction (3 sessions × 3 hrs)" },
    { icon: Package, label: "Inoculated Straw Bucket — take home & start growing immediately" },
    { icon: Leaf, label: "Inoculated Tree Logs — produce mushrooms for years" },
    { icon: Package, label: "Mushroom Growing Supplies & Tools" },
    { icon: Package, label: "Tincture Bottles & Processing Materials" },
    { icon: ChefHat, label: "Full Catered Meal — all 3 sessions (11:00 AM – 3:00 PM)" },
  ];

  const marketPrices = [
    { variety: "Oyster Mushrooms", price: "$12–16/lb", color: "bg-yellow-100 border-yellow-300" },
    { variety: "Shiitake Mushrooms", price: "$14–20/lb", color: "bg-amber-100 border-amber-300" },
    { variety: "Lion's Mane", price: "$20–25/lb", color: "bg-orange-100 border-orange-300" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="w-full border-b px-6 py-4 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/onetribe-amagi-logo.png"
              className="h-12 w-12 object-contain"
              alt="OneTribe Ama-Gi Logo"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-amber-700">OneTribe</span>
              <span className="text-xs text-gray-600 -mt-1">AMA-GI</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/"><a className="text-gray-700 hover:text-green-700 font-medium">Home</a></Link>
            <Link href="/products"><a className="text-gray-700 hover:text-green-700 font-medium">Products</a></Link>
            <Link href="/afrorobics"><a className="text-gray-700 hover:text-green-700 font-medium">AfroRobics</a></Link>
            <Link href="/uhuru-academy"><a className="text-gray-700 hover:text-green-700 font-medium">Uhuru Academy</a></Link>
            <Link href="/mushroom-workshop"><a className="text-gray-700 hover:text-green-700 font-medium">Mushroom Workshop</a></Link>
            <Link href="/faq"><a className="text-gray-700 hover:text-green-700 font-medium">FAQ</a></Link>
            <Link href="/contact"><a className="text-gray-700 hover:text-green-700 font-medium">Contact</a></Link>
          </nav>
          <a
            href="https://forms.gle/mushroomworkshop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-700 hover:bg-green-800">Register — $150</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500 text-white text-sm px-4 py-1">
            🍄 Limited to 25 Participants
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Mushroom Cultivation
            <br />
            <span className="text-amber-400">Workshop Series</span>
          </h1>
          <p className="text-2xl text-green-100 italic mb-6">
            From Spore to Harvest — A 3-Part Hands-On Intensive
          </p>
          <p className="text-amber-300 font-semibold mb-2 text-lg">
            Hosted by Curtis Boyd | OneTribe Ama-Gi Farm
          </p>
          <p className="text-lg text-green-200 mb-10 max-w-3xl mx-auto">
            Learn to grow high-value specialty mushrooms with expert mycologist Kadedra from the
            GRAINN School of Mycology. Walk away with everything you need to start producing your
            first harvest in 6–8 weeks.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-10 text-green-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-400" />
              <span>May 23, June 5 & June 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-400" />
              <span>11:00 AM – 3:00 PM each session</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              <span>The Kanvas · 128 Hampton Ave, Kingstree, SC</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-400" />
              <span>Max 25 participants</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/mushroomworkshop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-10 py-6">
                Register Now — $150
              </Button>
            </a>
            <a href="#details">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-lg px-10 py-6"
              >
                View Full Details
              </Button>
            </a>
          </div>
          <p className="text-sm text-green-300 mt-4">
            Payment via Venmo · CashApp · Zelle · Full payment secures your spot
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Grow Mushrooms?</h2>
            <p className="text-lg text-gray-600">
              Specialty mushrooms are one of the highest-value crops per square foot in agriculture
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {marketPrices.map((item) => (
              <Card key={item.variety} className={`border-2 ${item.color} text-center`}>
                <CardContent className="pt-6 pb-4">
                  <p className="text-4xl font-bold text-green-800 mb-2">{item.price}</p>
                  <p className="text-gray-700 font-medium">{item.variety}</p>
                  <p className="text-sm text-gray-500 mt-1">at farmers markets & restaurants</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-8 w-8 text-green-700" />
                  <div>
                    <p className="text-2xl font-bold text-green-800">6–8 Weeks</p>
                    <p className="text-gray-600">from inoculation to first harvest</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-8 w-8 text-green-700" />
                  <div>
                    <p className="text-2xl font-bold text-green-800">$5,000–10,000+</p>
                    <p className="text-gray-600">potential annual revenue from small-scale operation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section id="details" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            3-Session Curriculum
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <Card key={session.number} className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader className="bg-gradient-to-br from-green-800 to-emerald-700 text-white rounded-t-lg pb-4">
                  <Badge className="w-fit bg-amber-500 text-white mb-2">Session {session.number}</Badge>
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <p className="text-green-200 text-sm">{session.date}</p>
                  <p className="text-green-200 text-sm">11:00 AM – 3:00 PM</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {session.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Everything Included in Your $150
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Total value: <span className="font-bold text-green-700">$525+</span> — you're getting 70% off market rate
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-green-200 shadow-sm">
                <item.icon className="h-6 w-6 text-green-700 shrink-0 mt-0.5" />
                <p className="text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
          {/* Value Breakdown */}
          <Card className="border-2 border-amber-300 bg-amber-50 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-gray-900">Value Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Expert Instruction (9 hrs)</span><span className="font-semibold">$400+</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Take-Home Materials</span><span className="font-semibold">$100+</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Catered Lunches (×3)</span><span className="font-semibold">$45+</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-base">
                  <span>Total Value</span><span className="text-green-700">$545+</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-amber-700">
                  <span>Your Investment</span><span>$150</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Venue & Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Where It All Happens</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Kanvas */}
            <div className="bg-gradient-to-br from-green-800 to-emerald-700 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-amber-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">The Kanvas</h3>
                  <p className="text-green-200 text-sm">128 Hampton Ave, Kingstree, SC</p>
                </div>
              </div>
              <p className="text-green-100 leading-relaxed">
                <span className="text-amber-300 font-semibold">Meet & Greet Space.</span> Each session begins at The Kanvas — a creative community hub in the heart of Kingstree. This is where you'll gather, connect with fellow participants, receive instruction, and enjoy your catered meal before heading out to the field.
              </p>
            </div>
            {/* Hell Half Acre */}
            <div className="bg-gradient-to-br from-amber-800 to-amber-700 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-8 w-8 text-amber-300 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Hell Half Acre Community</h3>
                  <p className="text-amber-200 text-sm">OneTribe Ama-Gi Farm Fields, Williamsburg County</p>
                </div>
              </div>
              <p className="text-amber-100 leading-relaxed">
                <span className="text-white font-semibold">Hiking, Forest & Field Work.</span> The hands-on outdoor portion takes place at one of OneTribe Farm's fields in the historic Hell Half Acre Community — home of <span className="font-semibold">McCollough's Blue Landing</span>, Williamsburg County's oldest family-owned gas station. You'll explore the forest, work with logs and substrate in a real farm setting, and connect with the land where these mushrooms naturally thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Instructor</h2>
          <div className="bg-gradient-to-br from-green-800 to-emerald-700 text-white rounded-2xl p-8">
            <div className="text-5xl mb-4">🍄</div>
            <h3 className="text-2xl font-bold mb-2">Kadedra</h3>
            <p className="text-amber-300 font-semibold mb-4">GRAINN School of Mycology</p>
            <p className="text-green-100 text-lg leading-relaxed">
              A professional mycologist and educator with deep expertise in small-scale mushroom
              cultivation, medicinal fungi, and sustainable agriculture. Kadedra brings hands-on
              experience growing specialty mushrooms for local markets and restaurants across the
              Southeast.
            </p>
          </div>
        </div>
      </section>

      {/* Flyer & Infographic */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Workshop Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="font-semibold text-gray-700 mb-3">Event Flyer</p>
              <img
                src="/images/mushroom_workshop_flyer.png"
                alt="Mushroom Cultivation Workshop Flyer"
                className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-700 mb-3">Why Grow Mushrooms? Infographic</p>
              <img
                src="/images/mushroom_workshop_infographic.png"
                alt="Why Grow Mushrooms Infographic"
                className="rounded-xl shadow-lg w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-xl text-green-200 mb-8">
            Space is limited to 25 participants. Secure your spot today — payment confirms your registration.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
            <p className="font-bold text-amber-400 mb-3 text-lg">How to Register:</p>
            <ol className="space-y-2 text-green-100">
              <li className="flex items-start gap-2"><span className="font-bold text-amber-400">1.</span> Click the button below to fill out the registration form</li>
              <li className="flex items-start gap-2"><span className="font-bold text-amber-400">2.</span> Send $150 via Venmo, CashApp, or Zelle to confirm your spot</li>
              <li className="flex items-start gap-2"><span className="font-bold text-amber-400">3.</span> Receive confirmation email with all session details</li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://forms.gle/mushroomworkshop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-xl px-12 py-7">
                Register Now — $150
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <p className="text-green-300 text-sm mb-6">
            Payment methods: Venmo · CashApp · Zelle · Contact us for other arrangements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-green-200">
            <a href="mailto:Curtisheru@onetribe.io" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" />
              Curtisheru@onetribe.io
            </a>
            <span className="hidden sm:block">·</span>
            <a href="https://instagram.com/onetribeamagi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              @onetribeamagi
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <p className="mb-2">
          <span className="text-amber-500 font-bold">OneTribe Ama-Gi</span> · Kingstree, SC ·{" "}
          <a href="https://onetribe.io" className="hover:text-white underline">onetribe.io</a>
        </p>
        <p className="text-sm">© 2025 OneTribe Ama-Gi. All rights reserved.</p>
      </footer>
    </div>
  );
}
