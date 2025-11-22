import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Scholarship Banner */}
      <div className="bg-aimers-red text-white text-xs md:text-sm font-bold text-center py-2 tracking-wider cursor-pointer hover:bg-red-700 transition-colors z-50 relative">
        APPLY FOR SCHOLARSHIP TODAY • ASAT EXAM EVERY SUNDAY
      </div>

      <nav className={`fixed top-[32px] md:top-[36px] left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-aimers-red rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-white group-hover:text-aimers-red transition-colors">
              AIMERS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors ${location.pathname === link.path ? 'text-aimers-red' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all text-sm font-bold"
            >
              <Phone size={16} className="text-aimers-red" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-black pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-2xl font-bold text-white hover:text-aimers-red"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">Need help? Call us</p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-2xl font-bold text-aimers-red">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;