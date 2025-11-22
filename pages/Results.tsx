import React from 'react';
import { TESTIMONIALS, STATISTICS } from '../constants';

const Results: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-aimers-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">Wall of <span className="text-aimers-red">Fame</span></h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATISTICS.map((stat) => (
            <div key={stat.id} className="bg-neutral-900 p-8 rounded-2xl text-center border border-neutral-800">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}{stat.suffix}</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Detailed Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
           <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
             <div className="flex items-center gap-6 mb-6">
               <img src="https://picsum.photos/id/64/200" alt="Student" className="w-20 h-20 rounded-full object-cover border-2 border-aimers-red" />
               <div>
                 <h3 className="text-2xl font-bold text-white">Anjali Singh</h3>
                 <p className="text-aimers-red font-bold">NEET AIR 152</p>
               </div>
             </div>
             <p className="text-gray-300 italic text-lg leading-relaxed">
               "I joined Aimers in Class 11. The transition from rote learning to conceptual understanding was difficult at first, but the faculty made it seamless. The weekly tests mirrored the actual exam pattern, which killed my exam anxiety."
             </p>
           </div>
           <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
             <div className="flex items-center gap-6 mb-6">
               <img src="https://picsum.photos/id/91/200" alt="Student" className="w-20 h-20 rounded-full object-cover border-2 border-aimers-red" />
               <div>
                 <h3 className="text-2xl font-bold text-white">Vikram Malhotra</h3>
                 <p className="text-aimers-red font-bold">JEE Adv. AIR 340</p>
               </div>
             </div>
             <p className="text-gray-300 italic text-lg leading-relaxed">
               "Mathematics was my nightmare. The visual teaching methods at Aimers changed everything. By the end of Class 12, Maths was my strongest subject. Thank you to the entire team."
             </p>
           </div>
        </div>
        
        {/* More Testimonials Grid */}
        <h2 className="text-2xl font-bold text-white mb-8">More Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {TESTIMONIALS.map(t => (
             <div key={t.id} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h4 className="text-white font-bold mb-1">{t.name}</h4>
                <p className="text-xs text-aimers-red mb-4">{t.result}</p>
                <p className="text-sm text-gray-400">"{t.quote}"</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Results;