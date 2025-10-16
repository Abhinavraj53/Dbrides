import { ArrowRight, Zap, MapPin, Clock } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import image1 from '../../public/Screenshot 2025-10-17 at 12.30.26 AM.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} className="text-green-600" />
              <span>Fast, Reliable & Eco-Friendly</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Ride,
              <span className="block text-blue-600">Just a Tap Away</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Book Auto, Cab, Bike, or Taxi instantly. Experience seamless travel with real-time tracking,
              transparent pricing, and verified drivers across your city.
            </p>

            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5 Min</div>
                  <div className="text-sm text-gray-600">Average Pickup</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Cities Covered</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Book Your Ride</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-blue-600">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative lg:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <PhoneMockup
              screenshot={image1}
              delay={0}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
