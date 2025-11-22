import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Counseling & Assessment", desc: "We assess your current standing through a diagnostic test and understand your goals." },
  { title: "Enrollment & Batching", desc: "Based on your assessment, you are placed in a batch that matches your learning pace." },
  { title: "Concept Building", desc: "Intensive lectures covering fundamental to advanced concepts using 3D visualization tools." },
  { title: "Rigorous Testing", desc: "Weekly part-tests and monthly cumulative tests to track progress and retention." },
  { title: "Analysis & Feedback", desc: "Micro-analysis of test performance to identify weak areas and corrective measures." },
  { title: "Final Sprint", desc: "Mock test series, time management drills, and stress management sessions before exams." }
];

const Process: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-aimers-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">How It Works</h1>
        <p className="text-gray-400 text-center mb-16">Your roadmap from enrollment to the exam hall.</p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 bg-aimers-red rounded-full border-4 border-black z-10 mt-1.5"></div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className={`bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-aimers-red transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-aimers-red font-bold text-sm mb-2">STEP 0{idx + 1}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;