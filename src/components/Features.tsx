import { MapPin, DollarSign, Shield, Smartphone, Clock, Leaf } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import image2 from '../../public/Screenshot 2025-10-17 at 12.31.33 AM.png';

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track your ride in real-time with live GPS updates and accurate ETAs.',
    color: 'blue'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden charges. See upfront pricing with fare breakdown before you book.',
    color: 'green'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'All drivers are verified with background checks. Your safety is our priority.',
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'Easy Booking',
    description: 'Book your ride in just a few taps. Simple, fast, and hassle-free.',
    color: 'green'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Need a ride at 3 AM? We\'re here for you, anytime, anywhere.',
    color: 'blue'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Choose electric vehicles and contribute to a greener environment.',
    color: 'green'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">DriveBook</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of convenience, safety, and affordability with our premium ride-booking service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                } group-hover:scale-110 transition-transform`}>
                  <feature.icon
                    className={feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'}
                    size={28}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <PhoneMockup
              screenshot={image2}
              delay={200}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white">
            <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
            <div className="text-gray-600 font-medium">Happy Riders</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white">
            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Verified Drivers</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
