import { GraduationCap, BookOpen, Users, Trophy, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Aimers",
  tagline: "Transform Your Potential into Excellence",
  address: "Tagore Nagar, Raipur",
  phone: "7240466860",
  email: "contact@aimers.edu",
  whatsapp: "7240466860"
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/process' },
  { name: 'Results', path: '/results' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const STATISTICS = [
  { id: 1, label: "Students Taught", value: 5000, suffix: "+" },
  { id: 2, label: "Success Rate", value: 98, suffix: "%" },
  { id: 3, label: "Top Rankers", value: 250, suffix: "+" },
  { id: 4, label: "Years Experience", value: 12, suffix: "+" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Foundation Batch",
    grade: "Class 9th - 10th",
    description: "Build a rock-solid foundation for future competitive exams. Focus on concepts and analytical thinking.",
    price: "₹45,000 / year",
    features: ["Daily Practice Sheets", "Concept Clarity", "Olympiad Prep", "Weekly Tests"]
  },
  {
    id: 2,
    title: "Target Batch",
    grade: "Class 11th - 12th",
    description: "Intensive coaching for Board exams and competitive entrance tests (JEE/NEET).",
    price: "₹85,000 / year",
    features: ["Advanced Problem Solving", "Previous Year Papers", "1-on-1 Mentorship", "Doubt Clearing Sessions"]
  },
  {
    id: 3,
    title: "Crash Course",
    grade: "Repeater / Dropper",
    description: "Fast-track your preparation with our high-yield crash courses designed for rank improvement.",
    price: "₹25,000 / batch",
    features: ["Rapid Revision", "Mock Test Series", "Time Management Strategy", "Focus on High Weightage Topics"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    result: "AIR 45 - JEE Advanced",
    quote: "Aimers changed the way I approached problems. The mentorship was personal and highly effective."
  },
  {
    id: 2,
    name: "Priya Patel",
    result: "98.5% - CBSE Boards",
    quote: "The structured curriculum and supportive environment made learning stress-free and enjoyable."
  },
  {
    id: 3,
    name: "Amit Verma",
    result: "NEET Qualified",
    quote: "From basics to advanced concepts, the faculty at Aimers stood by me every step of the way."
  }
];

export const FAQS = [
  {
    question: "How do I apply for the scholarship?",
    answer: "You can apply for our scholarship by clicking the 'Apply for Scholarship' button on our website. We conduct a scholarship admission test (ASAT) every Sunday."
  },
  {
    question: "What is the batch size?",
    answer: "To ensure personal attention, we maintain a strict batch size of maximum 30 students per batch."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, all students receive comprehensive study materials, daily practice sheets (DPP), and access to our online library."
  },
  {
    question: "Where are you located?",
    answer: "We are prime located at Tagore Nagar, Raipur. You can find the map location on our Contact page."
  }
];