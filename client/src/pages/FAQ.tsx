import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, Leaf, Droplets, GraduationCap, Music, Package } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100">
            Everything you need to know about OneTribe products, services, and programs
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#sarsaparilla"><Badge className="bg-green-600 text-lg py-2 px-4 cursor-pointer hover:bg-green-700">
              <Leaf className="mr-2 h-4 w-4" /> Sarsaparilla Tea
            </Badge></a>
            <a href="#juicing"><Badge className="bg-blue-600 text-lg py-2 px-4 cursor-pointer hover:bg-blue-700">
              <Droplets className="mr-2 h-4 w-4" /> Juicing Services
            </Badge></a>
            <a href="#uhuru"><Badge className="bg-purple-600 text-lg py-2 px-4 cursor-pointer hover:bg-purple-700">
              <GraduationCap className="mr-2 h-4 w-4" /> Uhuru Academy
            </Badge></a>
            <a href="#afrorobics"><Badge className="bg-cyan-600 text-lg py-2 px-4 cursor-pointer hover:bg-cyan-700">
              <Music className="mr-2 h-4 w-4" /> AfroRobics
            </Badge></a>
            <a href="#affiliate"><Badge className="bg-amber-600 text-lg py-2 px-4 cursor-pointer hover:bg-amber-700">
              <Package className="mr-2 h-4 w-4" /> Affiliate Products
            </Badge></a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Sarsaparilla Tea FAQs */}
        <div id="sarsaparilla" className="mb-12">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <div className="flex items-center gap-3">
                <Leaf className="h-8 w-8 text-green-700" />
                <div>
                  <CardTitle className="text-3xl text-green-900">Sarsaparilla Tea</CardTitle>
                  <CardDescription className="text-lg">Pee Dee Aquaponics Flagship Product</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    What makes your Sarsaparilla tea unique?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    We use 100% wild-harvested Sarsaparilla <strong>rhizome</strong> (root), not just the vine. 
                    This makes us unique because the rhizome contains the highest concentration of beneficial 
                    compounds. Most commercial products use only the vine or leaves, but traditional herbalists 
                    know the rhizome is where the real medicine lives. We sustainably harvest from the Pee Dee 
                    region of South Carolina, ensuring potency and purity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    What are the health benefits?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Key Benefits:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Detox & Purify:</strong> Naturally cleanse and rejuvenate your body</li>
                      <li><strong>Energize & Revitalize:</strong> Boost your energy levels naturally</li>
                      <li><strong>Balance & Nourish:</strong> Support hormonal balance</li>
                      <li><strong>Digestive Harmony:</strong> Aid digestion and gut health</li>
                      <li><strong>Anti-Inflammatory:</strong> Reduce inflammation throughout the body</li>
                      <li><strong>Skin Health:</strong> Promote clear, healthy skin from within</li>
                      <li><strong>Immune Support:</strong> Strengthen your body's natural defenses</li>
                    </ul>
                    <p className="mt-3">
                      <strong>Rich in:</strong> Vitamins A, B-complex, C, D; Minerals: Iron, Manganese, 
                      Sodium, Silicon, Sulfur, Copper, Zinc, Iodine
                    </p>
                    <p className="mt-2">
                      <strong>Organs Benefited:</strong> Liver, Kidneys, Skin, Blood, Lymphatic System, 
                      Reproductive System, Joints
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    How do I brew Sarsaparilla tea?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Brewing Instructions:</strong>
                    <ol className="list-decimal pl-6 mt-2 space-y-2">
                      <li>Boil 8 oz of water</li>
                      <li>Add 1-2 teaspoons of Sarsaparilla Tea Chips</li>
                      <li>Steep for 5-10 minutes (longer for stronger flavor)</li>
                      <li>Strain and enjoy the earthy, invigorating brew</li>
                    </ol>
                    <p className="mt-3">
                      <strong>Pro Tips:</strong> Add honey or lemon for enhanced flavor. Can be enjoyed 
                      hot or cold. For optimal freshness, store in a cool, dry place and use within 6 
                      months of opening.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    What sizes and pricing are available?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Available Sizes:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Original Blend: $12.99 per package</li>
                      <li>Mint Blend: $13.99 per package</li>
                      <li>Bulk orders available - contact for pricing</li>
                    </ul>
                    <p className="mt-3">
                      Contact: <a href="mailto:Curtisheru@onetribe.io" className="text-green-700 underline">Curtisheru@onetribe.io</a> | (803) 201-5723
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-semibold">
                    Are there any precautions or side effects?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Important:</strong> Consult with a healthcare provider if you are pregnant, 
                    nursing, or have any medical conditions. Not intended to diagnose, treat, cure, or 
                    prevent any disease. Sarsaparilla is generally well-tolerated, but some people may 
                    experience mild digestive upset when first introducing it. Start with smaller amounts 
                    and increase gradually.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Juicing Services FAQs */}
        <div id="juicing" className="mb-12">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center gap-3">
                <Droplets className="h-8 w-8 text-blue-700" />
                <div>
                  <CardTitle className="text-3xl text-blue-900">Mobile Juicing & Equipment Rental</CardTitle>
                  <CardDescription className="text-lg">Fresh Cold-Pressed Juice Services</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="juice-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is your mobile juicing service?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    We bring our professional PURE cold-press juicer to your location—farmers markets, 
                    events, festivals, or private gatherings. Customers can bring their own fruit or 
                    choose from our seasonal selections. We juice fresh on-site while you wait!
                    <p className="mt-2">
                      <strong>Pricing:</strong> $3-5 per cup depending on ingredients and cup size
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="juice-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    What seasonal juices do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Seasonal Rotation:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Fall:</strong> Apple blends with cinnamon and ginger</li>
                      <li><strong>Winter:</strong> Citrus immunity boosters (orange, grapefruit, lemon)</li>
                      <li><strong>Spring:</strong> Green vegetable detox blends</li>
                      <li><strong>Summer:</strong> Berry refreshers and watermelon coolers</li>
                    </ul>
                    <p className="mt-3">
                      Custom blends available! Tell us what you like and we'll create something special.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="juice-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    Can I rent your juicing equipment?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Yes! We rent our professional PURE cold-press juicer for farm stands, events, and 
                    businesses.
                    <p className="mt-2">
                      <strong>Rental Details:</strong>
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>$50-75 per day depending on duration</li>
                      <li>Refundable deposit required</li>
                      <li>Includes basic training on operation and cleaning</li>
                      <li>Delivery available for additional fee</li>
                    </ul>
                    <p className="mt-3">
                      <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                        Schedule a consultation
                      </a> to discuss your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="juice-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do you offer wellness coaching?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Yes! Curtis provides personalized wellness coaching including:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Nutrition guidance and meal planning</li>
                      <li>Juicing protocols for specific health goals</li>
                      <li>Holistic lifestyle recommendations</li>
                      <li>Natural remedy consultations</li>
                    </ul>
                    <p className="mt-3">
                      <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                        Book a free 15-minute consultation
                      </a> to get started.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Uhuru Academy FAQs */}
        <div id="uhuru" className="mb-12">
          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-purple-700" />
                <div>
                  <CardTitle className="text-3xl text-purple-900">Uhuru Academy Low Country SC</CardTitle>
                  <CardDescription className="text-lg">Community School Launching 2026</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="uhuru-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is Uhuru Academy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Uhuru Academy is a revolutionary community school cultivating freedom through four 
                    pillars: <strong>Culture, Agriculture, Fine Arts, and Technology</strong>. "Uhuru" 
                    means "freedom" in Swahili, and our mission is to create a learning environment 
                    where children develop self-sufficiency, cultural pride, and practical skills.
                    <p className="mt-3">
                      <strong>Location:</strong> 5-acre campus in Kingstree, SC<br/>
                      <strong>Founder:</strong> Curtis Heru Boyd<br/>
                      <strong>Philosophy:</strong> Sankofa - "Looking back to move forward"
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uhuru-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    When does Uhuru Academy open?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Timeline:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Summer 2026:</strong> First Summer Camp program launches</li>
                      <li><strong>Fall 2026:</strong> After-school programs begin</li>
                      <li><strong>2027:</strong> Full K-8 curriculum implementation</li>
                      <li><strong>2028:</strong> High school expansion (grades 9-12)</li>
                    </ul>
                    <p className="mt-3">
                      We're currently building community support and collecting interest from local 
                      families. <a href="/uhuru-academy" className="text-purple-700 underline">Join our email list</a> to 
                      stay updated!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uhuru-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    What are the Four Pillars?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>1. Culture:</strong> African history, languages (Swahili, Yoruba), traditional 
                    practices, and identity development
                    <br/><br/>
                    <strong>2. Agriculture:</strong> Hands-on aquaponics, permaculture, sustainable farming, 
                    and food sovereignty
                    <br/><br/>
                    <strong>3. Fine Arts:</strong> Music, dance (including AfroRobics), visual arts, 
                    storytelling, and creative expression
                    <br/><br/>
                    <strong>4. Technology:</strong> Coding, renewable energy, digital literacy, and 
                    innovation for community solutions
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uhuru-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    How can I get involved or enroll my child?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    We're actively building our founding community! Here's how to get involved:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><a href="/uhuru-academy" className="text-purple-700 underline">Sign up for our email list</a> to receive updates</li>
                      <li><a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline">Schedule a meeting</a> with Curtis to discuss enrollment</li>
                      <li>Attend our community events (announced via email)</li>
                      <li>Volunteer or donate to support campus development</li>
                    </ul>
                    <p className="mt-3">
                      <strong>Priority enrollment</strong> will be given to families who join our community 
                      before the 2026 launch.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* AfroRobics FAQs */}
        <div id="afrorobics" className="mb-12">
          <Card className="border-2 border-cyan-200">
            <CardHeader className="bg-cyan-50">
              <div className="flex items-center gap-3">
                <Music className="h-8 w-8 text-cyan-700" />
                <div>
                  <CardTitle className="text-3xl text-cyan-900">AfroRobics</CardTitle>
                  <CardDescription className="text-lg">Movement Meditation Through Ancestral Rhythms</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="afro-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is AfroRobics?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    AfroRobics is a home-grown fitness program that combines African dance, martial arts, 
                    and mindful movement meditation. It's more than exercise—it's a celebration of culture, 
                    wellness, and freedom. Each session integrates rhythmic movement with breath work, 
                    strength training, and community connection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="afro-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do I need experience to join?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    No experience necessary! AfroRobics welcomes all fitness levels and ages. Curtis 
                    provides modifications for beginners and challenges for advanced participants. The 
                    focus is on joy, self-expression, and community—not perfection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="afro-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    What are the class options and pricing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    <strong>Pricing Options:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Drop-In:</strong> $15 per class</li>
                      <li><strong>Monthly Membership:</strong> $50/month (unlimited classes)</li>
                      <li><strong>Private Sessions:</strong> $75 per session (one-on-one)</li>
                    </ul>
                    <p className="mt-3">
                      <strong>Schedule:</strong> Tuesdays & Thursdays 6-7 PM, Saturdays 10-11:30 AM<br/>
                      <strong>Location:</strong> Kingstree Community Center, SC
                    </p>
                    <p className="mt-3">
                      <a href="/afrorobics" className="text-cyan-700 underline">Learn more</a> or 
                      <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline ml-1">book a class</a>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Affiliate Products FAQs */}
        <div id="affiliate" className="mb-12">
          <Card className="border-2 border-amber-200">
            <CardHeader className="bg-amber-50">
              <div className="flex items-center gap-3">
                <Package className="h-8 w-8 text-amber-700" />
                <div>
                  <CardTitle className="text-3xl text-amber-900">Secret Energy Affiliate Products</CardTitle>
                  <CardDescription className="text-lg">10+ Years of Trusted Partnership</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="aff-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    Why do you recommend Secret Energy products?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    We've personally used Secret Energy products for over 10 years and they align 
                    perfectly with our wellness philosophy. Every product we recommend, we use ourselves. 
                    Secret Energy focuses on "superhuman elements for conscious living"—high-quality 
                    supplements, technology, and tools that support optimal health and spiritual growth.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="aff-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is the Hydrolux Ultra and why do you feature it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    The Hydrolux Ultra is a premium hydrogen water generator that creates H2 micro-clusters 
                    for optimal cellular health. Clinical research shows hydrogen water supports energy 
                    production, mental clarity, anti-inflammatory response, and antioxidant activity.
                    <p className="mt-3">
                      Curtis uses it daily and says: "The Hydrolux Ultra is the best investment I've made 
                      in my health. The energy boost and mental clarity are undeniable."
                    </p>
                    <p className="mt-3">
                      <strong>Current Price:</strong> $299 (save $50 from $349)<br/>
                      <a href="/affiliate-products" className="text-amber-700 underline">View all products</a>
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="aff-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do you earn commissions on affiliate products?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    Yes, full transparency: When you purchase through our affiliate links, we receive a 
                    commission at no extra cost to you. This support helps us continue our mission with 
                    OneTribe, Pee Dee Aquaponics, Uhuru Academy, and AfroRobics. We only recommend 
                    products we genuinely use and believe in.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              We're here to help! Reach out to Curtis directly for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:Curtisheru@onetribe.io" className="text-green-700 font-semibold">
                Curtisheru@onetribe.io
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="tel:8032015723" className="text-green-700 font-semibold">
                (803) 201-5723
              </a>
            </div>
            <a href="https://calendly.com/onetribeheru/connection" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Schedule Free 15-Min Meeting
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

