import { Calendar, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Ready to start your wellness journey? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            
            {/* Schedule a Call - Calendly */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-teal-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-amber-500 p-4 rounded-full">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-4 text-gray-800">Schedule a Call</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Book a free 30-minute consultation to discuss AfroRobics classes, Sarsaparilla tea orders, mobile juicing services, or wellness coaching.
              </p>
              <a
                href="https://calendly.com/onetribeheru/connection"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-teal-600 to-amber-600 text-white py-4 rounded-lg font-semibold text-center hover:from-teal-700 hover:to-amber-700 transition-all transform hover:scale-105"
              >
                Book Your Call Now
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-amber-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-teal-500 p-4 rounded-full">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-4 text-gray-800">Email Us</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send us a message anytime. We typically respond within 24 hours.
              </p>
              <a
                href="mailto:Curtisheru@onetribe.io"
                className="block w-full bg-gradient-to-r from-amber-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-center hover:from-amber-700 hover:to-teal-700 transition-all transform hover:scale-105"
              >
                Curtisheru@onetribe.io
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-teal-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-amber-500 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-4 text-gray-800">Call or Text</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prefer to talk? Give us a call or send a text message. Available Monday-Saturday, 9am-7pm EST.
              </p>
              <a
                href="tel:803-201-5723"
                className="block w-full bg-gradient-to-r from-teal-600 to-amber-600 text-white py-4 rounded-lg font-semibold text-center hover:from-teal-700 hover:to-amber-700 transition-all transform hover:scale-105"
              >
                (803) 201-5723
              </a>
            </div>

            {/* Discord Community */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-2 border-amber-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-teal-500 p-4 rounded-full">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-4 text-gray-800">Join Our Community</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with fellow wellness seekers, get class updates, share recipes, and join live discussions on Discord.
              </p>
              <a
                href="https://discord.gg/8CTbKaNd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-amber-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-center hover:from-amber-700 hover:to-teal-700 transition-all transform hover:scale-105"
              >
                Join Discord Community
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-teal-500 to-amber-500 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold ml-4 text-gray-800">Find Us</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AfroRobics Classes</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Williamsburg County Recreation Center</strong><br />
                  Kingstree, SC<br />
                  Every Tuesday, 6:00-7:15 PM<br />
                  <span className="text-teal-600 font-semibold">🔴 LIVE STREAMING STARTS THIS TUESDAY!</span>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Juicing Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  We come to you! Available for farmers markets, events, and private bookings throughout the Pee Dee region of South Carolina.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarsaparilla Tea Pickup</h3>
                <p className="text-gray-600 leading-relaxed">
                  Local pickup available in Kingstree, SC. Shipping options coming soon. Contact us to arrange pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/afrorobics">
                <a className="block bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">AfroRobics Classes</h3>
                  <p className="text-sm opacity-90">Movement meditation & fitness</p>
                </a>
              </Link>

              <Link href="/products">
                <a className="block bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Sarsaparilla Tea</h3>
                  <p className="text-sm opacity-90">Organic wellness tea</p>
                </a>
              </Link>

              <Link href="/affiliate-products">
                <a className="block bg-gradient-to-br from-teal-600 to-amber-600 text-white p-6 rounded-xl hover:from-teal-700 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Wellness Products</h3>
                  <p className="text-sm opacity-90">Curated affiliate selection</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-white text-lg mb-6 opacity-90">
            Check out our comprehensive FAQ for answers to common questions.
          </p>
          <Link href="/faq">
            <a className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              View FAQ
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

