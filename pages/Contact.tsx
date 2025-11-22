import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-aimers-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Form */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">Get in <span className="text-aimers-red">Touch</span></h1>
            <p className="text-gray-400 mb-10">
              Have questions about our programs? Want to book a free counseling session? Fill out the form or visit us.
            </p>

            <div className="space-y-6 mb-12">
               <div className="flex items-start gap-4">
                 <div className="bg-neutral-900 p-3 rounded-lg text-aimers-red"><MapPin size={24} /></div>
                 <div>
                   <h4 className="text-white font-bold">Visit Us</h4>
                   <p className="text-gray-400 text-sm">{COMPANY_INFO.address}</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="bg-neutral-900 p-3 rounded-lg text-aimers-red"><Phone size={24} /></div>
                 <div>
                   <h4 className="text-white font-bold">Call Us</h4>
                   <p className="text-gray-400 text-sm">{COMPANY_INFO.phone}</p>
                   <p className="text-gray-400 text-sm">Mon - Sat: 9AM - 7PM</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="bg-neutral-900 p-3 rounded-lg text-aimers-red"><Mail size={24} /></div>
                 <div>
                   <h4 className="text-white font-bold">Email Us</h4>
                   <p className="text-gray-400 text-sm">{COMPANY_INFO.email}</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-6">Book a Free Session</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase mb-1">First Name</label>
                  <input type="text" className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-aimers-red focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase mb-1">Last Name</label>
                  <input type="text" className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-aimers-red focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                 <label className="block text-xs text-gray-500 uppercase mb-1">Phone Number</label>
                 <input type="tel" className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-aimers-red focus:outline-none transition-colors" placeholder="98765 43210" />
              </div>
              <div>
                 <label className="block text-xs text-gray-500 uppercase mb-1">Course Interested In</label>
                 <select className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-aimers-red focus:outline-none transition-colors">
                   <option>Foundation (9-10)</option>
                   <option>JEE (Mains + Adv)</option>
                   <option>NEET</option>
                   <option>Other</option>
                 </select>
              </div>
              <div>
                 <label className="block text-xs text-gray-500 uppercase mb-1">Message</label>
                 <textarea className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-aimers-red focus:outline-none transition-colors h-32" placeholder="Tell us about your goals..."></textarea>
              </div>
              <Button type="submit" className="w-full py-4">Submit Request</Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 w-full h-96 bg-neutral-800 rounded-3xl overflow-hidden relative flex items-center justify-center">
          {/* This is where a Google Maps iframe would go. Using an image/placeholder for now as per instructions constraints */}
          <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10 text-center bg-black/80 p-8 rounded-xl backdrop-blur-sm">
            <MapPin className="text-aimers-red w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Tagore Nagar, Raipur</h3>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline mt-2 block"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;