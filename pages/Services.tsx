import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, BookOpen, Users } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-aimers-dark">
      
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Programs</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Structured learning paths designed to maximize your performance in board exams and competitive entrance tests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`relative bg-neutral-900 rounded-2xl overflow-hidden border ${idx === 1 ? 'border-aimers-red' : 'border-neutral-800'} flex flex-col`}
            >
              {idx === 1 && (
                <div className="bg-aimers-red text-white text-xs font-bold py-1 text-center">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.grade}</p>
                <div className="text-3xl font-bold text-aimers-red mb-1">{service.price}</div>
                <p className="text-xs text-gray-500 mb-8">excluding taxes</p>

                <div className="space-y-4 text-left">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start">
                     <Clock size={18} className="text-aimers-red mr-3 mt-1 flex-shrink-0" />
                     <span className="text-gray-300 text-sm">6 Days a week classes</span>
                  </div>
                  <div className="flex items-start">
                     <Users size={18} className="text-aimers-red mr-3 mt-1 flex-shrink-0" />
                     <span className="text-gray-300 text-sm">Batch size: 30 Max</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black/20">
                <Link to="/contact">
                  <Button 
                    variant={idx === 1 ? 'primary' : 'secondary'} 
                    className="w-full"
                  >
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Methodology Strip */}
      <section className="py-20 bg-neutral-900 mt-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="md:w-1/2">
             <h3 className="text-3xl font-bold text-white mb-4">1-on-1 Doubt Clearing</h3>
             <p className="text-gray-400 mb-6">We understand that every student learns at a different pace. Our dedicated doubt clearing cells ensure no concept remains unexplained.</p>
             <ul className="space-y-2">
               <li className="text-gray-300 flex items-center"><div className="w-2 h-2 bg-aimers-red rounded-full mr-3"></div> Dedicated Faculty Time</li>
               <li className="text-gray-300 flex items-center"><div className="w-2 h-2 bg-aimers-red rounded-full mr-3"></div> Video Solutions for Sheets</li>
               <li className="text-gray-300 flex items-center"><div className="w-2 h-2 bg-aimers-red rounded-full mr-3"></div> Weekend Remedial Classes</li>
             </ul>
           </div>
           <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Classroom" className="object-cover w-full h-full opacity-80" />
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Services;