import { Target, Users, Award, TrendingUp } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import image3 from '../../public/Screenshot 2025-10-17 at 12.30.26 AM.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <PhoneMockup
              screenshot={image3}
              delay={300}
            />
          </div>

          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-blue-600">DB Rides (DRIVER BANDHU)</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're revolutionizing urban mobility by connecting riders with verified drivers across multiple vehicle categories.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide affordable, safe, and sustainable transportation solutions that empower communities and reduce carbon footprint through electric vehicle integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built on trust and reliability, we've created a thriving ecosystem of drivers and riders working together to make every journey comfortable and memorable.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every driver undergoes thorough verification. We're committed to maintaining the highest standards of safety, punctuality, and customer service.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From a single city to 50+ locations nationwide, we're expanding rapidly while maintaining our core values of quality service and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Commute?</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join millions of satisfied riders who have already discovered the DB Rides (DRIVER BANDHU) difference.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
