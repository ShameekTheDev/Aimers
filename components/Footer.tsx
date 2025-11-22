import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-aimers-red rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-extrabold text-white">AIMERS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {COMPANY_INFO.tagline}. We are committed to shaping the future of education through innovation, dedication, and excellence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:bg-aimers-red hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-aimers-red transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-aimers-red transition-colors text-sm">Foundation (9th-10th)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aimers-red transition-colors text-sm">JEE Main & Advanced</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aimers-red transition-colors text-sm">NEET Medical</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aimers-red transition-colors text-sm">Olympiad Prep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aimers-red transition-colors text-sm">Crash Courses</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-aimers-red flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-aimers-red flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-aimers-red flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Aimers Coaching. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;