import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-aimers-dark">
      
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Our Mission is <span className="text-aimers-red">Excellence</span>
          </motion.h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            At Aimers, we believe every student has the potential to be a ranker. Our job is to unlock that potential through discipline, structure, and unwavering support.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-aimers-red/20 rounded-xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" 
              alt="Founder teaching" 
              className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Meet the Coach</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded by Mr. R.K. Verma, a visionary educator with over 15 years of experience in coaching industry. Having mentored over 5000+ students, he realized that the gap between an average student and a topper isn't intelligence—it's strategy and consistency.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              "Aimers was born out of a desire to provide premium, distraction-free education where the focus is solely on results and conceptual clarity."
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                <h4 className="text-aimers-red font-bold text-xl mb-1">15+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                <h4 className="text-aimers-red font-bold text-xl mb-1">250+</h4>
                <p className="text-sm text-gray-500">IITians Produced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: "Precision", desc: "We focus on what matters. No fluff, just syllabus-oriented, high-yield teaching." },
              { icon: Users, title: "Mentorship", desc: "We don't just teach subjects; we mentor lives. Every student gets personal attention." },
              { icon: Award, title: "Excellence", desc: "We don't settle for average. We push every student to achieve their personal best." }
            ].map((item, idx) => (
              <div key={idx} className="bg-black p-8 rounded-xl text-center border border-neutral-800 hover:border-aimers-red transition-colors">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6 text-aimers-red">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;