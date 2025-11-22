import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, GraduationCap, PenTool, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import FloatingElement from '../components/FloatingElement';
import { SERVICES, STATISTICS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-aimers-dark">
        
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aimers-red/10 rounded-full blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        </div>

        {/* 3D Floating Elements - Pseudo 3D using CSS & Motion */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingElement delay={0} x={30} y={-30} rotate={15} className="top-1/4 left-10 md:left-1/4 text-aimers-red opacity-20">
            <BookOpen size={120} />
          </FloatingElement>
          <FloatingElement delay={1} x={-20} y={40} rotate={-10} className="bottom-1/3 right-10 md:right-1/4 text-white opacity-10">
            <Calculator size={100} />
          </FloatingElement>
          <FloatingElement delay={2} x={20} y={20} rotate={20} className="top-1/3 right-10 text-gray-500 opacity-20">
            <PenTool size={80} />
          </FloatingElement>
          <FloatingElement delay={1.5} x={-10} y={-20} rotate={-5} className="bottom-20 left-20 text-aimers-red opacity-15">
            <GraduationCap size={140} />
          </FloatingElement>
        </div>

        <div className="max-w-7xl mx-auto px-4 z-10 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-aimers-red font-bold tracking-widest text-sm md:text-base mb-4">PREMIUM COACHING INSTITUTE</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
              Ignite Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aimers-red to-red-400">Potential.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the elite league of top rankers. We don't just teach; we transform average students into achievers through personalized mentorship and rigorous discipline.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                 <Button variant="primary" className="w-full md:w-auto">Book a Free Session</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full md:w-auto">Explore Programs</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
          >
             {STATISTICS.map((stat) => (
               <div key={stat.id} className="text-center">
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}{stat.suffix}</h3>
                 <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
               </div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-aimers-red font-bold text-sm mb-2">OUR PROGRAMS</h2>
              <h3 className="text-4xl font-bold text-white">Designed for Success</h3>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-white hover:text-aimers-red transition-colors mt-4 md:mt-0 group">
              View all programs <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-aimers-red/50 transition-all group"
              >
                <div className="bg-aimers-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aimers-red transition-colors">
                   <Trophy className="text-aimers-red group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm mb-4">{service.grade}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle size={14} className="text-aimers-red mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-white font-bold text-sm flex items-center group-hover:text-aimers-red transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center bg-fixed" />
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't just take our word for it</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Our results speak louder than words. We have consistently produced city toppers and rank holders.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-black p-8 rounded-2xl border border-neutral-800 relative">
                  <div className="text-aimers-red text-6xl font-serif absolute top-4 right-6 opacity-20">"</div>
                  <p className="text-gray-300 mb-6 relative z-10 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${testimonial.id}/200`} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold">{testimonial.name}</h5>
                      <span className="text-aimers-red text-sm font-semibold">{testimonial.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aimers-red relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-white/80 text-lg mb-10">Join Aimers today and take the first step towards your dream career. Limited seats available for the upcoming batch.</p>
          <Link to="/contact">
            <Button variant="secondary" className="mx-auto text-lg px-10 py-4">Apply Now</Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;